

// Function to toggle the menu
function toggleMenu() {
  const navbarMenu = document.querySelector(".navbar ul"); // Select the navigation menu
  navbarMenu.classList.toggle("show"); // Toggle the 'show' class
}

// Close the menu if a menu link is clicked (optional for better UX)
function closeMenu() {
  const navbarMenu = document.querySelector(".navbar ul");
  navbarMenu.classList.remove("show"); // Remove the 'show' class
}

const menuLinks = document.querySelectorAll(".navbar ul li a");
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
