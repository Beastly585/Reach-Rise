// Need to check Node.js installed - node -v
// Get to correct folder - npm init -y
// npm install vite
// Open package.json - "scripts" >> add "dev": "vite" and "build" : "vite build" 
// Install THREE - npm install three - gets added to package.json

// Should be good to go

const blur = document.querySelector("body");
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
    
    // Delay to allow smooth opacity transition on exit
    menuContainer.style.transition = "opacity 0.4s ease, transform 0.5s ease";
    menuContainer.style.opacity = "0";
    menuContainer.style.transform = "translateX(100%)";
    
    setTimeout(() => {
      menuContainer.classList.remove('hamburger-container-active');
      menuContainer.style.opacity = ""; // Reset inline style
      menuContainer.style.transform = "";
    }, 500);
    
    menuOpen = false;
  }
});


//Service Section Behavior 

const serviceTitles = document.querySelectorAll('.service-item-container');
const serviceDescs = document.querySelectorAll('.service-description');

serviceTitles.forEach((title, index) => {
  let itemOpen = false;

  title.addEventListener('click', () => {
    const desc = serviceDescs[index]; // Get the corresponding description
    const expandIcon = title.querySelector('.expand'); // Select the + sign

    if (!itemOpen) {
      desc.classList.add('service-description-visible');
      title.classList.add('service-title-open');
      expandIcon.style.transform = 'rotate(45deg)'; // Rotate the + sign
      itemOpen = true;
    } else {
      title.classList.remove('service-title-open');
      expandIcon.style.transform = 'rotate(0deg)'; // Reset rotation

      // Smooth transition for collapse
      setTimeout(() => {
        desc.classList.remove('service-description-visible');
      }, 10 ); // Match the CSS transition duration
      itemOpen = false;
    }
  });
});


// Add mouseenter and mouseleave event listeners to each slide
const slides = document.querySelectorAll('.pricing-info-slide');

slides.forEach(slide => {
  slide.addEventListener('mouseenter', () => {
    // Add the 'active' class on hover
    slide.classList.add('active');
  });

});

const navContainer = document.querySelector('.nav-container');
const navItems = document.querySelectorAll('.nav-container nav');
const sections = document.querySelectorAll('.section-var');



// Add a click event listener to the nav container
navContainer.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'nav') {
        const clickedClass = event.target.classList[0]; 
        
        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the matched section
        const targetSection = document.querySelector(`.${clickedClass}-section`);
        if (targetSection) {
            targetSection.style.display = 'flex';
        }
    }
});

document.querySelectorAll('.service-container').forEach((container) => {
  const serviceTextContainer = container.querySelector('.service-text-container');
  const scrollIndicator = container.querySelector('.scroll-indicator');

  // Update indicator on scroll
  serviceTextContainer.addEventListener('scroll', () => {
    const maxScroll = (serviceTextContainer.scrollWidth - serviceTextContainer.clientWidth + 150);
    const scrollPercentage = serviceTextContainer.scrollLeft / maxScroll;
    
    scrollIndicator.style.left = `${scrollPercentage * 100}%`;
  });

  // Initialize indicator on page load
  const maxScroll = serviceTextContainer.scrollWidth - serviceTextContainer.clientWidth;
  const scrollPercentage = serviceTextContainer.scrollLeft / maxScroll;
  scrollIndicator.style.left = `${scrollPercentage * 100}%` ;
});

// Select all quote elements and arrows
const quotes = document.querySelectorAll('.hero-quote');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

// Track the current quote index
let currentQuoteIndex = 0;

// Function to show the quote at the current index and hide the others
function showQuote(index) {
  quotes.forEach((quote, i) => {
    console.log(i)
    quote.style.display = i === index ? 'block' : 'none';
  });
}

// Show the initial quote
showQuote(currentQuoteIndex);

// Event listener for the right arrow
rightArrow.addEventListener('click', () => {
  console.log('clicked right')
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Loop to start if at end
  showQuote(currentQuoteIndex);
});

