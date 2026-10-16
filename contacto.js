document.addEventListener("DOMContentLoaded", () => {
  
  const btnTheme = document.getElementById("btnTheme");
  const themeGuardado = localStorage.getItem("theme");

  if (themeGuardado === "dark") {
    document.body.classList.add("dark-mode");
    if (btnTheme) btnTheme.textContent = "Modo Claro";
  }

  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        btnTheme.textContent = "Modo Claro";
        localStorage.setItem("theme", "dark");
      } else {
        btnTheme.textContent = "Modo Oscuro";
        localStorage.setItem("theme", "light");
      }
    });
  }


  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const asunto = document.getElementById("asunto").value;
      const mensaje = document.getElementById("mensaje").value;

      // REEMPLAZA CON TU DIRECCIÓN REAL DE CORREO
      const miCorreoDestino = "tu_correo@outlook.com"; 

      const subject = encodeURIComponent(`Nuevo mensaje de Sazón Cañera: ${asunto}`);
      const body = encodeURIComponent(`Nombre: ${nombre}\nCorreo del remitente: ${email}\nAsunto: ${asunto}\n\nMensaje:\n${mensaje}`);

      window.location.href = `mailto:${miCorreoDestino}?subject=${subject}&body=${body}`;
    });
  }
});