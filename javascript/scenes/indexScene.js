//Scene for the index page of portfolio website

//Import THREE JS 
import * as THREE from 'three';

//Loading models
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//Font and text loaders and text geometry addon
import { TTFLoader } from 'three/addons/loaders/TTFLoader';
import { FontLoader } from 'three/addons/loaders/FontLoader';
import { TextGeometry } from 'three/addons/geometries/TextGeometry';

//Import Controls
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


//Set up SCENE, CAMERA, RENDERER
const scene = new THREE.Scene();
//Camera initialization
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
//Offsets camera
camera.position.set(0, 3, 8);

//Uses dom element canvas with bg
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.render(scene, camera);
//END Set up

//Lighting SET UP

//Directional Light 1
const dirLight1 = new THREE.DirectionalLight(0xffffff, 25);
dirLight1.position.set(5, 10, 7.5);
scene.add(dirLight1);

//Light helper - Remove later
const dirHelper1 = new THREE.DirectionalLightHelper(dirLight1);
scene.add(dirHelper1);

//Control 3d scene
// const controls = new OrbitControls(camera, renderer.domElement);


//Loader for 3d models
const modelLoader = new GLTFLoader();

//Desk
//Test atm
modelLoader.load( '../../models/DeskScene.glb', function ( gltf ) {

    scene.add(gltf.scene);

}, undefined, function ( error ) {
    console.error( error );
});



//adding my name as text
const fontLoader = new FontLoader();
const ttfLoader = new TTFLoader();
ttfLoader.load('../../fonts/Comfortaa-Regular.ttf',(json) => {
        const comfortaaFont = fontLoader.parse(json);

        const nameGeometry = new TextGeometry('Laurence Garcia', {
            font: comfortaaFont,
            size: 1, 
            height: 0.5
        });

        const nameMaterial = new THREE.MeshNormalMaterial();
        const nameMesh = new THREE.Mesh(nameGeometry, nameMaterial);

        nameMesh.position.x = -6;
        nameMesh.position.y = 5.5;
        nameMesh.position.z = -1;
        scene.add(nameMesh);
    }
);


//Recursive function to repeatedly call and refresh the screen
function animate()
{
    requestAnimationFrame( animate );

    //controls.update();

    renderer.render( scene, camera );
}

animate();