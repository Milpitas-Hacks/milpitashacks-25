document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const menuLinks = document.querySelector(".hyperlinks");
    const links = document.querySelectorAll(".hyperlinks a");
  
    // Toggle menu visibility and burger icon
    burgerMenu.addEventListener("click", () => {
      menuLinks.classList.toggle("show");  // Toggle dropdown visibility
      burgerMenu.classList.toggle("open"); // Change burger icon to X
    });
  
    // Close the menu and reset the burger icon when a link is clicked
    links.forEach(link => {
      link.addEventListener("click", () => {
        menuLinks.classList.remove("show");  // Hide dropdown
        burgerMenu.classList.remove("open"); // Reset burger icon
      });
    });
  });