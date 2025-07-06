import { setLanguage, getInitialLanguage } from './modules/language.js';
import { initializeMobileMenu } from './modules/mobileMenu.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar menú móvil
    initializeMobileMenu();

    // Configurar selector de idioma
    const langSelector = document.getElementById('lang-selector');
    const initialLang = getInitialLanguage();
    
    langSelector.value = initialLang;
    setLanguage(initialLang);

    langSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
});