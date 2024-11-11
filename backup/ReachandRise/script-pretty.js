// Need to check Node.js installed - node -v
// Get to correct folder - npm init -y
// npm install vite
// Open package.json - "scripts" >> add "dev": "vite" and "build" : "vite build" 
// Install THREE - npm install three - gets added to package.json

// Should be good to go

import * as THREE from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

// Create Scene
const scene = new THREE.Scene()

// Create Object

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: white});
const cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
scene.add(mesh)


// Sizing to Window
const environmentSize = {
  width: window.innerWidth,
  height: 0.5 * innerHeight
}

// Create Camera 
const camera = new THREE.PerspectiveCamera(75, environmentSize.width / environmentSize.height)
scene.add(camera)


// Create Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGL3DRenderer({
  canvas: canvas
})
renderer.setSize(environmentSize.width, environmentSize.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Render the scene
renderer.render(scene, camera)