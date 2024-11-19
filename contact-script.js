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

// Grab all the buttons in the form
const yesCompanyButton = document.querySelector('.company-qy');
const noCompanyButton = document.querySelector('.company-qn');

const yesProjectButton = document.querySelector('.project-qy');
const noProjectButton = document.querySelector('.project-qn');

const companySection = document.querySelector('#company-info');
const projectSection = document.querySelector('#project-info')

const projectChoice = document.querySelector("#project-info-choice");
const lazyQ = document.querySelector('#general-q');

yesCompanyButton.addEventListener('click', () => {
  companySection.style.display = 'block';
  companySection.scrollIntoView();
}
)

noCompanyButton.addEventListener('click', () => {
  console.log('click no')
  companySection.style.display = 'none';

  projectChoice.style.display = 'flex';
  
  projectChoice.scrollIntoView();
});

yesProjectButton.addEventListener('click', () => {
  projectSection.style.display = 'block';
  projectSection.scrollIntoView();
})

noProjectButton.addEventListener('click', () => {
  projectSection.style.display = 'none';
  lazyQ.style.display = 'block';
  lazyQ.scrollIntoView();
})












// const serviceSelectItems = document.querySelectorAll('.ss');
// const exitButton = document.querySelector('.ss-exit');
// const hiwContainers = document.querySelectorAll('.hiw-container');

// serviceSelectItems.forEach((item) => {
//   item.addEventListener('click', () => {
//     // Remove .ss-clicked from all items, hide all .hiw-container elements, and hide exit button
//     serviceSelectItems.forEach((el) => el.classList.remove('ss-clicked'));
//     hiwContainers.forEach((container) => container.style.display = 'none');
//     document.querySelectorAll('.avg-timeline').forEach((avgTime) => avgTime.style.display = 'none');
//     exitButton.classList.add('ss-exit-active'); // Show the exit button

//     // Add .ss-clicked to the clicked item
//     item.classList.add('ss-clicked');

//     // Display the relevant .hiw-container based on the clicked .ss type
//     if (item.classList.contains('ss-new')) {
//       document.querySelector('.avg-new').style.display = 'block';
//       document.querySelector('.hiw-container-new').style.display = 'flex';
//     } else if (item.classList.contains('ss-upgrade')) {
//       document.querySelector('.avg-upgrade').style.display = 'block';
//       document.querySelector('.hiw-container-upgrade').style.display = 'flex';
//     } else if (item.classList.contains('ss-tweaks')) {
//       document.querySelector('.avg-tweak').style.display = 'block';
//       document.querySelector('.hiw-container-tweaks').style.display = 'flex';
//     } else if (item.classList.contains('ss-consultation')) {
//       document.querySelector('.avg-consult').style.display = 'block';
//       document.querySelector('.hiw-container-consult').style.display = 'flex';
//     }
//   });
// });


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


// document.addEventListener("DOMContentLoaded", () => {
//   const selectElement = document.getElementById("service-select");
//   const inputGroups = document.querySelectorAll(".input-group");

//   // Hide all input groups
//   const hideAllGroups = () => {
//     inputGroups.forEach(group => {
//       group.style.display = "none";
//     });
//   };

//   // Show the selected group
//   const showGroup = (value) => {
//     const selectedGroup = document.getElementById(value);
//     if (selectedGroup) {
//       selectedGroup.style.display = "block";
//     }
//   };

//   // Handle selection change
//   selectElement.addEventListener("change", (event) => {
//     const selectedValue = event.target.value;

//     hideAllGroups(); // Hide all groups first
//     if (selectedValue !== "optional") {
//       showGroup(selectedValue); // Show the relevant group
//     } else {
//       showGroup("default"); // Show the default group if nothing is selected
//     }
//   });

//   // Initialize the form by hiding all input groups and showing the default one
//   hideAllGroups();
//   showGroup("default");
// });