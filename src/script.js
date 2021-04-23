import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Texture Loader
const loader = new THREE.TextureLoader();
const cross = loader.load('./cross.png');

// Objects
const sphereGeometry = new THREE.SphereBufferGeometry( .7, 32, 32);
const starFieldGeometry = new THREE.BufferGeometry;
const particlesCnt = 5000;

const posArray = new Float32Array(particlesCnt * 3);

for ( let i = 0; i < particlesCnt * 3; i++ ) {
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
}

starFieldGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Materials

// particlesSphere
// const sphereMaterial = new THREE.PointsMaterial({
//     size: 0.005
// })

// solidSphere
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.2,
    transparent: false,
    opacity: 1,
    wireframe: true // disable when done
})

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    map: cross,
    transparent: true,
    // color: 'white',
    // blending: THREE.AdditiveBlending
})

// Mesh
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
const starField = new THREE.Points(starFieldGeometry, particlesMaterial)
scene.add(sphere, starField)

// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.set(2,3,4)
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0xffffff, 0.5)
pointLight2.position.set(-2,-3,-4)
scene.add(pointLight2)

const pointLight3 = new THREE.PointLight(0xffff00, 0.5)
pointLight3.position.set(6,6,6)
scene.add(pointLight3)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// renderer.setClearColor(new THREE.Color('#21282a'), 1)

// Mouse
document.addEventListener('mousemove', animateParticles);

let mouseX = 0;
let mouseY = 0;

function animateParticles(e) {
    mouseY = e.clientY * 0.1;
    mouseX = e.clientX * 0.1;
}
/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime
    sphere.rotation.z = .05 * elapsedTime

    // animate before mousemove
    starField.rotation.y = elapsedTime * -0.01;
    starField.rotation.x = elapsedTime * -0.01;
    
    // animate on mousemove
    if (mouseX > 0) {
        starField.rotation.x = -mouseY * (elapsedTime * 0.00004);
        starField.rotation.y = -mouseX * (elapsedTime * 0.00004);

        sphere.rotation.x = mouseY * (1.1 * 0.0003);
        sphere.rotation.y = mouseX * (1.1 * 0.0003);
    }
    
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()