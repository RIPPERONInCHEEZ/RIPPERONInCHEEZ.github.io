// JavaScript code to toggle the .nav-minimized class on scroll
let lastScrollTop = 0;
const navbar = document.querySelector("nav");
let isScrollingUp = false;
let scrollTimeout;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // User is scrolling down
    navbar.classList.add("nav-minimized");
    isScrollingUp = false;
  } else {
    // User is scrolling up
    if (!isScrollingUp) {
      // Add a delay before removing the class to make the reappearance smoother
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        navbar.classList.remove("nav-minimized");
      }, 300); // Adjust the delay time as needed
      isScrollingUp = true;
    }
  }
  lastScrollTop = scrollTop;
});
