# Sesión 07: frameworks CSS

## Qué se aprende

Bootstrap y Tailwind CSS ayudan a construir interfaces sin escribir desde cero
cada regla de estilo. Bootstrap ofrece componentes y un sistema de cuadrícula;
Tailwind permite componer estilos mediante clases de utilidad. En ambos casos,
HTML sigue describiendo el contenido y CSS determina su presentación.

## Tutorial: Bootstrap

Bootstrap incluye estilos listos para usar, utilidades y componentes. Su
cuadrícula distribuye el contenido en filas y columnas, mientras que sus
componentes resuelven patrones habituales como tarjetas y carruseles.

### 1. Cargar Bootstrap

En el `<head>` de una página, enlaza la hoja de estilos de Bootstrap. El ejemplo
[`hello-bootstrap/index.html`](hello-bootstrap/index.html) muestra la
integración mediante CDN y enlaza además una hoja propia, `style.css`, para
complementar los estilos del framework.

### 2. Organizar el contenido con la cuadrícula

La cuadrícula se construye anidando un contenedor, una fila y columnas:

```html
<div class="container">
  <div class="row">
    <div class="col-4">Una tercera parte</div>
    <div class="col-8">Dos terceras partes</div>
  </div>
</div>
```

Las columnas de una fila se reparten en doce unidades. Prueba a cambiar sus
anchos y comprueba cómo cambia la distribución. Para adaptar el diseño a
distintos tamaños de pantalla, usa las variantes de columna con puntos de
ruptura, por ejemplo `col-12 col-md-6`.

### 3. Combinar utilidades y componentes

Clases como `text-center`, `d-flex` y `flex-wrap` aplican estilos reutilizables.
Las tarjetas combinan las clases `card`, `card-body`, `card-title` y
`card-text`. En el ejemplo también hay un carrusel: los componentes
interactivos, como este, necesitan el JavaScript de Bootstrap además de su CSS.
La inclusión del *bundle* aparece comentada en el HTML de ejemplo; actívala
antes de esperar que funcionen los controles del carrusel.

Practica cambiando el texto, reorganizando las columnas y creando una tarjeta
propia. Usa `hello-bootstrap/style.css` para distinguir los estilos del proyecto
de las clases que proporciona Bootstrap.

## Tutorial: Tailwind CSS

Tailwind CSS es un framework de utilidades: en vez de elegir un componente
predefinido, combinas clases pequeñas directamente en el HTML. Por ejemplo,
`flex`, `gap-1`, `p-5` y `rounded-lg` controlan el layout, el espacio y las
esquinas de un elemento.

### 1. Cargar Tailwind

El ejemplo [`hello-tailwind/index.html`](hello-tailwind/index.html) carga
Tailwind con el script de navegador y enlaza su propia hoja de estilos. Esta
integración sirve para probar el ejemplo; para un proyecto de producción,
consulta la [guía oficial de instalación](https://tailwindcss.com/docs/installation/play-cdn).

### 2. Construir estilos con utilidades

Cada clase representa una decisión de estilo. En el ejemplo, el encabezado usa
`text-9xl font-bold`, el párrafo `text-center text-xl` y el contenedor de
reacciones combina `flex`, `items-center`, `gap-2` y `rounded-full`. Cambia o
quita una clase y recarga la página para ver qué propiedad afecta.

### 3. Añadir estados y diseño adaptable

Los prefijos aplican una utilidad en una condición concreta:

- `hover:bg-blue-800` cambia el fondo al pasar el puntero.
- `md:bg-pink-200` aplica el fondo a partir del punto de ruptura `md`.
- `dark:bg-[#191818]` define un valor para el modo oscuro.

Las clases entre corchetes, como `w-[90%]`, permiten indicar valores
personalizados. Prueba el ejemplo con distintos anchos de ventana y con el
puntero sobre los botones. Al trabajar con teclado, verifica también que los
controles sigan teniendo un foco visible y sean utilizables.

## Ejemplos del repositorio

- [`hello-bootstrap/index.html`](hello-bootstrap/index.html) y
  [`hello-bootstrap/style.css`](hello-bootstrap/style.css): cuadrícula,
  utilidades, tarjetas y carrusel.
- [`hello-tailwind/index.html`](hello-tailwind/index.html) y
  [`hello-tailwind/style.css`](hello-tailwind/style.css): utilidades,
  estados interactivos y variantes responsivas.