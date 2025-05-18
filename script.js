// Smooth scroll to chatbot when "Start Chatting" is clicked
document.querySelector('.btn-chat').addEventListener('click', () => {
  document.querySelector('#chat').scrollIntoView({ behavior: 'smooth' });
});

// Animate elements on scroll (fade-in)
const fadeElements = document.querySelectorAll('.hero, .chatbot-section, .newsletter, footer');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// Button hover animation
const chatBtn = document.querySelector('.btn-chat');
chatBtn.addEventListener('mouseover', () => {
  chatBtn.style.transform = 'scale(1.05)';
});
chatBtn.addEventListener('mouseout', () => {
  chatBtn.style.transform = 'scale(1)';
});
