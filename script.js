// SELECT ELEMENTS 
// Button that opens the dropdown
const exploreButton = document.getElementById("exploreBtn");

// The dropdown menu itself
const dropdownMenu = document.getElementById("dropdownMenu");


// TOGGLE DROPDOWN 
// When the "Explore" button is clicked
exploreButton.addEventListener("click", function (event) {
  // Prevent the click from affecting other elements (like closing immediately)
  event.stopPropagation();

  // Show or hide the dropdown
  dropdownMenu.classList.toggle("show");
});


// CLOSE DROPDOWN WHEN CLICKING OUTSIDE

document.addEventListener("click", function (event) {
  // Check:
  // 1. Click is NOT inside dropdown
  // 2. Click is NOT the button itself
  const clickedOutsideDropdown = !dropdownMenu.contains(event.target);
  const clickedButton = event.target === exploreButton;

  if (clickedOutsideDropdown && !clickedButton) {
    dropdownMenu.classList.remove("show");
  }
});


// CLOSE DROPDOWN WHEN LINK IS CLICKED 
// Get all links inside dropdown
const dropdownLinks = document.querySelectorAll(".dropdown a");

// Loop through each link
dropdownLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    dropdownMenu.classList.remove("show");
  });
});