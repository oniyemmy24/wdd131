const currentYear = new Date().getFullYear();

// Insert the current year into the footer
document.querySelector("#year").textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Insert the last modified date into the footer
document.querySelector("#lastModified").textContent = lastModified;
    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        return (temp <= 10 && windSpeed > 4.8)
            ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + "°C"
            : "N/A";
    }
    let temp = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("wind").textContent);
    document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);