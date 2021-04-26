import './style.css'
import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// -- Set Scene
let scene = new THREE.Scene();
const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.querySelector('canvas.webgl')
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});

// Controls
const controls = new OrbitControls( camera, renderer.domElement );

renderer.setSize(width, height);
scene.add(camera);

camera.position.copy(new THREE.Vector3(fti(0), fti(0), fti(15)));
camera.lookAt(new THREE.Vector3(0, 0, 0));


// Lights
const pointLight = new THREE.DirectionalLight(0xffffff, 1, 100)
pointLight.position.set(12, 13, 14)
pointLight.castShadow = true;
scene.add(pointLight)

var liptideNodes;
// // - Render Functions
const clock = new THREE.Clock()
const render = function () {
    const elapsedTime = clock.getElapsedTime()

    if (liptideNodes) {
        liptideNodes.rotation.z = -.1 * elapsedTime;

        if (mouseX > 0) {
            liptideNodes.rotation.y = (-mouseX) * (elapsedTime * 0.00002 );
            liptideNodes.rotation.x = (-mouseY) * (elapsedTime * 0.00002 );
        }   
    }

    requestAnimationFrame(render);

    renderer.render(scene, camera);
};

// Animate Liptid Nodes
document.addEventListener('mousemove', animateLiptidNodes);

let mouseX = 0;
let mouseY = 0;

function animateLiptidNodes(e) {
    mouseY = e.clientY;
    mouseX = e.clientX;
}

// - Helper Functions

// Window Resize Responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

// Camera position helper
function fti(feet) {
    return feet * 12;
}

// node shape
const loader = new GLTFLoader().setPath( 'models/' );;

loader.load('liptid-radial-24.gltf', function ( gltf ) {
    
    liptideNodes = gltf.scene;

    scene.add(gltf.scene);
});

// // - Call Render

render();