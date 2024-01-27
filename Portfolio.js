// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Detect scroll and add animations to sections
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.page');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight * 0.7;
        if (window.scrollY > sectionTop) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logo');
    var originalFontWeight = getComputedStyle(logo).fontWeight;
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        logo.style.fontWeight = 'bold';
      } else {
        logo.style.fontWeight = originalFontWeight;
      }
    });
  });

  
