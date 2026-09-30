# Sesión 05: CSS Flexbox

## Qué se aprende

Flexbox resuelve distribuciones en una dimensión: organiza elementos en una
fila o columna y reparte el espacio disponible entre ellos. El contenedor
flexible controla la dirección, el ajuste y la alineación; cada elemento puede
definir cuánto crece, cuánto se reduce y cuál es su tamaño inicial.

## Ejes y alineación

`display: flex` convierte a los hijos directos en elementos flexibles. Con
`flex-direction: row` el eje principal sigue la fila y el eje transversal la
cruza; con `column` se intercambian. Por eso `justify-content` distribuye sobre
el eje principal y `align-items` alinea sobre el transversal. Los nombres de
los ejes dependen de la dirección, no de que el eje sea siempre horizontal o
vertical.

`align-content` distribuye líneas flexibles cuando hay varias; no sustituye a
`align-items` en un contenedor de una sola línea. `align-self` permite cambiar
la alineación transversal de un elemento concreto.

## Ajuste y tamaño

- `gap` añade separación uniforme sin márgenes entre elementos.
- `flex-wrap: wrap` permite que los elementos pasen a otra línea cuando no
  caben. Cada línea distribuye sus elementos independientemente.
- `flex-basis` indica el tamaño inicial en el eje principal; `flex-grow`
  reparte espacio libre y `flex-shrink` permite reducir elementos cuando falta
  espacio.
- `flex: 1 1 14rem` combina crecimiento, reducción y tamaño inicial. Usar
  `flex: 1` hace que los elementos compartan el espacio disponible, pero puede
  no ser apropiado si tienen mínimos de contenido diferentes.

El contenido puede impedir que un elemento se reduzca hasta lo esperado.
`min-width: 0` suele ser necesario en elementos flexibles con contenido largo;
en diseños lógicos se puede usar `min-inline-size: 0`. No hay que confundir
Flexbox, pensado para un eje, con Grid, que organiza filas y columnas a la vez.

## Ejemplos

1. [`example-01/index.html`](examples/example-01/index.html): filas, columnas,
   ejes, alineación y separación.
2. [`example-02/index.html`](examples/example-02/index.html): tarjetas que
   envuelven a otra línea con `flex-wrap`, `gap` y tamaños flexibles.
3. [`example-03/index.html`](examples/example-03/index.html): distribución del
   espacio con `flex-grow`, `flex-shrink`, `flex-basis` y `min-inline-size`.
4. [`example-04/index.html`](examples/example-04/index.html): patrón de interfaz
   con Flexbox anidado, `align-self` y adaptación a una pantalla estrecha.

## Cómo practicar

En cada página, cambia una sola propiedad y predice el resultado antes de
recargar. Prueba `row` frente a `column`, `justify-content` frente a
`align-items`, y activa o desactiva `flex-wrap`. Reduce el viewport, aumenta el
zoom y alarga los textos: el contenido debe seguir disponible y no desbordarse.
Usa las herramientas de desarrollo del navegador para inspeccionar los ejes,
las líneas flexibles y los tamaños calculados.
