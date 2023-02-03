const menuButton = document.querySelector(".nav-toggle-btn");
const navMenu = document.querySelector(".ul-nav");
const iconMenu = document.querySelector(".menu-icon");
const iconCloseMenu = document.querySelector(".close-menu-icon");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("ul-nav-active");
  iconMenu.classList.toggle("occult");
  iconCloseMenu.classList.toggle("show");
});
