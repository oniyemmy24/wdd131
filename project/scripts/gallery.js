    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    // Insert the current year into the footer
    document.querySelector("#year").textContent = currentYear;
    
    // Get the last modified date of the document
    const lastModified = document.lastModified;
    
    // Insert the last modified date into the footer
    document.querySelector("#lastModified").textContent = lastModified;
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