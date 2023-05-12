(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelectorAll(".mega-menu-close, .mega-menu-overlay");
  const mainMenu = document.querySelector(".main-menu");

  const header = document.querySelector(".header");

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

  if (header) {
    header.addEventListener("click", (e) => {
      const label = e.target.closest(".form-item__label");
      const searchBlockHeader = e.target.closest(".block--search-block-header");
      const closeButton = e.target.closest(".close button");

      console.log(closeButton);

      if (label && searchBlockHeader) {
        searchBlockHeader.classList.add("open");
        header.classList.add("search-open");
      }

      if (closeButton && searchBlockHeader) {
        searchBlockHeader.classList.remove("open");
        header.classList.remove("search-open");
      }

      // console.log(searchBlockHeader);
      // console.log(label);
    });
  }
})();
