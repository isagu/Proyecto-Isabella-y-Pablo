
document.addEventListener('DOMContentLoaded', () => {

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            if (navMenu.classList.contains('active')) {
                navToggle.textContent = '✕';
            } else {
                navToggle.textContent = '☰';
            }
        });

        const navLinks = navMenu.querySelectorAll('a');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.textContent = '☰';
            });
        });
    }

    
    const themeToggle = document.getElementById('themeToggle');

    
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

   
    function updateThemeButton() {
        if (themeToggle) {
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.textContent = ' Modo Claro';
            } else {
                themeToggle.textContent = ' Modo Oscuro';
            }
        }
    }

    updateThemeButton();

    // Cambiar entre modo oscuro y modo claro
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }

            updateThemeButton();
        });
    }

    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;

            formFeedback.textContent =
                `¡Gracias, ${nombre}! Tu mensaje ha sido enviado exitosamente a El Sazón de Cañas.`;

            contactForm.reset();

            setTimeout(() => {
                formFeedback.textContent = '';
            }, 4000);
        });
    }

});
