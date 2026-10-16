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
        if (themeToggle) {
            themeToggle.textContent = 'Modo Claro';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
        
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = ' Modo Claro';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = ' Modo Oscuro';
            }
        });
    }

   
});