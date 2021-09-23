const burgerMenu = document.querySelector(".humburger-menu");
const menu = document.querySelector(".menu");

const toggleMenu = () => {
  burgerMenu.classList.toggle("humburger-menu-active");
  menu.classList.toggle("menu-active");
};

burgerMenu.addEventListener("click", (e) => toggleMenu());

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-list__link") || e.target.classList.contains("menu-list__item")) {
    toggleMenu();
  }
});