// Event listener for the left arrow
leftArrow.addEventListener('click', () => {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length; // Loop to end if at start
  showQuote(currentQuoteIndex);
});




import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

import gsap from 'gsap';
import { lightPosition, textureLoad, Vector3 } from 'three/webgpu';
import { materialReference } from 'three/webgpu';



// Create Scene
const scene = new THREE.Scene()


// Sizing to Window
const environmentSize = {
  width: Math.min(window.innerWidth,400),
  height: Math.min(0.55 * innerHeight, 400)
}

console.log(environmentSize)

console.log(window.innerHeight)

// Create Camera 
const camera = new THREE.PerspectiveCamera(75, environmentSize.width / environmentSize.height)
camera.position.set(0,0,5.5);
scene.add(camera)


// Create Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true

})
renderer.setSize(environmentSize.width, environmentSize.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);

const ambientLight = new THREE.AmbientLight('#C6FFFF', 2); 

scene.add(ambientLight);



const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

const material = new THREE.MeshToonMaterial({color: '#FFFFFF'});

// Add a FontLoader 
const fontLoader = new FontLoader();
fontLoader.load('./fonts/helvetiker_regular.typeface.json', (font) => {
  
  const words = ['tell\nyour\nstory',
     'build\nan\nempire',
      'show\nyour\nwork',
      'publish\nnew\nmusic',
      'be\n the new\n NIKE',
      'post\n \n \nunicorns'];

  words.forEach((word, index) => {
    // Create text geometry
    const textGeometry = new TextGeometry(word, {
      font: font,
      size: 0.4,
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 3,
    });
    // Create text mesh

    const outlineGeometry = textGeometry.clone();
    //outlineGeometry.scale(1.15, 1.15, 1.15); // Scale up slightly for outline effect
    
    // Outline material (white)
    const frontMaterial = new THREE.MeshToonMaterial({ color: '#ff0000' });
    frontMaterial.side = THREE.FrontSide;
    
    // Material for the sides (depth) of the text
    const sideMaterial = new THREE.MeshToonMaterial({ color: '#000000' });
    sideMaterial.side = THREE.BackSide;

    
    const textMesh = new THREE.Mesh(textGeometry, [frontMaterial, sideMaterial]);
    // Ensure the outline appears behind the main text
  
    textGeometry.center();

    // Position the text mesh on each face of the cube
    switch (index) {
      case 0: // Front
        textMesh.position.set(0, 0, 1.51);
        break;
      case 1: // Back
        textMesh.position.set(0, 0, -1.51);
        textMesh.rotation.y = Math.PI;
        break;
      case 2: // Left
        textMesh.position.set(-1.51, 0, 0);
        textMesh.rotation.y = -Math.PI / 2;
        break;
      case 3: // Right
        textMesh.position.set(1.51, 0, 0);
        textMesh.rotation.y = Math.PI / 2;
        break;
      case 4: // Top
        textMesh.position.set(0, 1.51, 0);
        textMesh.rotation.x = -Math.PI / 2;
        break;
      case 5: // Bottom
        textMesh.position.set(0, -1.51, 0);
        textMesh.rotation.x = Math.PI / 2;
        break;
    }




    scene.add(textMesh);
  });
});
// Render the scene
renderer.render(scene, camera)

// Add controls


const geometry = new THREE.BoxGeometry(3, 3, 3);

// Add a texture loader
const textureLoader = new THREE.TextureLoader();




//Load Textures
const texture = textureLoader.load('./imgs/Metal/texture.png');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 1);

const textureHeight = textureLoader.load('./imgs/Metal/height.jpg');
const roughness = textureLoader.load('./imgs/Metal/roughness.jpg');
const textureNormal = textureLoader.load('./imgs/Metal/normal.jpg');
const ao = textureLoader.load('./imgs/Metal/ao.png');
const imageTexture = textureLoader.load('./imgs/unicorn.jpg');


