# Sesión 08: JavaScript 101, fundamentos y módulos

## Qué se aprende

HTML define qué hay en la página, CSS define cómo se ve y JavaScript define qué
puede ocurrir. Esta sesión introduce los fundamentos del lenguaje y, sobre
todo, cómo representar el contenido como **datos** (objetos y arrays) que se
pueden consultar y transformar mediante funciones. Conectar esos datos con el
HTML (DOM y eventos) se aborda en la sesión siguiente.

El código de ejemplo está en [`hello-javascript/`](hello-javascript/):

- [`index.html`](hello-javascript/index.html): carga `app.js` con `type="module"`.
- [`app.js`](hello-javascript/app.js): recorrido por los conceptos de la sesión.
- [`alumnos.js`](hello-javascript/alumnos.js): módulo con datos de ejemplo.

## Cargar JavaScript en el navegador

Un archivo `.js` se vincula con `<script>`. En este curso se colocan en el
`head` usando módulos o `defer`:

| Tipo | Comportamiento |
| --- | --- |
| Script clásico sin `defer` | Puede bloquear el procesado del HTML al descargarse y ejecutarse. |
| Script clásico con `defer` | Se ejecuta cuando el HTML ya ha sido procesado. |
| `type="module"` | Se difiere automáticamente y permite `import` y `export`. |

```html
<script type="module" src="app.js"></script>
```

Un módulo se ejecuta en modo estricto y sus variables de nivel superior no se
convierten en propiedades de `window`.

## Módulos: `import` y `export`

Dividir el código en módulos mejora su mantenimiento. Un archivo publica valores
con `export` y otro los trae con `import`:

```js
// alumnos.js
export const alumnos = [];

// app.js
import { alumnos } from "./alumnos.js";
```

Las llaves indican una exportación **con nombre**, que debe coincidir con el
nombre importado. La ruta es relativa al archivo que importa y debe incluir la
extensión `.js`.

> Los módulos no funcionan abriendo el HTML con `file://` (restricciones CORS).
> Hay que servirlo desde un servidor local: la extensión Live Server de VS Code
> o `python3 -m http.server`.

## Variables y tipos de datos

Una variable es un nombre asociado a un valor. Los valores tienen tipo; una
variable declarada con `let` puede contener valores de distintos tipos.

| Tipo | Ejemplo |
| --- | --- |
| `string` | `"hola"`, `` `hola` `` |
| `number` | `24`, `3.5`, `NaN` |
| `boolean` | `true`, `false` |
| `undefined` | variable sin valor asignado |
| `null` | ausencia intencionada de valor |
| `bigint` | `123n` |
| `symbol` | `Symbol("id")` |
| `object` | `{ title: "Demo" }`, arrays, funciones |

`typeof` devuelve el tipo de un valor. Curiosidades: `typeof null` es
`"object"` (rareza histórica) y `typeof NaN` es `"number"`.

## `const`, `let` y `var`

- `const`: la variable no se puede **reasignar**.
- `let`: la variable puede reasignarse.
- `var`: ámbito de función y *hoisting*; se evita en código nuevo.

`const` no hace inmutable el valor: `const o = {}; o.x = 1;` funciona, pero
`o = {}` lanza un error. Se protege la referencia, no el contenido del objeto.

## Igualdad: `===` frente a `==`

`==` realiza conversiones implícitas (`5 == "5"` es `true`); `===` y `!==`
comparan sin convertir tipos (`5 === "5"` es `false`). Se usan comparaciones
estrictas y conversiones explícitas (`Number("5")`). Un `input` devuelve
siempre un `string`, y `Number("")` es `0`, de modo que convertir no equivale a
validar.

## Condicionales y bucles

- `if / else if / else` toma decisiones a partir de condiciones.
- `switch` compara una variable con varios valores concretos (no olvidar
  `break`).
- Los operadores lógicos son `&&`, `||` y `!`.
- Un *early return* detecta el dato incorrecto y sale de la función, evitando
  anidamiento.
- `for` repite un número conocido de veces; `for...of` recorre los valores de
  una colección; `while` repite mientras se cumpla una condición (cuidado con
  los bucles infinitos).

## Truthy, falsy, `||` y `??`

