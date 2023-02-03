
function openSlideMenu() {
  document.getElementById("mobile-nav").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
  document.getElementById("closeIcon").style.display = "block";
}

function closeSlideMenu() {
  document.getElementById("closeIcon").style.display = "none";
  document.getElementById("mobile-nav").style.display = "none";
  document.getElementById("hamburger").style.display = "block";
}
