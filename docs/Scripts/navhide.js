// JavaScript code to toggle the .nav-hidden class on scroll
let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // User is scrolling down
    navbar.classList.add("nav-hidden");
  } else {
    // User is scrolling up
    navbar.classList.remove("nav-hidden");
  }
  lastScrollTop = scrollTop;
});
