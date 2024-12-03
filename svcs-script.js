const blur = document.querySelector('.content-wrapper');
const hamburger = document.querySelector('.hamburger-icon');
const menuContainer = document.querySelector('.hamburger-container');

// Hamburger menu toggle logic
let menuOpen = false;

hamburger.addEventListener('click', () => {
  if (!menuOpen) {
    // Open the menu
    hamburger.classList.add('clicked');
    menuContainer.classList.add('hamburger-container-active');
    blur.classList.add('visible');
    menuOpen = true;

    // Add click listener to blur to close the menu
    blur.addEventListener('click', closeMenu);
  } else {
    closeMenu();
  }
});

function closeMenu() {
  hamburger.classList.remove('clicked');
  menuContainer.classList.remove('hamburger-container-active');
  blur.classList.remove('visible');
  menuOpen = false;
}


const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Find the sibling .service-expand
    const serviceExpand = button.closest('.margin-40').querySelector('.content-container');
    const plusSign = button.querySelector('.plus-sign'); // Target the span with the + sign
    button.classList.toggle('shifted');
    // Toggle the 'moved' class to trigger the transition
    serviceExpand.classList.toggle('opened');
    plusSign.classList.toggle('rotated'); // Rotate the + sign
  });
});



// Should be good to go
particlesJS('particles-js', {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: ['#ff007f', '#ff4500'] }, // Fuchsia and OrangeRed
    shape: { type: 'circle' },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false }
    },
    size: {
      value: 6,
      random: true,
      anim: { enable: true, speed: 2, size_min: 0.2 }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ff007f', // Fuchsia for lines
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.7 },
      push: { particles_nb: 8 }
    }
  },
  retina_detect: true
});


