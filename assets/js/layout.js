document.addEventListener("DOMContentLoaded", () => {
  // --- ELEMENTOS GERAIS ---
  const menuButton = document.querySelector(".menu-opener");
  const nav = document.querySelector("nav");
  const header = document.querySelector(".header");
  const splash = document.getElementById("splash-screen");
  const closeBtn = document.getElementById("close-splash");
  const menu = document.querySelector(".menu");

  // --- MENU MOBILE ---
  menuButton?.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    menu.classList.toggle("open");
  });

  // --- HEADER SCROLL ---
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // --- SPLASH SCREEN ---
  closeBtn?.addEventListener("click", () => {
    splash.style.opacity = "0";
    setTimeout(() => splash.style.display = "none", 500);
  });

  // --- SUBMENU MOBILE ---
  document.querySelectorAll("nav ul li").forEach(item => {
  const submenu = item.querySelector(".submenu");
  const link = item.querySelector("a");

  if (submenu && link) {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Impede que o link seja seguido

        // Alterna o submenu: abre se estiver fechado, fecha se estiver aberto
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      }
    });
  }
});
  // --- Submenu com delay no hover (Desktop) ---
  if (window.innerWidth > 800) {
  const menuItems = document.querySelectorAll('.menu nav ul > li');

  menuItems.forEach((item) => {
    const submenu = item.querySelector('.submenu');
    if (!submenu) return;

    let timeout;

    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      submenu.classList.add('show');
    });

    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        submenu.classList.remove('show');
      }, 300);
    });

    submenu.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
    });

    submenu.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        submenu.classList.remove('show');
      }, 300);
    });
  });
}


});

