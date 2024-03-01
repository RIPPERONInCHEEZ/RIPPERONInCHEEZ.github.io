// detect-mobile.js

// Function to check if the device is a mobile device
function isMobileDevice() {
  return window.matchMedia("only screen and (max-width: 768px)").matches;
}

// Redirect to index-mobile.html if the device is a mobile device
if (isMobileDevice()) {
  window.location.href = "index-mobile.html";
}
const userAgent = navigator.userAgent;
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  )
) {
  // Code for mobile devices
} else {
  // Code for desktop devices
}
