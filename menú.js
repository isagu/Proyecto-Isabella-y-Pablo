document.addEventListener('DOMContentLoaded', () => {

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }


  const btnTheme = document.getElementById('btnTheme');

  
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (btnTheme) btnTheme.textContent = 'Modo Claro';
  }

  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');

      btnTheme.textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  
  const btnTop = document.getElementById('btnTop');

  window.addEventListener('scroll', () => {
    if (btnTop) {
      if (window.scrollY > 300) {
        btnTop.style.display = 'block';
      } else {
        btnTop.style.display = 'none';
      }
    }
  });

  window.subirArriba = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  window.filtrarRestaurante = function () {
    const selector = document.getElementById('filterRestaurante');
    const valor = selector.value;
    const restaurantes = document.querySelectorAll('.restaurante');

    restaurantes.forEach((rest) => {
      if (valor === 'todos' || rest.id === valor) {
        rest.style.display = 'block';
      } else {
        rest.style.display = 'none';
      }
    });
  };

  
  window.filtrarMenu = function () {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const restaurantes = document.querySelectorAll('.restaurante');

    restaurantes.forEach((rest) => {
     
      const textoRestaurante = rest.innerText.toLowerCase();

      if (textoRestaurante.includes(input)) {
        rest.style.display = 'block';

       
        const items = rest.querySelectorAll('li, .categoria-menu p');
        items.forEach((item) => {
          if (item.innerText.toLowerCase().includes(input)) {
            item.style.display = '';
          } else if (input !== '') {
            item.style.display = 'none';
          } else {
            item.style.display = '';
          }
        });
      } else {
        rest.style.display = 'none';
      }
    });
  };

});