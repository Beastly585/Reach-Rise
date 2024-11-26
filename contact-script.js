const blur = document.querySelector(".content-wrapper");
const hamburger = document.querySelector('.hamburger-icon');
const menuContainer = document.querySelector('.hamburger-container');

// Hamburger menu toggle logic
let menuOpen = false;

hamburger.addEventListener('click', () => {
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



const yesCompany = document.querySelector('#company-expand');
const yesProject = document.querySelector('#project-expand');
const project = document.querySelector('.project-info-container');
const company = document.querySelector('.company-info-container');

console.log(yesCompany)

yesCompany.addEventListener('click', () => {
  console.log('clicked')
  if (company.style.display === 'none' || company.style.display === '') {
    yesCompany.classList.toggle('active');
    company.style.display = 'flex';
  } else {
    company.style.display = 'none';
    yesCompany.classList.remove('active'); 
  }
})

yesProject.addEventListener('click', () => {
  console.log('clicked')
  if (project.style.display === 'none' || project.style.display === '') {
    yesProject.classList.toggle('active');
    project.style.display = 'flex';
  } else {
    project.style.display = 'none';
    yesProject.classList.remove('active');
  }
})

const slider = document.getElementById("budget");
const budgetValue = document.getElementById("budget-value");
const budgetDescription = document.getElementById("budget-description");

// Dynamically update the slider's thumb and background colors
slider.oninput = function () {
  const value = this.value;

  // Update the budget value
  budgetValue.innerHTML = `$${value}`;
  if (value >= 5000) {
    budgetValue.innerHTML = ">$5000";
  } else if (value <= 500) {
    budgetValue.innerHTML = "<$500";
  }

  // Update the color based on the slider's value (neutral scale)
  const percentage = (value - 500) / (5000 - 500); // Scale to 0-1
  const color1 = "white"; // Starting color
  const color2 = "orangered"; // Midpoint color
  const color3 = "fuchsia"; // End color

  const mixColor = (start, end, ratio) =>
    Math.round(start + (end - start) * ratio);

  // Convert percentage to RGB blending
  const r = mixColor(
    mixColor(255, 255, Math.min(percentage * 2, 1)),
    255,
    Math.max(percentage - 0.5, 0) * 2
  );
  const g = mixColor(
    mixColor(255, 69, Math.min(percentage * 2, 1)),
    0,
    Math.max(percentage - 0.5, 0) * 2
  );
  const b = mixColor(
    mixColor(255, 0, Math.min(percentage * 2, 1)),
    255,
    Math.max(percentage - 0.5, 0) * 2
  );

  this.style.background = `rgb(${r}, ${g}, ${b})`;

  // Update the budget description
  if (value < 1000) {
    budgetDescription.innerText =
      "A great starting point for small, essential projects.";
  } else if (value < 2500) {
    budgetDescription.innerText =
      "Perfect for medium-sized websites with some extra features";
  } else if (value < 4000) {
    budgetDescription.innerText =
      "Ideal for comprehensive designs with advanced functionality.";
  } else {
    budgetDescription.innerText =
      "Premium designs and full-service development";
  }
};





const serviceSelectItems = document.querySelectorAll('.ss');
const exitButton = document.querySelector('.ss-exit');
const hiwContainers = document.querySelectorAll('.hiw-container');

serviceSelectItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove .ss-clicked from all items, hide all .hiw-container elements, and hide exit button
    serviceSelectItems.forEach((el) => el.classList.remove('ss-clicked'));
    hiwContainers.forEach((container) => container.style.display = 'none');
    document.querySelectorAll('.avg-timeline').forEach((avgTime) => avgTime.style.display = 'none');
    exitButton.classList.add('ss-exit-active'); // Show the exit button

    // Add .ss-clicked to the clicked item
    item.classList.add('ss-clicked');

    // Display the relevant .hiw-container based on the clicked .ss type
    if (item.classList.contains('ss-new')) {
      document.querySelector('.avg-new').style.display = 'block';
      document.querySelector('.hiw-container-new').style.display = 'flex';
    } else if (item.classList.contains('ss-upgrade')) {
      document.querySelector('.avg-upgrade').style.display = 'block';
      document.querySelector('.hiw-container-upgrade').style.display = 'flex';
    } else if (item.classList.contains('ss-tweaks')) {
      document.querySelector('.avg-tweak').style.display = 'block';
      document.querySelector('.hiw-container-tweaks').style.display = 'flex';
    } else if (item.classList.contains('ss-consultation')) {
      document.querySelector('.avg-consult').style.display = 'block';
      document.querySelector('.hiw-container-consult').style.display = 'flex';
    }
  });
});


// // Add click event to exit button to hide the expanded view
// exitButton.addEventListener('click', () => {
//   serviceSelectItems.forEach((el) => el.classList.remove('ss-clicked'));
//   hiwContainers.forEach((container) => container.style.display = 'none');
//   exitButton.classList.remove('ss-exit-active'); // Hide the exit button
// });
// // Add click event to exit button to collapse any expanded item
// exitButton.addEventListener('click', () => {
//   serviceSelectItems.forEach((item) => item.classList.remove('ss-clicked'));
//   exitButton.classList.remove('ss-exit-active');
// });


// //Expand Service Summary 

// const expandButton = document.querySelector('.expand-arrow');
// const expandContainer = document.querySelector('.service-summ-container');
// const expandSummary = document.querySelectorAll('.service-summ-item');

// expandButton.addEventListener('click', () => {
//   expandButton.classList.toggle('expand-active')
//   console.log(expandButton.classList);
//   expandContainer.style.display === 'flex' ? 'none' : 'flex';
//   expandSummary.forEach(summary => {
//     summary.style.display = (summary.style.display === 'block') ? 'none' : 'block';
//   })
//   console.log(expandSummary[1].classList)
// })


document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("service-select");
  
  // Check if selectElement exists before proceeding
  if (!selectElement) {
    console.error('The service-select element was not found.');
    return; // Exit early if the element doesn't exist
  }

  const inputGroups = document.querySelectorAll(".input-group");

  // Hide all input groups
  const hideAllGroups = () => {
    inputGroups.forEach(group => {
      group.style.display = "none";
    });
  };

  // Show the selected group
  const showGroup = (value) => {
    const selectedGroup = document.getElementById(value);
    if (selectedGroup) {
      selectedGroup.style.display = "block";
    }
  };  

  // Handle selection change
  selectElement.addEventListener("change", (event) => {
    const selectedValue = event.target.value;

    hideAllGroups(); // Hide all groups first
    if (selectedValue !== "optional") {
      showGroup(selectedValue); // Show the relevant group
    } else {
      showGroup("default"); // Show the default group if nothing is selected
    }
  });

}); // <-- Missing closing parenthesis here


//   // Initialize the form by hiding all input groups and showing the default one
//   hideAllGroups();
//   showGroup("default");
// });