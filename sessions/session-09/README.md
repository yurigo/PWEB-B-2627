# Sesión 09: JavaScript, DOM y eventos

## Qué se aprende

El navegador convierte el HTML en el **DOM** (*Document Object Model*), un
árbol de objetos que JavaScript puede consultar y modificar. En esta sesión
conectamos el código con la página: seleccionamos elementos, respondemos a
eventos, procesamos formularios y actualizamos el contenido sin recargarlo.

Los ejemplos están en [`hello-dom/`](hello-dom/):

- [`index.html`](hello-dom/index.html): página con controles y tarjetas.
- [`script.js`](hello-dom/script.js): selección, eventos, formularios,
  creación de contenido y delegación de eventos.
- [`style.css`](hello-dom/style.css): estilos de las tarjetas, el tema oscuro y
  la animación de pulso de la bola.

## Acceder al DOM

`document` representa la página. `querySelector()` busca el primer elemento que
coincide con un selector CSS; `querySelectorAll()` devuelve todos los que
coinciden:

```js
const boton = document.querySelector("#addElementButton");
const botones = document.querySelectorAll(".buttons > button");
```

Si un selector no encuentra nada, `querySelector()` devuelve `null`. Hay que
comprobar que el elemento existe antes de usarlo, especialmente si el script se
comparte entre páginas:

```js
if (boton) {
  boton.addEventListener("click", manejarClick);
}
```

Los elementos se pueden consultar por su `id`, clase, atributos y relaciones,
igual que con CSS. Una vez seleccionado un elemento se pueden leer o cambiar
propiedades como `textContent`, alternar clases con `classList.toggle()` y
consultar atributos `data-*` mediante `dataset`.

Para crear contenido se usan `document.createElement()`, propiedades y métodos
del DOM como `append()` o `appendChild()`. Para texto proporcionado por el
usuario, `textContent` lo trata como texto y no como HTML. No se debe insertar
contenido no confiable con `innerHTML`.

## Eventos: responder a lo que hace el usuario

Un evento representa algo que ocurrió, como un clic, el movimiento del ratón o el
envío de un formulario. `addEventListener()` registra la función que debe
responder:

```js
boton.addEventListener("click", (event) => {
  boton.textContent = "☀️";
});
```

El navegador pasa un objeto `event` a la función. Entre sus propiedades:

- `event.target`: el elemento concreto donde se originó el evento.
- `event.currentTarget`: el elemento al que se añadió este listener.
- `event.type`: el tipo de evento, por ejemplo `"click"`.

No siempre coinciden `target` y `currentTarget`: el clic puede comenzar en un
elemento hijo y llegar al elemento que escucha el evento.

### Evitar la acción predeterminada

Algunos eventos tienen una acción predeterminada del navegador. Por ejemplo, un
formulario intenta enviarse y un enlace navega a otra dirección. Dentro de un
listener, `event.preventDefault()` cancela esa acción, pero no detiene la
propagación del evento:

```js
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  // Procesar el formulario en esta página.
});
```

### Propagación de eventos

Un evento puede recorrer la jerarquía de elementos del DOM. En la fase de
**captura** baja desde el documento hacia el elemento objetivo; en la fase de
**bubbling** sube desde el objetivo por sus antecesores. Por defecto,
`addEventListener()` escucha durante bubbling. Por eso un listener en una tarjeta
puede recibir el clic que ocurrió en uno de sus botones.

`event.stopPropagation()` impide que el evento siga recorriendo esa jerarquía.
No hay que usarlo por defecto: puede impedir que otros componentes o listeners
respondan. `preventDefault()` y `stopPropagation()` resuelven problemas
distintos.

### Delegación de eventos

En vez de añadir un listener a cada botón, se puede escuchar en un contenedor
común y comprobar qué elemento originó el clic. Esto funciona también para
elementos añadidos más tarde, siempre que sus eventos lleguen al contenedor:

```js
cards.addEventListener("click", (event) => {
  const boton = event.target.closest("[data-fantastic]");
  if (!boton || !cards.contains(boton)) return;

  boton.classList.toggle("clicked");
});
```

La delegación aprovecha el bubbling. `closest()` permite encontrar el botón
marcado aunque se pulse un elemento anidado dentro de él; `contains()` limita la
búsqueda al contenedor que escucha. El ejemplo de `script.js` usa
`event.target.dataset.fantastic` para reconocer los botones de «me gusta».

## Formularios: mucha funcionalidad gratis

Un `<form>` no es solo un contenedor: da al navegador una forma estándar de
validar, recopilar y enviar controles.

- La validación HTML puede activarse con atributos como `required`, `type`,
  `min`, `max`, `minlength` y `pattern`. El navegador avisa antes del envío si
  un control no cumple las restricciones.
- El evento `submit` se produce al pulsar el botón de envío y también al enviar
  desde el teclado, por ejemplo con Enter en un campo.
- `new FormData(formulario)` recopila los controles que tienen `name`; sus
  valores se pueden leer con `datos.get("nombre")`.
- `formulario.reset()` devuelve los controles a sus valores iniciales.
- Si no se cancela el evento `submit`, el navegador realiza el envío normal del
  formulario. `preventDefault()` permite procesar los datos en JavaScript en
  lugar de navegar o recargar la página.

La validación del navegador mejora la experiencia, pero los datos también deben
validarse en el servidor cuando se envían a uno. En `hello-dom/script.js`, el
listener evita el envío normal, obtiene los valores con `FormData`, crea una
tarjeta y finalmente llama a `reset()`.

## Una bola que sigue al ratón y pulsa

El elemento de la bola y la lógica JavaScript para moverla y activar el pulso
están comentados en `hello-dom/index.html` y `hello-dom/script.js`; sus estilos
están definidos en `hello-dom/style.css`. Al activarlo, el evento `mousemove`
entrega las coordenadas del puntero en `event.clientX` y `event.clientY`; se
pueden usar para actualizar `style.left` y `style.top` de `.bola`. El listener de
clic añade la clase `pulse`, que ejecuta la animación CSS `@keyframes pulso`; un
`setTimeout()` quita la clase para que se pueda volver a activar.

La demostración está comentada para que se pueda seguir cada paso: hay que
habilitar el elemento `.bola`, seleccionarlo y descomentar las actualizaciones
de posición y el listener de clic. La clase y la animación correspondiente están
definidas en la hoja de estilos.

## Ejemplos del repositorio

- [`hello-dom/index.html`](hello-dom/index.html): formulario, botones y tarjetas
  para interactuar.
- [`hello-dom/script.js`](hello-dom/script.js): `querySelector()`,
  `addEventListener()`, `event.target`, `preventDefault()`, `FormData`,
  `reset()`, `createElement()` y delegación.
- [`hello-dom/style.css`](hello-dom/style.css): cambio de tema, tarjetas y
  animación de pulso.

## Referencias

- [Introducción al DOM (MDN)](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
- [Eventos (MDN)](https://developer.mozilla.org/es/docs/Web/Events)
- [Propagación de eventos (MDN)](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Validación de formularios (MDN)](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [FormData (MDN)](https://developer.mozilla.org/es/docs/Web/API/FormData)
