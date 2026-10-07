# Sesión 06: CSS Grid

## Qué se aprende

CSS Grid organiza elementos en dos dimensiones: define filas y columnas para
distribuir el espacio y ubicar contenido. A diferencia de Flexbox, que organiza
elementos sobre un eje cada vez, Grid permite controlar ambos ejes en un mismo
layout.

## Contenedor y tracks

`display: grid` convierte a los hijos directos en elementos de la cuadrícula.
`grid-template-columns` y `grid-template-rows` definen sus columnas y filas; las
unidades `fr` reparten el espacio disponible entre tracks. `repeat()` evita
repetir definiciones y `gap` establece la separación entre celdas.

`grid-template-areas` permite nombrar zonas y describir el layout como una
plantilla legible. `grid-area` asigna cada sección a una zona. Si no se define
una plantilla para todos los elementos, Grid puede crear tracks implícitos para
acomodarlos.

## Ubicación de elementos

Las líneas de la cuadrícula delimitan filas y columnas. `grid-column` y
`grid-row` colocan un elemento entre líneas; se pueden usar números positivos,
negativos para contar desde el extremo opuesto, o `span` para indicar cuántos
tracks debe ocupar. Los elementos que no se colocan explícitamente se distribuyen
según el flujo automático de Grid.

## Diseños adaptables

Una cuadrícula puede cambiar de estructura con media queries: empezar con una
columna para pantallas estrechas y añadir columnas o reasignar áreas cuando hay
más espacio. `repeat(auto-fit, minmax(200px, 1fr))` crea tantas columnas como
caben, manteniendo un ancho mínimo y repartiendo el espacio restante. Hay que
probar el resultado con contenido largo y distintos anchos de viewport.

## Ejemplos del repositorio

- [`hello-grid/index.html`](hello-grid/index.html) y
  [`hello-grid/style.css`](hello-grid/style.css): layout de página con áreas
  nombradas, cuadrícula de elementos, ubicación por líneas y adaptación mediante
  media queries.
- [`hello-grid/about.html`](hello-grid/about.html) y
  [`hello-grid/otra.html`](hello-grid/otra.html): páginas que muestran una
  cuadrícula de tarjetas.
- [`hello-grid/style2.css`](hello-grid/style2.css): columnas adaptables con
  `repeat()`, `auto-fit` y `minmax()`.
- [`hello-grid/reset.css`](hello-grid/reset.css): estilos iniciales compartidos,
  incluido `box-sizing: border-box`.

## Cómo practicar

En los ejemplos, cambia el número y tamaño de las columnas, el `gap` y la
colocación de algunos elementos. Ajusta el ancho de la ventana para observar
cómo cambian las media queries y cuántas columnas caben con `auto-fit`. Usa las
herramientas de desarrollo del navegador para inspeccionar las líneas, tracks y
áreas de la cuadrícula.

## Referencias

- [CSS Grid Layout en MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout):
  guía y referencia de las propiedades de Grid.
- [Grid Garden](https://cssgridgarden.com/#es): juego interactivo para practicar
  la ubicación de elementos en una cuadrícula.
