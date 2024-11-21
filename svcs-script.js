const blur = document.querySelector(".content-wrapper");
const hamburger = document.querySelector('.hamburger-icon');
const menuContainer = document.querySelector('.hamburger-container');

// Hamburger menu toggle logic
let menuOpen = false;

hamburger.addEventListener('click', () => {
  console.log('clicked')
  if (!menuOpen) {
    hamburger.classList.add('clicked');
    menuContainer.classList.add('hamburger-container-active');
    blur.classList.add('menuOpen');
    menuOpen = true;
  } else {
    hamburger.classList.remove('clicked');
    blur.classList.remove('menuOpen');
    
    // Smoothly close the menu
    menuContainer.classList.remove('hamburger-container-active');
    menuOpen = false;
  }
});



// Should be good to go
particlesJS('particles-js', {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: ['#ff007f', '#ff4500'] }, // Fuchsia and OrangeRed
    shape: { type: 'circle' },
    opacity: {
      value: 0.7,
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
      opacity: 0.5,
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




