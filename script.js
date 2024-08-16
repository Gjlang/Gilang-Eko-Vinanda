
  // Toggle menu for hamburger icon
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.querySelectorAll('.carousel-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      document.querySelectorAll('.carousel-card').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });
  

