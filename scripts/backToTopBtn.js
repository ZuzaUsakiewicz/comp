const topBtn = document.querySelector(".top-btn");

topBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});