Son *falsy*: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` y `NaN`. El
resto es *truthy*, incluidos `[]` y `{}`.

```js
const seats = 0;
seats || 20; // 20: 0 es falsy
seats ?? 20; // 0: solo null/undefined activan el valor por defecto
```

`||` da un valor por defecto ante cualquier *falsy*; `??` solo cuando el dato
falta. Para plazas, `0` es un dato válido.

## Objetos y arrays: el modelo de datos

Un objeto `{}` agrupa propiedades con nombre; un array `[]` agrupa elementos
ordenados con índices desde `0`. Se accede con `obj.nombre`, `arr[0]` y
`arr.length`. Un listado de elementos se modela como un array de objetos, como
`alumnos` en `alumnos.js`. Para fechas conviene el formato `YYYY-MM-DD`, que
se ordena cronológicamente comparando strings, y `null` para expresar
explícitamente que un dato no existe.

## Métodos de arrays

| Método | Pregunta | Resultado |
| --- | --- | --- |
| `filter()` | ¿Cuáles cumplen la condición? | Array |
| `map()` | ¿En qué convierto cada elemento? | Array |
| `find()` | ¿Cuál es el primero que coincide? | Elemento o `undefined` |
| `findIndex()` | ¿En qué posición está? | Índice o `-1` |
| `some()` / `every()` | ¿Existe alguno / cumplen todos? | Boolean |

Estos métodos no modifican el array original. En cambio `push()`, `pop()`,
`shift()` y `sort()` **sí lo mutan**; para ordenar sin alterar los datos se
copia antes: `[...events].sort((a, b) => a.date.localeCompare(b.date))`.

## Destructuring y spread

```js
const { title, date } = event;      // extrae propiedades
const [first, second] = categories; // extrae elementos
const updated = { ...event, featured: true }; // copia y añade
```

Spread realiza una copia **superficial**: los objetos anidados siguen
compartidos. El resto de un array se recoge con `...rest`.

## Optional chaining y nullish coalescing

```js
const venue = event.location?.name ?? "Venue pending";
```

`?.` accede a la propiedad solo si el valor previo no es `null` ni `undefined`;
`??` aporta un valor por defecto. No debe usarse para ocultar errores en datos
obligatorios.

## Un vistazo al DOM

El ejemplo anticipa la próxima sesión: `document.querySelector()` localiza un
elemento, `addEventListener("click", fn)` define qué hacer al pulsarlo y
`classList.toggle()` añade o quita una clase CSS.

## Depuración

Proceso: reproducir, inspeccionar, formular una hipótesis y verificar. En
DevTools (F12): **Console** (`console.log`, `console.table`), **Sources**
(breakpoints, ejecución paso a paso) y **Network** (comprobar que los módulos
cargan). Ejemplo: `"80" + 75` da `"8075"`; `typeof` revela el problema y
`Number("80") + 75` da `155`.

## Ejercicio semanal 8: Campus Pulse

Pasar los cuatro eventos del HTML a datos JavaScript y preparar la lógica para
el filtro de la sesión siguiente (sin cambiar todavía la apariencia):

1. Crear `data.js` y `app.js`; `events.html` carga `app.js` como módulo.
2. Convertir los eventos en objetos con `id`, `title`, `description`, `date`,
   `category` (`"workshop"` o `"talk"`), `detailUrl` (una sola URL y tres
   `null`), `capacity` y `registered` (exactamente un evento sin plazas).
3. Exportar `filterByCategory()`, `sortByDate()` y `seatsLeft()`
   (nunca negativo, con `Math.max(0, ...)`).
4. Probar en `app.js` con `console.log()` y `console.table()`: array vacío,
   todas las categorías, workshops, talks, orden cronológico, sin plazas.
5. Comprobar que filtrar y ordenar no modifican el array original.

## Errores habituales

- No aparece nada en Console: ¿se cargó `app.js`? ¿hay errores de importación?
- Errores de módulos/CORS: se abrió con `file://` en lugar de `localhost`.
- `filter()` devuelve vacío: el string de la categoría no coincide exactamente.
- El orden original cambia: se usó `events.sort()` sin copiar.
- La suma concatena texto: se mezclan strings y números.
