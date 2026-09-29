# Sesión 03: CSS, cascada, selectores y diseño visual

## Qué se aprende

CSS es un sistema de decisiones, no una lista de adornos. El HTML conserva el
contenido y su significado; la hoja de estilos define color, tipografía,
espaciado y presentación. La sesión enseña a predecir qué regla gana, a crear
estilos reutilizables y a explicar los valores calculados en DevTools.

## Cómo aplicar CSS

- **Inline** (`style`): resuelve un caso aislado, pero mezcla contenido y
  presentación, duplica decisiones y tiene una precedencia difícil de mantener.
- **Internal** (`<style>`): puede servir para una página independiente, aunque
  sus reglas no se reutilizan automáticamente.
- **External** (`<link rel="stylesheet">`): mantiene una única fuente de
  estilos compartidos. Es la opción recomendada para un proyecto con varias
  páginas.

Los estilos reutilizables deben vivir en clases o estados significativos, no en
identificadores ni en nombres que describan un accidente visual.

## Cascada, especificidad e herencia

Para decidir el valor final, el navegador descarta declaraciones que no
aplican, compara origen e importancia, capas de cascada y especificidad, y usa
el orden de aparición para resolver el empate. Por eso “la última regla gana”
solo es cierto cuando las reglas anteriores tienen la misma precedencia.

La especificidad se puede leer en tres columnas: los identificadores pesan más,
después las clases, atributos y pseudoclases, y finalmente los nombres de
elemento. Los combinadores no añaden especificidad. Un selector muy específico
no es más correcto: suele ser más difícil de sobrescribir. Las propiedades de
texto como `color` y `font-family` suelen heredarse; `margin`, `border` y
`background` normalmente no. Herencia y cascada son mecanismos distintos.

Las `@layer` permiten establecer por adelantado el orden entre reset, librerías,
base, componentes y utilidades. `:where()` aporta especificidad cero y resulta
útil para defaults fáciles de sobrescribir. `!important` debe ser excepcional,
no la solución normal a una regla que no se entiende.

## Selectores y estados

Los ejemplos usan selectores de elemento, clase, identificador, atributo y
relaciones entre elementos:

- descendiente (`.card p`) y hijo directo (`.list > article`);
- hermano adyacente (`.card + .card`) y hermano general;
- pseudoclases (`:hover`, `:focus-visible`, `:checked`, `:invalid`);
- pseudoelementos (`::before`, `::after`, `::first-letter`, `::marker`).

Los estados de puntero deben acompañarse de un foco visible y nunca ser la
única forma de descubrir información. El contenido esencial debe estar en HTML:
el texto generado con `::before` o `::after` es apropiado para decoración, no
para controles o mensajes imprescindibles.

## Diseño visual mantenible

Las unidades relativas (`rem`, `em` y porcentajes) respetan el contexto y las
preferencias del usuario. Las propiedades personalizadas permiten nombrar un
pequeño sistema de color, espaciado, radio y sombra:

```css
:root {
  --color-brand: #2563eb;
  --space-4: 1rem;
  --radius: 0.75rem;
}
```

La tipografía también ocupa espacio: conviene usar una escala pequeña,
`line-height` legible y limitar el ancho de lectura con `max-inline-size`. Para
depurar, hay que inspeccionar el elemento exacto, revisar las reglas coincidentes
y tachadas en **Styles** y confirmar el valor final en **Computed** antes de
añadir otra excepción.

## Práctica: lenguaje visual

La tercera iteración crea una hoja externa con tokens y estilos para encabezados,
enlaces, botones, controles de formulario, tarjetas y estados de feedback. La
definición de terminado exige clases de componentes, selectores poco profundos,
estados `hover` y `focus-visible`, ausencia de estilos inline innecesarios y
valores ganadores explicables en DevTools.

## Ejemplos del repositorio

- [`examples/pinta-y-colorea/index.html`](examples/pinta-y-colorea/index.html):
  página que enlaza `reset.css` y `styles.css`.
- [`examples/pinta-y-colorea/styles.css`](examples/pinta-y-colorea/styles.css):
  selectores, clases, pseudoclases, pseudoelementos, tipografía, colores y
  fondos.
- [`examples/pinta-y-colorea/reset.css`](examples/pinta-y-colorea/reset.css):
  estilos iniciales comunes.
- [`examples/pinta-y-colorea/pagina2.html`](examples/pinta-y-colorea/pagina2.html),
  [`pagina3.html`](examples/pinta-y-colorea/pagina3.html) y
  [`pagina4.html`](examples/pinta-y-colorea/pagina4.html): páginas que comparten
  los estilos externos.