const material1 = [
  new THREE.MeshPhysicalMaterial({map: textureNormal}), // Right side
  new THREE.MeshPhysicalMaterial({map: textureNormal}), // Left side
  new THREE.MeshPhysicalMaterial({ map: textureNormal}), // Top side
  new THREE.MeshPhysicalMaterial({ map: imageTexture  }), // Bottom side
  new THREE.MeshPhysicalMaterial({map: textureNormal}), // Front side (display image)
  new THREE.MeshPhysicalMaterial({map: textureNormal}), // Back side
];

material1.clearcoat =0.6
material1.clearcoatRoughness = 0.3
material1.sheen =0.3
material1.sheenColor = new THREE.Color(0x808080)
material1.iridescence = 0.5
material1.iridescenceIOR = 1.5



// material.map = texture;
// material.normalMap = textureNormal; // ------VERY POWERFUL - USE IT -- Also, scaleable, check line below
// material.displacementMap = textureHeight;
// material.displacementScale = 0.1
// material.roughnessMap = roughness;
// material.aoMap = ao;
material.transparent = true;
material.opacity = 1;
const sphere = new THREE.Mesh(geometry, material1);
scene.add(sphere);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;






// // ------- PROPERTIES EXCLUSIVE TO MESHPHYSICAL

// // Clearcoat
// gui.add(material, 'clearcoat').min(0).max(1).step(0.0001) //clearcoat is like a thin layer over the object that has its own light properties
// gui.add(material, 'clearcoatRoughness').min(0).max(1).step(0.0001)

// // Sheen
// gui.add(material, 'sheen').min(0).max(1).step(0.0001) //sheen is like a glow that gets added to the element
// gui.add(material, 'sheenRoughness').min(0).max(1).step(0.0001)
// gui.addColor(material, 'sheenColor')

// //Iredescence
// gui.add(material, 'iridescence').min(0).max(1).step(0.0001) // Irridescence is the effect on bubbles, CDs, etc
// gui.add(material, 'iridescenceIOR').min(1).max(2.333).step(0.0001) // Hard cap for IOR at max = 2.333
// gui.add(material.iridescenceThicknessRange, '0').min(1).max(1000).step(1) //
// gui.add(material.iridescenceThicknessRange, '1').min(1).max(1000).step(1) //


// // Tranmission - allow light to go through the item (see thru glass, underwater)
// material.transmission = 1;
// material.ior = 1.5;
// material.thickness = 0.5;

// gui.add(material, 'transmission').min(0).max(1).step(0.0001) // Irridescence is the effect on bubbles, CDs, etc
// gui.add(material, 'ior').min(1).max(10).step(0.0001) // IOR means Index of Refraction (diamond: 2.417, water: 1.333, Air: )
// gui.add(material, 'thickness').min(0).max(1).step(0.5)

// gui.add(material, 'metalness').min(0).max(1).step(0.001);
// gui.add(material, 'roughness').min(0).max(1).step(0.001);



// Make Environment Responsive
window.addEventListener('resize', () => {
  console.log('resized')
  // Update environmentSize
  environmentSize.width = Math.min(window.innerWidth, 400)
  environmentSize.height = Math.min(window.innerHeight * 0.5, 400)

  // Update Camera 
  camera.aspect = environmentSize.width / environmentSize.height
  camera.updateProjectionMatrix()

  // Update Renderer 
  renderer.setSize(environmentSize.width, environmentSize.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.render(scene, camera)
}
)

const clock = new THREE.Clock()

const directionalLight = new THREE.DirectionalLight('#ECC1FF', 1.6, 2); 

scene.add(directionalLight);

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Set the directional light to follow the camera
  directionalLight.position.copy(camera.position);

  // Ensure the light points toward the center of the scene (where the cube is)
  directionalLight.target.position.set(0, 0, 0);
  directionalLight.target.updateMatrixWorld();

  // Render the scene
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();


