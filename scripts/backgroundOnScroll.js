const navbar = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200 && window.innerWidth <= 768) {
    navbar.classList.add("active-nav");
  } else {
    navbar.classList.remove("active-nav");
  }
});
