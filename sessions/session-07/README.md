# Sesión 07: frameworks CSS

## Qué se aprende

Bootstrap y Tailwind CSS ayudan a construir interfaces sin escribir desde cero
cada regla de estilo. Bootstrap ofrece componentes y un sistema de cuadrícula;
Tailwind permite componer estilos mediante clases de utilidad. En ambos casos
HTML sigue describiendo el contenido y CSS determina su presentación. Prueba los
ejemplos en un navegador y cambia una clase cada vez para identificar su efecto.

## Tutorial: Bootstrap

Bootstrap incluye estilos listos para usar, utilidades y componentes. Su
cuadrícula distribuye el contenido en filas y columnas y sus componentes
resuelven patrones habituales como tarjetas, alertas y botones.

### 1. Cargar Bootstrap

El ejemplo [`hello-bootstrap/index.html`](hello-bootstrap/index.html) enlaza
Bootstrap mediante CDN y carga `style.css` para los estilos propios del proyecto.
El CSS del framework va antes que la hoja propia para que esta pueda
complementarlo o sobrescribirlo.

### 2. Organizar el contenido con la cuadrícula

La cuadrícula se construye anidando un contenedor, una fila y columnas. Este
ejemplo muestra tres tarjetas que ocupan todo el ancho en móvil, la mitad desde
`md` y un tercio desde `lg`:

```html
<div class="container py-4">
  <div class="row g-3">
    <article class="col-12 col-md-6 col-lg-4">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="card-title h5">Título de la tarjeta</h2>
          <p class="card-text">Una descripción breve del contenido.</p>
          <a class="btn btn-primary" href="#inscripcion">Ver detalles</a>
        </div>
      </div>
    </article>
  </div>
</div>
```

Las columnas de una fila se reparten en doce unidades; `g-3` define el espacio
entre ellas y `h-100` iguala la altura de las tarjetas de una fila. Los
modificadores `md` y `lg` aplican desde sus respectivos puntos de ruptura.

### 3. Combinar utilidades y componentes

Clases como `text-center`, `d-flex` y `flex-wrap` aplican estilos reutilizables.
Las tarjetas combinan `card`, `card-body`, `card-title` y `card-text`; los
botones usan `btn` junto con una variante como `btn-primary`. Los componentes
interactivos de Bootstrap requieren también su JavaScript, pero la cuadrícula y
las tarjetas de este ejemplo solo necesitan CSS.

#### Ejercicios

1. Añade una segunda tarjeta con contenido distinto y verifica que ambas tengan
   la misma altura.
2. Cambia `col-lg-4` por `col-lg-6`. ¿Cuántas tarjetas caben en una fila grande?
   Explica la respuesta usando las doce unidades de la cuadrícula.
3. Añade una alerta con `alert alert-success` y adapta su texto a tu página.
4. Cambia el color del botón por `btn-outline-primary` y ajusta un estilo propio
   en `hello-bootstrap/style.css`. Comprueba qué estilos vienen de Bootstrap y
   cuáles de tu hoja.

## Tutorial: Tailwind CSS

Tailwind CSS es un framework de utilidades: en vez de elegir un componente
predefinido, combinas clases pequeñas directamente en el HTML. Por ejemplo,
`flex`, `gap-4`, `p-6` y `rounded-lg` controlan el layout, el espacio y las
esquinas de un elemento.

### 1. Cargar Tailwind

El ejemplo [`hello-tailwind/index.html`](hello-tailwind/index.html) carga
Tailwind con el script de navegador y enlaza su propia hoja de estilos. Esta
integración facilita probar el ejemplo; para un proyecto de producción, consulta
la [guía oficial de instalación](https://tailwindcss.com/docs/installation/play-cdn).

### 2. Construir estilos con utilidades

Cada clase representa una decisión de estilo. Por ejemplo, una tarjeta puede
combinar fondo, espacio interior, bordes redondeados y sombra:

```html
<article class="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-md">
  <p class="text-sm font-semibold text-indigo-700">Taller</p>
  <h2 class="mt-2 text-2xl font-bold text-gray-900">Diseño web</h2>
  <p class="mt-2 text-gray-600">Aprende a crear una página adaptable.</p>
  <a class="mt-4 inline-block rounded-lg bg-indigo-700 px-4 py-2
            font-semibold text-white hover:bg-indigo-800 focus-visible:outline-2"
     href="#inscripcion">Inscribirse</a>
</article>
```

### 3. Añadir estados y diseño adaptable

Los prefijos aplican una utilidad en una condición concreta: `hover:bg-indigo-800`
cambia el fondo al pasar el puntero y `md:max-w-lg` amplía la tarjeta a partir
del punto de ruptura `md`. También se pueden usar variantes como `focus-visible`
para que el foco del teclado sea visible. Las clases entre corchetes, como
`w-[90%]`, permiten indicar valores personalizados.

Prueba el ejemplo con distintos anchos de ventana y utiliza la tecla Tab para
comprobar el foco. Cambia o quita una clase y recarga la página para ver qué
propiedad afecta.

#### Ejercicios

1. Añade `md:max-w-lg` junto a `max-w-sm` y observa el ancho en una pantalla
   estrecha y en una ancha.
2. Añade una segunda tarjeta con el mismo patrón de utilidades y otro contenido.
3. Añade `transition-colors` al enlace y compara el estado normal con
   `hover:bg-indigo-800`.
4. Añade una utilidad `focus-visible:` para hacer más evidente el foco del
   teclado. Recorre la página sin ratón y comprueba que el enlace se pueda usar.

## Ejemplos del repositorio

- [`hello-bootstrap/index.html`](hello-bootstrap/index.html) y
  [`hello-bootstrap/style.css`](hello-bootstrap/style.css): cuadrícula
  adaptable, tarjetas, botones y estilos propios.
- [`hello-tailwind/index.html`](hello-tailwind/index.html) y
  [`hello-tailwind/style.css`](hello-tailwind/style.css): tarjetas creadas con
  utilidades, variantes responsivas y estados de foco y hover.

## Referencias

- [Documentación de Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/):
  instalación, cuadrícula y componentes.
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs):
  utilidades, variantes y puntos de ruptura.
