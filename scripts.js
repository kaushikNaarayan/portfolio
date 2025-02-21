fetch('config.json')
  .then(response => response.json())
  .then(config => {
    document.querySelector('.social-links a[href*="github"]').href = config.github;
    document.querySelector('.social-links a[href*="linkedin"]').href = config.linkedin;
    document.querySelector('.social-links a[href*="twitter"]').href = config.twitter;
    document.querySelector('.social-links a[href*="company"]').href = config.company;
  });

document.addEventListener('DOMContentLoaded', function() {
  const collapsibles = document.querySelectorAll('.collapsible');
  collapsibles.forEach(collapsible => {
    collapsible.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });

  const links = document.querySelectorAll('nav ul li a');

  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  }
});