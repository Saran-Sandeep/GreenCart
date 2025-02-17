import "./style.css";

const navMenu = document.querySelector("#nav-menu");
const navLink = document.querySelectorAll(".header__nav-link");
const menuToggle = document.querySelector("#menu-toggle");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  menuToggle.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("left-[0]");
    menuToggle.classList.remove("ri-close-large-line");
  });
});
