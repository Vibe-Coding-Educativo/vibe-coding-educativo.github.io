function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const navLinks = document.querySelectorAll('#mobile-menu a, #main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Solo cierra el menu si es un enlace de anclaje
            if (link.href.includes('#')) {
                 mobileMenu.classList.add('hidden');
            }
        });
    });
}

export { initializeMobileMenu };