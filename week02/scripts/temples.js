const currentYear = new Date().getFullYear();

// Insert the current year into the footer
document.querySelector("#year").textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Insert the last modified date into the footer
document.querySelector("#lastModified").textContent = lastModified;

// Hamburger Menu Toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});