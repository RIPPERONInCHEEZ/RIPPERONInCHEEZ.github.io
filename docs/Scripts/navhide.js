let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log("Scroll top:", scrollTop);
  if (scrollTop > lastScrollTop) {
    // User is scrolling down
    console.log("Scrolling down");
    navbar.classList.add("nav-hidden");
  } else {
    // User is scrolling up
    console.log("Scrolling up");
    navbar.classList.remove("nav-hidden");
  }
  lastScrollTop = scrollTop;
});
