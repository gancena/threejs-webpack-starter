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

// // - Render Function
const render = function () {

    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

// - Helper Functions

let mixer;
const clock = new THREE.Clock(); 

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
    
    mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {mixer.clipAction(clip).play(); });

    scene.add(gltf.scene);
});

console.log('2', {loader})

// // - Call Render

render();
var delta = clock.getDelta();
mixer.update( delta )