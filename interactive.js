window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});
ScrollReveal().reveal(".home-img, .services-container, .portfolio.box, .contact form", { origin: "bottom" });