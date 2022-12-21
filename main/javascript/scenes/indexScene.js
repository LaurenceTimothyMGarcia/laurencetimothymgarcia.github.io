//Scene for the index page of portfolio website

//Import THREE JS 
import * as THREE from '../../node_modules/three/build/three.module.js';

//Import Controls
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';


//Set up SCENE, CAMERA, RENDERER
const scene = new THREE.Scene();
//Camera initialization
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//Uses dom element canvas with bg
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
//Offsets camera
camera.position.setZ(30);

renderer.render(scene, camera);
//END Set up

//Lighting
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

//Control 3d scene
const controls = new OrbitControls(camera, renderer.domElement);


//adding my name as text
// const textLoader = new FontLoader();
// textLoader.load('')

//Randomly generated stars
//used for testing
function addStar()
{
    const geometry = new THREE.SphereGeometry(0.25, 25, 25);
    const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
    const star = new THREE.Mesh( geometry, material );

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );

    star.position.set(x, y, z);

    scene.add(star);
}

Array(200).fill().forEach(addStar);


//Recursive function to repeatedly call and refresh the screen
function animate()
{
    requestAnimationFrame( animate );

    //controls.update();

    renderer.render( scene, camera );
}

animate();