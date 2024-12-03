// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Basic page load animation
    gsap.from(".page-content h1", {
      opacity: 0,
      y: -100,
      duration: 1
    });
  
    gsap.from(".page-content p", {
      opacity: 0,
      x: -200,
      duration: 1,
      delay: 0.5
    });
  
    // Add transition effects on navigation links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { scale: 1.1, duration: 0.3 });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { scale: 1, duration: 0.3 });
      });
    });
  });
  