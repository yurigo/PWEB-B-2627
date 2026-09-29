# Sesión 04: CSS: box model

## Objetivos

El **box model** describe el espacio que ocupa cada elemento HTML. Entenderlo
permite controlar el tamaño, la separación y la posición de los componentes de
una página.

Cada caja está formada, desde el interior hacia el exterior, por:

1. **Contenido**: texto, imágenes u otros elementos.
2. **Padding**: espacio entre el contenido y el borde.
3. **Border**: línea que rodea el padding y el contenido.
4. **Margin**: espacio exterior que separa la caja de sus vecinas.

La regla `box-sizing: border-box` hace que `width` y `height` incluyan el
padding y el borde, lo que facilita calcular tamaños previsibles. La sesión
también muestra cómo combinar dimensiones, márgenes, bordes, sombras, `display`
e `inline-block`, y cómo posicionar elementos con `relative`, `absolute`,
`fixed` y `sticky`. `z-index` controla el orden de apilamiento cuando las
cajas se superponen.

## Ejemplo

- [`box-model/index.html`](box-model/index.html): tarjetas, secciones y una
  guía telefónica que sirven para observar el tamaño y la distribución de
  diferentes cajas.
- [`box-model/style.css`](box-model/style.css): reglas de `box-sizing`,
  `padding`, `border`, `margin`, dimensiones, posicionamiento, sombras,
  `border-radius` y capas.
