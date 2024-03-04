// Function to detect if the device is a mobile device
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// Function to apply CSS based on device type
function applyCSS() {
  const head = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.rel = "stylesheet";

  if (isMobileDevice()) {
    link.href = "Styles/mobilestyle.css"; // Update path here
    console.log("Mobile device detected. Applying mobilestyle.css style.");
  } else {
    link.href = "Styles/overall.css";
    console.log("Desktop device detected. Applying overall.css style.");
  }

  head.appendChild(link);
}

// Apply CSS when the DOM content is loaded
document.addEventListener("DOMContentLoaded", applyCSS);
