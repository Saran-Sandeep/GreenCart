import "./style.css";

// Mobile Navigation Toggle
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

// Show Scroll bar
const scrollUp = function () {
  const scrollUpBtn = document.querySelector("#scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);

// Show Scroll bar
const scrollHeader = function () {
  const header = document.querySelector("#navbar");
  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-primary");
  } else {
    header.classList.remove("border-b", "border-primary");
  }
};
window.addEventListener("scroll", scrollHeader);

// Active Link
const activeLink = function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".header__nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.clientHeight;
    if (
      this.scrollY >= sectionTop &&
      this.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    } else if (this.scrollY > sectionTop + sectionHeight) {
      current = "none";
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("header__nav-link--active");
    if (link.href.includes(current)) {
      link.classList.add("header__nav-link--active");
    }
  });
};
window.addEventListener("scroll", activeLink);

// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
