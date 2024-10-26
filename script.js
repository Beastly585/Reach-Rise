const hamburger = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuContainer = document.querySelector('.hamburger-container');

// Hamburger menu toggle logic
let menuOpen = false;
hamburger.addEventListener('click', () => {
  if (!menuOpen) {
    hamburgerIcon.classList.add('clicked');
    menuContainer.classList.add('show');
    menuOpen = true;
  } else {
    hamburgerIcon.classList.remove('clicked');
    menuContainer.classList.remove('show');
    menuOpen = false;
  }
});

// Catch items animation using IntersectionObserver with staggered effect
const catchContainer = document.querySelector('.hero-catch-container');
const catchItems = document.querySelectorAll('.catch-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      catchItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('slid-in');
        }, index * 200); // Stagger animation with 200ms delay between items
      });
      observer.unobserve(catchContainer); // Stop observing to avoid repeat animations
    }
  });
}, { threshold: 0.5 });


document.addEventListener('DOMContentLoaded', () => {
  const cube = document.querySelector('.cube');
  let isDragging = false;
  let startX = 0, startY = 0;
  let currentX = 0, currentY = 0;
  let velocityX = 0, velocityY = 0;
  let lastMoveTime = 0;
  let spinAnimation;

  const friction = 0.97; // Controls how fast it slows down (1 = no friction)
  const sensitivity = 1.1; // Spin sensitivity for swipes

  const onStart = (x, y) => {
    isDragging = true;
    startX = x;
    startY = y;
    velocityX = 0;
    velocityY = 0;
    cube.style.transition = 'none'; 

    if (spinAnimation) cancelAnimationFrame(spinAnimation);
  };

  const onMove = (x, y) => {
    if (!isDragging) return;

    const now = Date.now();
    const deltaX = x - startX;
    const deltaY = y - startY;

    currentX += deltaX * sensitivity;
    currentY -= deltaY * sensitivity;

    // Update velocities based on swipe speed
    velocityX = deltaX / (now - lastMoveTime || 1);
    velocityY = deltaY / (now - lastMoveTime || 1);

    cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;

    startX = x;
    startY = y;
    lastMoveTime = now;
  };

  const onEnd = () => {
    isDragging = false;
    cube.style.transition = ''; 
    spinAnimation = requestAnimationFrame(spin);
  };

  const spin = () => {
    velocityX *= friction;
    velocityY *= friction;

    currentX += velocityX;
    currentY -= velocityY;

    cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;

    // Continue spinning if the velocity is above a threshold
    if (Math.abs(velocityX) > 0.01 || Math.abs(velocityY) > 0.01) {
      spinAnimation = requestAnimationFrame(spin);
    }
  };

  // Mouse Events
  cube.addEventListener('mousedown', (e) => onStart(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
  window.addEventListener('mouseup', onEnd);

  // Touch Events
  cube.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    onStart(touch.clientX, touch.clientY);
  });

  cube.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    onMove(touch.clientX, touch.clientY);
  });

  cube.addEventListener('touchend', onEnd);
});


const slides = document.querySelectorAll('.pricing-info-slide');

// Add mouseenter and mouseleave event listeners to each slide
slides.forEach(slide => {
  slide.addEventListener('mouseenter', () => {
    // Add the 'active' class on hover
    slide.classList.add('active');
  });

});