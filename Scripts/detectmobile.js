// Function to detect if the device is a mobile device or smaller screen size
function isMobileOrSmallScreen() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1 ||
    window.innerWidth <= 768 || // Small devices (phones, 768px and below)
    window.innerWidth <= 992 || // Tablets, iPads (768px - 992px)
    window.innerWidth <= 1200 // Small laptops, desktops (992px - 1200px)
  );
}

// Function to apply CSS based on device type or screen size
function applyCSS() {
  const head = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.rel = "stylesheet";

  if (isMobileOrSmallScreen()) {
    link.href = "Styles/mobilestyle.css";
    console.log(
      "Mobile device or small screen detected. Applying mobilestyle.css."
    );
  } else {
    link.href = "Styles/overall.css";
    console.log("Desktop device detected. Applying overall.css style.");
  }

  head.appendChild(link);
}

// Apply CSS when the DOM content is loaded
document.addEventListener("DOMContentLoaded", applyCSS);
