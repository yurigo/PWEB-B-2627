# Sesión 04: CSS, box model, flujo y posicionamiento

## Qué se aprende

Cada elemento renderizado crea una o más cajas. Comprender su geometría permite
calcular tamaños, conservar el flujo normal, detectar desbordamientos y elegir
el posicionamiento solo cuando el problema realmente lo necesita.

## Las cuatro partes de una caja

De dentro hacia fuera, una caja contiene:

1. **Contenido**: texto, imágenes o cajas hijas.
2. **Padding**: espacio interior entre contenido y borde; recibe el fondo.
3. **Border**: línea que rodea el padding y el contenido.
4. **Margin**: separación exterior respecto a las cajas vecinas.

Con `content-box`, el `width` declarado corresponde solo al contenido. Por
ejemplo, una tarjeta de `300px` con `24px` de padding y dos bordes de `2px`
puede ocupar `352px` antes de contar el margen. Con `border-box`, el ancho
incluye contenido, padding y borde, de modo que el tamaño declarado resulta
mucho más predecible:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

Los márgenes verticales adyacentes pueden colapsar en vez de sumarse. Antes de
corregir una separación con números arbitrarios hay que identificar qué márgenes
están interactuando.

## Flujo, dimensiones y overflow

Los bloques empiezan en una línea nueva y aprovechan el espacio disponible; el
contenido inline fluye dentro de las líneas y puede envolver. Conviene dejar
que el contenido determine el tamaño y usar `width: auto`, `min-width`,
`max-width` y restricciones fluidas en lugar de alturas fijas para texto.

El desbordamiento es una señal de que falló una suposición: una palabra
ininterrumpible, una imagen con tamaño intrínseco, un ancho fijo o un mínimo
inflexible. Primero hay que localizar el primer elemento más ancho que su
contenedor y preferir wrapping, límites y media fluida antes que ocultar el
contenido con `overflow: hidden`.

Para imágenes, `max-inline-size: 100%` evita que excedan el contenedor;
`aspect-ratio` reserva una forma estable y `object-fit: contain` conserva toda
la imagen mientras `cover` rellena la caja y puede recortar sus bordes.

## Propiedades lógicas

`margin-inline`, `padding-block`, `inset-inline-start` y `max-inline-size`
describen la intención del espacio y se adaptan mejor a dirección y modo de
escritura que las propiedades físicas `left`, `right`, `top` y `bottom`.

## Posicionamiento y capas

- `relative` conserva el espacio original y puede crear el contenedor de
  referencia de un descendiente.
- `absolute` saca la caja del flujo y la coloca respecto a ese contenedor.
- `fixed` la fija al viewport.
- `sticky` participa en el flujo hasta alcanzar un umbral de desplazamiento.

`z-index` solo compara elementos dentro del contexto de apilamiento relevante.
Elementos posicionados, `opacity`, `transform` o `isolation` pueden crear
nuevos contextos; aumentar arbitrariamente el número no arregla una jerarquía
de contextos incorrecta.

## Práctica: layout resistente

La cuarta iteración aplica `border-box` global, limita el ancho de lectura,
hace fluidos los medios y da a las secciones un espaciado lógico consistente.
La posición absoluta o sticky debe reservarse para como máximo un detalle de
interfaz justificado y se debe documentar su contenedor de referencia.

La comprobación final incluye viewport estrecho y ancho, títulos largos, texto
ampliado, imágenes ausentes y errores de validación. Ningún contenedor de texto
debe depender de una altura fija ni ocultar contenido importante. DevTools
permite observar el panel del box model, los contenedores de scroll, los
ancestros posicionados y el primer elemento que desborda.

## Ejemplo del repositorio

- [`box-model/index.html`](box-model/index.html): tarjetas, secciones y guía
  telefónica para observar flujo, dimensiones y cajas.
- [`box-model/style.css`](box-model/style.css): `box-sizing`, padding, border,
  margin, dimensiones, `inline-block`, posicionamiento, sombras, radio y capas.
