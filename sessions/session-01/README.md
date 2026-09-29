# Sesión 01: arquitectura cliente-servidor y fundamentos de HTML

## Qué se aprende

Una página web no es un archivo aislado. El navegador solicita recursos por
la red, interpreta la respuesta y construye un documento sobre el que después
trabajan CSS y JavaScript. En esta sesión se construye una primera versión
estática de un sitio y se aprende a diagnosticar problemas desde el navegador.

## Del navegador a la página

1. Una URL identifica un recurso mediante su protocolo, host y ruta.
2. El navegador resuelve el nombre del host mediante DNS, abre una conexión y
   envía una petición HTTP.
3. El servidor devuelve un estado, cabeceras y un cuerpo que puede ser HTML,
   JSON, una imagen u otro recurso.
4. El navegador analiza el HTML y lo convierte en el **DOM**, un árbol de
   nodos con relaciones entre padres, hijos y hermanos.
5. El HTML inicial puede referenciar CSS, JavaScript, fuentes, imágenes y
   multimedia, que generan peticiones adicionales.

Internet es la infraestructura que transporta paquetes entre dispositivos; la
Web es un servicio que usa esa infraestructura para solicitar recursos
identificados por URL. Para depurar conviene distinguir el texto recibido
(*View Source*), el DOM reparado por el navegador (*Elements*), las peticiones
(*Network*) y los errores (*Console*).

## Estructura de un documento HTML

Una página completa declara `<!doctype html>` para activar el modo estándares,
usa `<html lang="es">` como raíz y separa:

- `<head>`: metadatos, codificación (`<meta charset="utf-8">`), título,
  viewport, hojas de estilo y scripts.
- `<body>`: contenido que el usuario puede leer o utilizar.

Los encabezados (`h1`–`h6`) expresan jerarquía y los párrafos contienen texto
en prosa. Los enlaces necesitan un `href` y un texto que describa su destino.
Las imágenes necesitan `src` y un `alt` que explique su propósito; `width` y
`height` ayudan a reservar su espacio. Las listas expresan colecciones y las
tablas relacionan datos por filas y columnas, no sirven para maquetar.

## Elementos y atributos

Un `id` identifica un único elemento y puede ser el destino de un fragmento
(`#seccion`). Una `class` describe una categoría reutilizable para CSS o
JavaScript. Los atributos `data-*` guardan datos propios de la aplicación.
Estas herramientas deben describir significado o comportamiento, no accidentes
visuales como `caja-azul-izquierda`.

Los navegadores intentan reparar HTML incorrecto, pero esa tolerancia puede
ocultar anidamientos inválidos, atributos obligatorios ausentes o identificadores
duplicados. La validación y un ciclo corto de editar, recargar, inspeccionar y
validar permiten corregir la estructura antes de intentar ocultar el problema
con estilos.

## Práctica: primera iteración

El ejercicio consiste en crear un pequeño sitio estático con página de inicio,
listado, detalle y formulario de envío. Todas las páginas deben compartir una
navegación coherente y tener enlaces funcionales, título único, un `h1` lógico,
enlaces descriptivos, imágenes con texto alternativo útil y una estructura HTML
válida. El objetivo es que el sitio sea comprensible aunque todavía no tenga
CSS ni JavaScript.

## Ejemplos del repositorio

- [`final/index.html`](final/index.html): navegación, títulos, párrafos,
  imagen, listas, enlaces, fragmentos y tabla.
- [`final/proyecto1.html`](final/proyecto1.html) y
  [`final/proyecto2.html`](final/proyecto2.html): páginas enlazadas desde el
  ejemplo principal.
