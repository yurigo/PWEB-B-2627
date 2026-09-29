# Sesión 02: HTML semántico (HTML5)

## Objetivos

HTML5 permite expresar la estructura y el propósito del contenido, no solo su
apariencia. El uso de elementos semánticos mejora la organización del
documento, la accesibilidad y la comprensión que los navegadores y otras
herramientas tienen de la página.

## Conceptos principales

- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` y
  `<footer>` dividen la página en regiones con significado.
- Un `<button>` es preferible a un `<div>` con apariencia de botón porque ya
  incluye foco, activación por teclado, estado deshabilitado y la semántica
  esperada.
- `<details>` permite mostrar y ocultar contenido adicional de forma nativa.
- Los formularios agrupan controles y permiten enviar y validar información.
  Los elementos `<label>`, los tipos de `input` y un `<form>` correctamente
  definido favorecen la accesibilidad.
- `srcset` y `<picture>` permiten escoger imágenes adecuadas para diferentes
  tamaños de pantalla. `<audio>` y `<video>` incorporan contenido multimedia
  usando fuentes alternativas.

## Ejemplos

- [`final/index.html`](final/index.html): explicación y demostración de los
  elementos semánticos, botones, `details`, formularios, imágenes adaptables y
  multimedia.
- [`final/ejercicio1.html`](final/ejercicio1.html): estructura semántica de un
  blog.
- [`final/ejemplo-boton.html`](final/ejemplo-boton.html): comparación entre
  `div` y `button`.
- [`final/ejemplo-details.html`](final/ejemplo-details.html): widget
  desplegable con `details`.
- [`final/ejemplo-formulario.html`](final/ejemplo-formulario.html) y
  [`final/ejemplo-formulario-sin-form.html`](final/ejemplo-formulario-sin-form.html):
  comparación de un formulario completo con controles sin `<form>`.

La carpeta [`inicio`](inicio/) contiene una versión inicial de los ejemplos
para comparar el trabajo antes y después de la sesión.
