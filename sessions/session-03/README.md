# Sesión 03: CSS: estilos y selectores

## Objetivos

CSS (Cascading Style Sheets) define la presentación de los documentos HTML:
colores, tipografías, tamaños, espaciado, posición y distribución de los
elementos. La separación entre estructura (HTML) y presentación (CSS) facilita
el mantenimiento y la reutilización de estilos.

## Formas de aplicar CSS

- **Inline**: se escribe en el atributo `style` del propio elemento. Es útil
  para una prueba puntual, pero mezcla contenido y presentación y dificulta la
  reutilización.
- **Internal**: se escribe dentro de un bloque `<style>` en el `<head>`.
  Resulta apropiado para estilos exclusivos de una página.
- **External**: se escribe en un archivo `.css` y se enlaza con `<link>`.
  Es la opción más mantenible cuando varias páginas comparten estilos.

## Selectores y cascada

Los selectores indican qué elementos reciben una declaración. En los ejemplos
se utilizan selectores de elemento (`section`, `h1`), de clase (`.important`),
de identificador (`#seccion6`), descendientes y combinaciones, además de
pseudoclases como `:hover`, `:visited`, `:focus-visible` y `:invalid`.
También se muestran pseudoelementos como `::before`, `::after`,
`::first-letter` y `::marker`.

Cuando varias reglas coinciden, la cascada tiene en cuenta la importancia, la
especificidad y el orden de aparición. Por eso conviene elegir selectores
claros y evitar estilos inline innecesarios.

## Ejemplos

- [`examples/pinta-y-colorea/index.html`](examples/pinta-y-colorea/index.html):
  página que enlaza dos hojas externas, `reset.css` y `styles.css`.
- [`examples/pinta-y-colorea/styles.css`](examples/pinta-y-colorea/styles.css):
  ejemplos de selectores, clases, pseudoclases, pseudoelementos, colores,
  tipografía y fondos.
- [`examples/pinta-y-colorea/reset.css`](examples/pinta-y-colorea/reset.css):
  estilos iniciales comunes para reducir diferencias entre navegadores.
- [`examples/pinta-y-colorea/pagina2.html`](examples/pinta-y-colorea/pagina2.html),
  [`pagina3.html`](examples/pinta-y-colorea/pagina3.html) y
  [`pagina4.html`](examples/pinta-y-colorea/pagina4.html): páginas adicionales
  que comparten los estilos externos.
