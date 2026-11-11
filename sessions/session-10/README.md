# Sesión 10: promesas, async/await y localStorage

## Qué se aprende

Muchas operaciones, como una petición de red, tardan un tiempo en completarse.
En lugar de bloquear la página mientras esperan, las promesas permiten describir
qué hacer cuando llega un resultado o se produce un error. En esta sesión
también guardamos datos sencillos en el navegador con `localStorage`.

## Promesas y asincronía

Una **promesa** representa el resultado futuro de una operación. Empieza
**pendiente** (*pending*) y termina **cumplida** (*fulfilled*) con un valor o
**rechazada** (*rejected*) con un motivo. Una vez terminada, no cambia de
estado. Los manejadores se ejecutan de forma asíncrona, después del código
síncrono actual, incluso si la promesa ya estaba cumplida.

```js
const saludo = Promise.resolve("Hola");
saludo.then((texto) => console.log(texto));
console.log("Primero");
// Primero
// Hola
```

La promesa no es el resultado en sí: hay que acceder a su valor mediante un
manejador o esperar con `await`. Por ejemplo, `fetch()` devuelve una promesa de
un objeto `Response`, no directamente los datos JSON.

## Encadenar con `then()` y gestionar errores con `catch()`

`then()` recibe una función que se ejecuta al cumplirse la promesa y devuelve
**otra promesa**. El valor retornado pasa al siguiente `then()`. Si se devuelve
una promesa, la cadena espera su resultado; si se lanza un error, la cadena se
rechaza. `catch()` recibe el rechazo de los pasos anteriores y también devuelve
una promesa: si retorna un valor, los pasos siguientes pueden continuar.

```js
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
  })
  .catch((error) => {
    console.error("No se pudieron cargar los Pokémon:", error);
  });
```

`fetch()` rechaza ante errores de red, pero una respuesta HTTP como 404 o 500
no rechaza por sí sola: hay que comprobar `response.ok`. Además,
`response.json()` devuelve otra promesa y puede rechazar si el cuerpo no es
JSON válido. Es importante retornar esa promesa para que el siguiente paso y
`catch()` esperen también su resultado.

## `async` y `await`

`async` declara una función que siempre devuelve una promesa: su valor de
retorno cumple la promesa y un error lanzado la rechaza. `await` espera la
resolución de una promesa sin bloquear el hilo principal; si se rechaza,
`await` lanza el motivo del rechazo. Solo se usa dentro de funciones `async` o
en el nivel superior de un módulo.

La misma petición se puede escribir con flujo parecido al síncrono:

```js
async function cargarPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return data.results;
}

async function mostrarPokemon() {
  try {
    const pokemon = await cargarPokemon();
    console.log(pokemon);
  } catch (error) {
    console.error("No se pudieron cargar los Pokémon:", error);
  }
}

mostrarPokemon();
```

`try...catch` captura tanto los rechazos esperados con `await` como los errores
lanzados dentro de `try`. Si una función `async` no los captura, quien la llama
debe esperar su promesa o usar `.catch()` para evitar un rechazo sin gestionar.
`await` no hace simultáneas las operaciones: para tareas independientes se
pueden iniciar juntas y esperar con `Promise.all()`, que rechaza si alguna falla.

## Guardar datos con `localStorage`

`localStorage` es un almacén de pares clave-valor del navegador asociado al
**origen** (protocolo, dominio y puerto). Persiste normalmente entre recargas y
sesiones del navegador, hasta que se borre; no se comparte entre orígenes ni es
una base de datos del servidor. Sus operaciones son síncronas y almacenan
strings, por lo que conviene reservarlo para cantidades pequeñas de datos.

```js
localStorage.setItem("tema", "oscuro");
const tema = localStorage.getItem("tema"); // "oscuro", o null si no existe
localStorage.removeItem("tema");           // elimina solo esta clave
```

Para guardar arrays u objetos se usa JSON: `JSON.stringify()` convierte el
valor en texto y `JSON.parse()` lo reconstruye. Hay que contemplar tanto datos
inválidos como errores de acceso o de cuota (por ejemplo, almacenamiento
bloqueado o lleno):

```js
function cargarFavoritos() {
  try {
    const texto = localStorage.getItem("favs");
    const favoritos = JSON.parse(texto ?? "[]");
    return Array.isArray(favoritos) ? favoritos : [];
  } catch (error) {
    console.error("No se pudieron leer los favoritos:", error);
    return [];
  }
}

function guardarFavoritos(favoritos) {
  try {
    localStorage.setItem("favs", JSON.stringify(favoritos));
  } catch (error) {
    console.error("No se pudieron guardar los favoritos:", error);
  }
}

const favoritos = cargarFavoritos();
favoritos.push(1);
guardarFavoritos(favoritos);
```

`Array.isArray()` comprueba el tipo del resultado, no el contenido de cada
elemento; se deben validar los datos antes de utilizarlos. `removeItem()` borra
una clave y `clear()` borra **todas** las claves del origen, incluidas las de
otras partes de la aplicación. No guardes contraseñas, tokens ni datos
sensibles: cualquier JavaScript que se ejecute en el origen puede acceder a
ellos y el usuario puede modificarlos o borrarlos.

## Ejemplos de clase

- [`index.html`](index.html) carga por defecto
  [`index-async-await.js`](index-async-await.js) como módulo: consulta la
  PokéAPI, muestra resultados y usa `previous` y `next` para paginar. El botón
  `post` envía JSON a DummyJSON; los botones `1` y `2` guardan IDs en
  `localStorage` bajo `favs`, que se recuperan con `loadIds()`.
- [`index.js`](index.js) muestra la misma petición inicial mediante
  `then()` y `catch()`. [`index-async-await-no-module.js`](index-async-await-no-module.js)
  usa `await` dentro de una función `async` en un script clásico. Ambos son
  alternativas comentadas en `index.html`; activa solo una a la vez.
- [`pokemon.html`](pokemon.html) y [`pokemon.js`](pokemon.js) leen el parámetro
  `name` de la URL, solicitan el detalle y lo muestran en la página.
  [`data.js`](data.js) contiene una muestra local de la respuesta de la lista.

Para probar la versión predeterminada, desde la raíz del repositorio ejecuta:

```sh
python3 -m http.server 8000 --directory sessions/session-10
```

Abre `http://localhost:8000/` y usa las herramientas de desarrollo para
consultar Console, Network y Application/Storage. Se necesita conexión a las
API. Servir este directorio como raíz también permite que funcionen las rutas
`/pokemon.html` y `/` de los ejemplos. Puedes comprobar `favs` pulsando los
botones `1` o `2` y recargando la página.

## Referencias

- [Usar promesas (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)
- [`async function` (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [Usar Fetch (MDN)](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [Web Storage API (MDN)](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API)
