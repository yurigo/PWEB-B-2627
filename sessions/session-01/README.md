# Sesión 01: arquitectura cliente-servidor y HTML básico

## Objetivos

Esta sesión introduce el funcionamiento general de una aplicación web y la
estructura mínima de un documento HTML. Al terminar, se debe entender qué
ocurre cuando un navegador solicita una página y cómo se organiza el contenido
que recibe.

## Arquitectura cliente-servidor

- El **cliente** suele ser el navegador. Inicia una petición HTTP para
  solicitar un recurso, como una página, una imagen o una hoja de estilos.
- El **servidor** recibe la petición, procesa la lógica necesaria y devuelve
  una respuesta HTTP con el recurso solicitado o un error.
- El navegador interpreta la respuesta y construye la página que ve el
  usuario. Una página puede provocar nuevas peticiones para cargar sus
  imágenes, CSS, JavaScript y otros recursos.

## HTML básico

HTML (HyperText Markup Language) describe la estructura y el significado del
contenido mediante elementos y atributos. Un documento comienza normalmente
con `<!DOCTYPE html>`, contiene un elemento `<html>` y se divide en:

- `<head>`, donde se incluyen los metadatos, el título y los recursos
  enlazados.
- `<body>`, donde se encuentra el contenido visible.

Los ejemplos practican títulos y párrafos, enlaces, imágenes con texto
alternativo, listas, tablas y navegación mediante enlaces a fragmentos de la
misma página. Los atributos, como `id`, `href`, `src`, `alt` y `title`, aportan
información adicional o modifican el comportamiento de los elementos.

## Ejemplos

- [`final/index.html`](final/index.html): página de ejemplo con navegación,
  datos personales, listas, enlaces, imagen y tabla.
- [`final/proyecto1.html`](final/proyecto1.html) y
  [`final/proyecto2.html`](final/proyecto2.html): páginas enlazadas desde el
  ejemplo principal.