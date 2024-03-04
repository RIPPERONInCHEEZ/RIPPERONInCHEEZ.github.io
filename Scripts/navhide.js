//navhide.js

let lastScrollTop = 0; // Define lastScrollTop variable
let scrollTimeout = 0;
let isScrollingUp = 1;

// Function to check if mobile.css is applied
function isMobileStyleApplied() {
  const stylesheets = document.styleSheets;
  for (let i = 0; i < stylesheets.length; i++) {
    const stylesheet = stylesheets[i];
    if (stylesheet.href && stylesheet.href.includes("mobilestyle.css")) {
      return true;
    }
  }
  return false;
}

// JavaScript code to toggle the .nav-minimized class on scroll if mobile.css is applied

window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (isMobileStyleApplied()) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // User is scrolling down
      navbar.classList.remove("nav-visible");
      navbar.classList.add("nav-minimized");
    } else {
      // User is scrolling up
      navbar.classList.remove("nav-minimized");
      navbar.classList.add("nav-visible");
    }
    lastScrollTop = scrollTop;
  }
});
