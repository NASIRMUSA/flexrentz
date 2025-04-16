// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("hidden");
  mobileMenu.style.animation = mobileMenu.classList.contains("hidden")
    ? ""
    : "fadeIn 0.3s ease";
});

// Mobile dropdown toggle
const mobileDropdownToggle = document.querySelector(".mobile-dropdown-toggle");
const mobileDropdown = document.querySelector(".mobile-dropdown");

mobileDropdownToggle.addEventListener("click", () => {
  mobileDropdown.classList.toggle("hidden");
  const arrow = mobileDropdownToggle.querySelector("svg");
  arrow.classList.toggle("rotate-180");
});
// Close mobile dropdown when clicking outside
