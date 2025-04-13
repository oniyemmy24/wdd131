  // Get the current year dynamically
const currentYear = new Date().getFullYear();

// Insert the current year into the footer
document.querySelector("#year").textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Insert the last modified date into the footer
document.querySelector("#lastModified").textContent = lastModified;

// Sample news array
const newsItems = [
  {
    title: "Spring Planting Kickoff!",
    date: "2025-04-05",
    content: "Join us this Saturday at 10 AM to start the spring planting season!"
  },
  {
    title: "New Compost Bin Installed",
    date: "2025-04-03",
    content: "We’ve installed a new compost bin thanks to community volunteers!"
  }
];

// Function to display news on the homepage
function displayNews() {
  const newsList = document.getElementById("news-list");

  // Clear the list first
  newsList.innerHTML = "";

  // Use localStorage if there are saved news items
  const savedNews = JSON.parse(localStorage.getItem("newsItems")) || newsItems;

  savedNews.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${item.title}</h3>
      <small>${new Date(item.date).toLocaleDateString()}</small>
      <p>${item.content}</p>
    `;
    newsList.appendChild(li);
  });
}

// Function to add a new news item (triggered from join.html if needed)
function addNewsItem(title, date, content) {
  const newItem = { title, date, content };
  let storedNews = JSON.parse(localStorage.getItem("newsItems")) || newsItems;
  storedNews.unshift(newItem); // Add to the beginning
  localStorage.setItem("newsItems", JSON.stringify(storedNews));
  displayNews();
}

// Optional: Listen for a custom event (if join.html form submits to update news)
document.addEventListener("news-submitted", (event) => {
  const { title, date, content } = event.detail;
  addNewsItem(title, date, content);
});

// Load news on page load
document.addEventListener("DOMContentLoaded", displayNews);

// Subscribe form handling
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const email = document.getElementById('email').value;

  if (firstName && email) {
    localStorage.setItem('subscriberName', firstName);
    localStorage.setItem('subscriberEmail', email);
    alert(`Thanks for subscribing, ${firstName}!`);
    this.reset();
  } else {
    alert("Please fill in both fields.");
  }
});

// Scroll to top button
const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = function() {
  toTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
};

toTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


  
  