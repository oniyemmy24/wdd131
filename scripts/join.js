    // Get the current year dynamically
const currentYear = new Date().getFullYear();

// Insert the current year into the footer
document.querySelector("#year").textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Insert the last modified date into the footer
document.querySelector("#lastModified").textContent = lastModified;

  document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interests = document.getElementById('interests').value;
  
    const userData = { name, email, interests };
    localStorage.setItem('gardener', JSON.stringify(userData));
  
    document.getElementById('confirmation').innerHTML = `<p>Thank you, ${name}, for joining our community!</p>`;
    this.reset();
  });
  