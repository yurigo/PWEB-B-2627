# Sesión 02: HTML semántico, formularios, multimedia y accesibilidad

## Qué se aprende

HTML semántico describe el propósito del contenido, no su aspecto. Así el
navegador, las tecnologías de asistencia, los buscadores y otros desarrolladores
pueden interpretar la misma página. La meta es que el significado sobreviva
aunque se desactive CSS o no se use un ratón.

## Estructura y jerarquía

Los *landmarks* crean un mapa navegable:

- `<header>` identifica la cabecera de una página o de un contenido local.
- `<nav>` agrupa un bloque importante de navegación.
- `<main>` contiene el contenido principal, normalmente una sola vez.
- `<aside>` contiene información relacionada pero secundaria.
- `<footer>` identifica el pie de página o de una sección.

`<article>` representa una pieza que puede entenderse por sí sola, como una
noticia o una tarjeta de evento. `<section>` agrupa un tema y normalmente tiene
un encabezado propio. `<div>` no aporta semántica y solo debe usarse como
envoltorio cuando ningún elemento específico expresa la relación. La secuencia
de `h1`, `h2` y `h3` debe formar un esquema lógico; el tamaño visual se
resolverá después con CSS.

## Controles nativos e interacción

Un `<button>` ya proporciona foco, activación con teclado, estado deshabilitado
y semántica esperada. Un `<div>` con aspecto de botón no proporciona esos
comportamientos. Del mismo modo, `<details>` y `<summary>` ofrecen un control de
desplegable accesible sin construir una interacción propia. Se debe empezar
siempre con el elemento nativo que representa la acción y añadir ARIA solo
cuando HTML no pueda expresar el significado necesario.

## Formularios y validación

Un `<form>` convierte los controles en datos nombrados para enviar al servidor:
`action` indica el destino y `method` cómo se transmiten. Cada control debe
tener una etiqueta visible vinculada mediante `label[for]` e `input[id]`, además
de un atributo `name`. Los tipos `email`, `date`, `number` y `url` aportan
semántica, teclados móviles y validación básica.

`required`, `min`, `max`, `minlength` y `pattern` expresan restricciones junto
al control. La validación del navegador ayuda al usuario, pero nunca sustituye
la validación en el servidor. Los errores deben explicar qué ocurrió y cómo
recuperarse, no depender solo del color, conservar la entrada válida y mover el
foco cuidadosamente al resumen o al primer campo inválido.

## Imágenes, audio y vídeo

`srcset` y `sizes` permiten elegir una resolución adecuada; `<picture>` permite
elegir una variante o recorte diferente. El `<img>` de respaldo sigue
necesitando `alt`, `width` y `height`. El vídeo y el audio deben tener controles
para pausar, avanzar y ajustar el volumen. Las capturas (`<track kind="captions">`)
y las transcripciones hacen accesible la información hablada. El autoplay con
sonido es intrusivo y puede ser bloqueado, por lo que la reproducción debe
quedar bajo control del usuario.

## Pruebas y práctica

La segunda iteración refactoriza las páginas para usar landmarks, una jerarquía
de encabezados lógica, artículos independientes, formularios nativos y media
adaptable. La definición de terminado incluye:

- validar el HTML y comprobar que los enlaces funcionan;
- recorrer la página solo con `Tab`, `Shift+Tab`, `Enter` y `Espacio`;
- mantener visible el foco y un orden visual igual al orden del DOM;
- probar al 200% de zoom y con imágenes desactivadas;
- comprobar etiquetas, landmarks, textos alternativos, subtítulos y mensajes
  de error.

## Ejemplos del repositorio

- [`final/index.html`](final/index.html): landmarks, `details`, formularios,
  `srcset`, `<picture>`, audio y vídeo.
- [`final/ejercicio1.html`](final/ejercicio1.html): estructura semántica de un
  blog.
- [`final/ejemplo-boton.html`](final/ejemplo-boton.html): `div` frente a
  `button`.
- [`final/ejemplo-details.html`](final/ejemplo-details.html): control
  desplegable nativo.
- [`final/ejemplo-formulario.html`](final/ejemplo-formulario.html) y
  [`final/ejemplo-formulario-sin-form.html`](final/ejemplo-formulario-sin-form.html):
  formulario completo frente a controles sin `<form>`.

La carpeta [`inicio`](inicio/) conserva la versión inicial para comparar la
estructura antes y después de la sesión.
