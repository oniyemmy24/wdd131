const currentYear = new Date().getFullYear();

// Insert the current year into the footer
document.querySelector("#copyright-year").textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Insert the last modified date into the footer
document.querySelector("#last-modified").textContent = lastModified;
