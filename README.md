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

El sitio es estático y se sirve tal cual (GitHub Pages). Archivos principales:

* `index.html`: estructura de la página y contenido principal.
* `assets/styles.css`: estilos propios complementarios a Tailwind (incluye variantes para modo oscuro).
* `assets/main.js`: lógica de i18n, menú móvil y utilidades.

Notas:
- Tailwind CSS se carga desde CDN y está configurado con `darkMode: 'class'`.
- El modo oscuro es automático (según el sistema) y reacciona a los cambios de `prefers-color-scheme` sin recargar.

## Sistema de traducción

El soporte multi‑idioma se maneja en `assets/main.js` mediante un objeto `translations` y atributos `data-lang` en el HTML.

- Idiomas: `es`, `ca`, `gl`, `eu`, `en`.
- La función `setLanguage` actualiza todo el contenido marcado con `data-lang`.
- La elección se persiste en `localStorage` (`vibeLang`).

## Desarrollo local

- Servir: `python3 -m http.server 8080` y abrir `http://localhost:8080`.
- Comprobaciones manuales: navegación móvil, cambio de idioma, contraste en claro/oscuro.

## Versiones y descargas

Versiones estables:

- v1.1 (código): https://github.com/Vibe-Coding-Educativo/vibe-coding-educativo.github.io/tree/v1.1
- v1.1 (ZIP): https://github.com/Vibe-Coding-Educativo/vibe-coding-educativo.github.io/archive/refs/tags/v1.1.zip
- Notas v1.1: https://github.com/Vibe-Coding-Educativo/vibe-coding-educativo.github.io/releases/tag/v1.1

Versiones anteriores:

- v1.0 (código): https://github.com/Vibe-Coding-Educativo/vibe-coding-educativo.github.io/tree/v1.0
- v1.0 (ZIP): https://github.com/Vibe-Coding-Educativo/vibe-coding-educativo.github.io/archive/refs/tags/v1.0.zip
- Notas v1.0: https://github.com/Vibe-Coding-Educativo/vibe-coding-educativo.github.io/releases/tag/v1.0

## Autor

* **Juan José de Haro**: <https://bilateria.org>

## Licencia

- Código (HTML/CSS/JS): licencia **MIT**. Ver `LICENSE` en la raíz del repositorio.
- Contenidos (textos e imágenes): **Creative Commons BY-SA 4.0**.

Nota: esta separación evita ambigüedades; CC no es adecuada para software. Para más información sobre CC BY‑SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/deed.es
