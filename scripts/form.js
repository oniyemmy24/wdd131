 // Get the current year dynamically
 const currentYear = new Date().getFullYear();

 // Insert the current year into the footer
 document.querySelector("#year").textContent = currentYear;
 
 // Get the last modified date of the document
 const lastModified = document.lastModified;
 
 // Insert the last modified date into the footer
 document.querySelector("#lastModified").textContent = lastModified;
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  const select = document.getElementById("productName");
  
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);

    //Increase submission counter
    let count = localStorage.getItem("reviewCounter") || 0;
    count++;
    localStorage.setItem("reviewCounter", count);
    document.getElementById("counterMessage").textContent = `You have submitted ${count} review(s).`;
  });
  
  