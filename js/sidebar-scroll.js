// Highlight active section in sidebar based on scroll position
(function() {
  'use strict';
  
  // Get all sections and nav links
  const sections = document.querySelectorAll('.content-section[id]');
  const navLinks = document.querySelectorAll('.sidebar-menu .nav-link');
  
  // Function to update active link
  function updateActiveLink() {
    let currentSection = '';
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Find which section is currently in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150; // Offset for better UX
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    // Update nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      
      if (href === '#' + currentSection || 
          (href === '' && currentSection === 'home') ||
          (href === '' && !currentSection && scrollPosition < 100)) {
        link.classList.add('active');
      }
    });
  }
  
  // Smooth scroll to section when clicking nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle anchor links
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update active state immediately
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
        }
      } else if (href === '') {
        // Handle home link (scrolls to top)
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
  
  // Update on scroll
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(updateActiveLink);
  });
  
  // Update on load
  updateActiveLink();
})();
