 
  document.documentElement.style.scrollBehavior = 'smooth';


  function showMessage(msg) {
    const msgBox = document.getElementById('message-box');
    msgBox.textContent = msg;
    msgBox.classList.add('show');

    setTimeout(() => {
      msgBox.classList.remove('show');
    }, 3000);
  }

 
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      showMessage(`Thank you, ${name}! Your message has been sent.`);
      document.getElementById('contact-form').reset();
    } else {
      showMessage('Please fill in all fields!');
    }
  });

 
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    window.addEventListener('scroll', () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        section.style.transition = 'opacity 1s ease-in';
        section.style.opacity = 1;
      }
    });
  });
