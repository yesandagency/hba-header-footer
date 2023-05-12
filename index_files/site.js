(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelectorAll(".mega-menu-close, .mega-menu-overlay");
  const mainMenu = document.querySelector(".main-menu");
  const megaMenuOverlay = document.querySelector(".mega-menu-overlay");
  if (menuToggle) {
    menuToggle.addEventListener("click", (e) => {
      mainMenu.classList.toggle("open");
    });
  }

  menuClose.forEach((item) => {
    item.addEventListener("click", (e) => {
      mainMenu.classList.remove("open");
    });
  });
})();
