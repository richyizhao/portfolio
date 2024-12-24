// Icons Feather Library
feather.replace();



// Navbar scroll animation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li");

const observerOptions = {
  root: null, 
  threshold: 0.7, 
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `nav a[href="#${id}"]`
      ).parentElement;
      activeLink.classList.add("active");
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));



// Footer Copyright Date
const year = new Date().getFullYear();
document.getElementById("copyright-year").textContent = year;
