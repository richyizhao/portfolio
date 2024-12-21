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



// Background tsparticles config
const options = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: "#111827",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: 'grab',
      },
    },
    modes: {
      push: {
        distance: 200,
        duration: 15,
      },
      grab: {
        distance: 150,
      },
    },
  },
  particles: {
    color: {
      value: "#FFFFFF",
    },
    links: {
      color: "#FFFFFF",
      distance: 170,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 3.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 170,
    },
    opacity: {
      value: 1.0,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
};

//tsParticles.load({id: "tsparticles", options});
