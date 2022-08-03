const hamburgerButton = document.querySelector(".hamburger");
const menu = document.querySelector(".links");
const links = document.querySelectorAll(".menu-link");

const toggleMenu = () => {
  hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("toggle");
    menu.classList.toggle("active");
    links.forEach((link) =>
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        hamburgerButton.classList.remove("toggle");
      })
    );
  });
};

toggleMenu();
