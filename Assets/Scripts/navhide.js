//navhide.js

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
  // Check if mobile.css is applied before executing the script
  if (isMobileStyleApplied()) {
    const navbar = document.querySelector("nav");
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
  }
});
