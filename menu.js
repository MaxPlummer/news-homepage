// Opens the mobile menu and triggers the overlay
function w3_open() {
  document.getElementById("mobile-menu").style.display = "block";
  document.getElementById("mobile-overlay").style.display = "block";
}

// Closes the menu and removes the overlay
function w3_close() {
  document.getElementById("mobile-menu").style.display = "none";
  document.getElementById("mobile-overlay").style.display = "none";
}

// Closes the menu if open when screen size hits 799 pixels
window.onresize = () => {
  if (window.innerWidth >= 799) {
    w3_close();
  }
};
