# Página Principal de Vibe Coding Educativo

Este repositorio contiene el código fuente de la página web principal del proyecto **Vibe Coding Educativo**. Esta página sirve como punto de entrada para la comunidad, presentando su filosofía y dirigiendo a los usuarios a los diferentes recursos disponibles.

## Descripción del proyecto

La página web es una "landing page" estática diseñada para ser atractiva, informativa y fácil de navegar. Su objetivo es:

1.  **Explicar** qué es el Vibe Coding Educativo.
2.  **Conectar** a los usuarios con la comunidad en Telegram.
3.  **Mostrar** los recursos principales, como la galería de aplicaciones, el manual y el boletín semanal.
4.  **Ofrecer** una experiencia de usuario agradable y accesible en múltiples idiomas.

## Características principales

* **Diseño moderno y adaptable**: La interfaz utiliza Tailwind CSS para ser completamente responsive y visualmente atractiva en cualquier dispositivo.
* **Soporte multi-idioma**: La página incluye traducciones en español, catalán, gallego, euskera e inglés, gestionadas dinámicamente con JavaScript.
* **Navegación fluida**: Uso de "scroll-smooth" para un desplazamiento suave entre las secciones.
* **Componentes interactivos**: Tarjetas con efectos `hover`, botones con transiciones y un menú de navegación adaptable para móviles.
* **Cero dependencias externas complejas**: Construida con HTML, CSS (vía CDN) y JavaScript puro, lo que la hace ligera y fácil de desplegar.

## Tecnologías utilizadas

* **HTML5**: Para la estructura semántica del contenido.
* **Tailwind CSS**: Para todo el diseño y los estilos, cargado a través de su CDN.
* **JavaScript (Vanilla)**: Para la interactividad, el menú móvil y la gestión del sistema de traducciones.

## Estructura del proyecto

El proyecto se compone de un único archivo `index.html` que contiene:

* **`<head>`**: Enlaces a las fuentes de Google Fonts y al CDN de Tailwind CSS. También contiene los estilos CSS personalizados dentro de una etiqueta `<style>`.
* **`<body>`**:
    * **Navegación (`<nav>`)**: Barra de navegación superior fija con enlaces a las secciones y el selector de idioma. Incluye un menú oculto para dispositivos móviles.
    * **Cabecera (`<header>`)**: Sección de bienvenida con el título principal y los botones de llamada a la acción (Ver Aplicaciones, Ver Boletín, Únete en Telegram).
    * **Secciones (`<section>`)**: Cada parte de la página (`#que-es`, `#comunidad`, `#apps`, `#recursos`, `#boletin`) está claramente definida en su propia sección.
    * **Pie de página (`<footer>`)**: Con enlaces a la comunidad y a la licencia.
* **Script (`<script>`)**: Al final del `<body>`, se encuentra toda la lógica de JavaScript para el selector de idioma y el menú móvil.

## Sistema de traducción

El soporte multi-idioma se maneja a través de un objeto de JavaScript llamado `translations`.

* Cada idioma tiene su propia clave (ej. `es`, `ca`, `en`).
* Dentro de cada idioma, hay un objeto con pares clave-valor, donde la clave es un identificador `data-lang` en el HTML y el valor es el texto traducido.
* Una función de JavaScript recorre el documento, busca todos los elementos con el atributo `data-lang` y reemplaza su contenido con el texto correspondiente al idioma seleccionado.
* El idioma se guarda en el `localStorage` del navegador para mantener la selección del usuario en futuras visitas.

## Autor

* **Juan José de Haro**: <https://bilateria.org>

## Licencia

Este proyecto se distribuye bajo la licencia **Creative Commons Atribución-CompartirIgual 4.0 Internacional (CC BY-SA 4.0)**.
