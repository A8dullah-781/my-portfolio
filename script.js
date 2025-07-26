const heading = document.querySelector('.dots')
let baseText = ""
let dotCount = 0;

setInterval(() => {
    dotCount = (dotCount + 1 ) % 4
    const dots =  ".".repeat(dotCount)
    heading.innerHTML = baseText + dots
}, 500);


 document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });
