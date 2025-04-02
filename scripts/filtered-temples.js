const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24-25",
        area: 19184,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Adelaide, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
    }
];

// JavaScript for filtered-temples
const templeGallery = document.getElementById('temple-gallery');
const filterButtons = document.querySelectorAll('#nav-links a');

// Display Temples with Lazy Loading
function displayTemples(temples) {
    templeGallery.innerHTML = temples.map(({ templeName, location, dedicated, area, imageUrl }) => `
    <figure>
    <img src="${imageUrl}" alt="${templeName}" loading="lazy">
    <figcaption>
    <h3>${templeName}</h3>
    <p>Location: ${location}</p>
    <p>Dedicated: ${dedicated}</p>
    <p>Area: ${area.toLocaleString()} sq ft</p>
    </figcaption>
    </figure>
    `).join('');
}

displayTemples(temples);

// Filter Function
function filterTemples(criteria) {
    const filtered = temples.filter(t => {
        const year = new Date(t.dedicated).getFullYear();
        if (criteria === 'old') return year < 1900;
        if (criteria === 'new') return year > 2000;
        if (criteria === 'large') return t.area > 90000;
        if (criteria === 'small') return t.area < 10000;
        return true;
    });
    displayTemples(filtered);
}

// Attach Filter Listeners
filterButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        filterTemples(btn.dataset.filter);
    });
});

// Hamburger Menu Toggle
const menuButton = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-links");

    menuButton.addEventListener("click", function () { 
        navMenu.classList.toggle("show");
        // Toggle between hamburger icon and 'X' when clicked
        menuButton.innerHTML = navMenu.classList.contains("show") ? "&#10006;" : "&#9776;";
    });

    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

// Insert the current year into the footer
document.querySelector("#year").textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Insert the last modified date into the footer
document.querySelector("#lastModified").textContent = lastModified;
});