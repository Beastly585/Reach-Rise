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



const yesCompany = document.querySelector('#company-expand');
const yesProject = document.querySelector('#project-expand');
const project = document.querySelector('.project-info-container');
const company = document.querySelector('.company-info-container')

console.log(yesCompany)

yesCompany.addEventListener('click', () => {
  console.log('clicked')
  if (company.style.display === 'none' || company.style.display === '') {
    company.style.display = 'flex';
  } else {
    company.style.display = 'none';
  }
})

yesProject.addEventListener('click', () => {
  console.log('clicked')
  if (project.style.display === 'none' || project.style.display === '') {
    project.style.display = 'flex';
  } else {
    project.style.display = 'none';
  }
})



const slider = document.getElementById("budget");
const budgetValue = document.getElementById("budget-value");


slider.oninput = function() {
  budgetValue.innerHTML = "$" + this.value;

  // Calculate the percentage of the slider value
  const percentage = (this.value - 500) / (5000 - 500); // Range from 0 to 1

  if (this.value >= 5000) {
    budgetValue.innerHTML = "$5000+";
  } else {
    budgetValue.innerHTML = "$" + this.value;
  }

  // Dynamically adjust the thumb color based on the slider value
  const red = Math.min(255, Math.floor(255 * percentage)); // Increase red as the value increases
  const green = 255 - red; // Decrease green as the value increases
  const thumbColor = `rgb(${red}, ${green}, 0)`; // Use RGB color
  
  // Update the thumb color dynamically
  slider.style.setProperty('--thumb-color', thumbColor);
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