import './style.css'
import * as THREE from 'three'
import { OBJLoader } from '../node_modules/three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from '../node_modules/three/examples/jsm/loaders/MTLLoader.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'

// -- Set Scene
const scene = new THREE.Scene();
const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.querySelector('canvas.webgl')
const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});

renderer.setSize(width, height);
// renderer.setClearColor( 0xcccccc, 1 ); 

scene.add(camera);

camera.position.copy(new THREE.Vector3(fti(0), fti(0), fti(15)));
// fix first frame render issue going invisible
camera.lookAt(new THREE.Vector3(0, 0, 0));

// -- Empty Parent 
const parentContainer = new THREE.Mesh();
scene.add(parentContainer);

const circles = createCircles();
circles.forEach(c => {
    parentContainer.add(c);
});

// rotate the parent in the animation render()
function createCircles() {
    const offsetDistance = 40;
    const offsetVectors = []
    const circles = [];

    for (let i = 0; i < 40; i++) {
        let angle = (2 * Math.PI) / offsetDistance;
        let x = offsetDistance * Math.cos(i * angle);
        let y = offsetDistance * Math.sin(i * angle)

        let objectVector = new THREE.Vector3(x, y, 0);

        /* console.log({objectVector}); */

        offsetVectors.push(objectVector)
    }

    offsetVectors.forEach(function (i) {
        //TODO : debug .gltf issues
        // generateObject(i)

        circles.push(generateObject(i));
    });

    // apply the offset distance to each offsetVector
    offsetVectors.forEach(offsetVector => {
        offsetVector.setLength(offsetDistance);
    });

    // add the offset vectors to each circle to give them their offset starting position
    for (let i = 0; i < circles.length; i++) {
        circles[i].position.add(offsetVectors[i]);
    }
    // console.log({circles})

    return circles;
}

// Lights
const pointLight = new THREE.DirectionalLight(0xffffff, 1, 100)
pointLight.position.set(12, 13, 14)
pointLight.castShadow = true;
scene.add(pointLight)

// const pointLight2 = new THREE.PointLight(0xffffff, 0.5)
// pointLight2.position.set(-2,-3,-4)
// scene.add(pointLight2)

// const pointLight3 = new THREE.PointLight(0xffff00, 0.5)
// pointLight3.position.set(6,6,6)
// scene.add(pointLight3)

// - Render Function
const render = function () {

    // rotate the parent
    if (parentContainer) {
        parentContainer.rotateZ(.001);
        // keeps the circle upright
        circles.forEach(c => { 
            c.rotation.z -= .01; 
        });

    }

    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

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
// console.log({circles})

// Create each individual sphere
function generateObject(i) {
    //TODO : debug .gltf issues
    // const loader = new GLTFLoader();
    // loader.load('liptid-node.gltf', function ( gltf ) {
    //     let gltfObject = gltf.scene.children[0];
    //     scene.add(gltfObject);

    //     gltfObject.position.set(i)
    //     // console.log({gltfObject})
    //     // circles.push(gltfObject);
    //     return gltfObject;
    // });

    // console.log({gltfObject})
    
    // ------
    const sphereGeometry = new THREE.SphereBufferGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.7,
        transparent: true,
        opacity: 1
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    // console.log({sphere});
    scene.add(sphere);
    return sphere;
}

// - Call Render
render();