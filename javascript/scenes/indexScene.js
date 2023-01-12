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

//Get direction of camera
const camDirection = new THREE.Vector3();
camera.getWorldDirection(camDirection);

//Uses dom element canvas with bg
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.render(scene, camera);

//Resizes window when window changes
window.onresize = function (e) {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}
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
// //Uses direction to set up orbit control default 
// camera.getWorldPosition(controls.target);
// controls.target.addScaledVector(camDirection, 5);
// controls.update();


//Loader for 3d models
const modelLoader = new GLTFLoader();

//Desk
modelLoader.load( '../../models/Desk.glb', function ( gltf ) {

    gltf.scene.castShadow = true;
    gltf.scene.receiveShadow = true;

    scene.add(gltf.scene);

}, undefined, function ( error ) {
    console.error( error );
});

//Left monitor
modelLoader.load( '../../models/MonitorL.glb', function ( gltf ) {

    const monitorL = gltf.scene.children[0];

    //User data - must select the screen
    monitorL.children[1].userData.select = true;
    monitorL.children[1].userData.name = "Left Monitor";

    monitorL.castShadow = true;
    monitorL.receiveShadow = true;

    //Monitor CHILD 1 on array is the mesh for the screen
    const screenMat = new THREE.MeshBasicMaterial ( { color: 0x00ff00 } );
    monitorL.children[1].material = screenMat;

    scene.add(monitorL);

}, undefined, function ( error ) {
    console.error( error );
});


//Right monitor
modelLoader.load( '../../models/MonitorR.glb', function ( gltf ) {

    const monitorR = gltf.scene.children[0];

    //User data
    monitorR.children[1].userData.select = true;
    monitorR.children[1].userData.name = "Right Monitor";

    //Monitor CHILD 1 on array is the material for the screen
    const testMat = new THREE.MeshBasicMaterial ( { color: 0x000000 } );

    //Video texture for testing
    const testVid = document.getElementById("testVid");
    const vidTexture = new THREE.VideoTexture(testVid);
    vidTexture.minFilter = THREE.LinearFilter;
    vidTexture.magFilter = THREE.LinearFilter;

    const videoMat = new THREE.MeshBasicMaterial({
        map: vidTexture,
        side: THREE.FrontSide,
        toneMapped: false
    });

    monitorR.children[1].material = videoMat;

    scene.add(monitorR);

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

        nameMesh.userData.select = true;
        nameMesh.userData.name = "Name";
        scene.add(nameMesh);
    }
);


//Mouse interaction
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

//When hovering over object
window.addEventListener('mousemove', event => {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0 && intersects[0].object.userData.select)
    {
        //Debug naming
        console.log(`FOUND ${intersects[0].object.userData.name}`);

        //Meant to highlight screen when hovering
        intersects[1].object.material.color.set(0xffffff);
    }

})

//When clicking
window.addEventListener('click', event => {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    console.log("Mouse clicked");

    //Checks if object is selectable
    if (intersects.length > 0 && intersects[0].object.userData.select)
    {
        //Debug naming
        console.log(`FOUND ${intersects[0].object.userData.name}`);

        intersects[0].object.material.color.set(0xffffff);

        //Depending on name, changes link
        switch(intersects[0].object.userData.name)
        {
            case "Name":
                location.href = '../../index.html';
                break;
            case "Left Monitor":
                location.href = '../../gameprojects.html';
                break;
            case "Right Monitor":
                location.href = '../../programmingprojects.html';
                break;
        }
    }
})

//Recursive function to repeatedly call and refresh the screen
function animate()
{
    requestAnimationFrame( animate );

    // controls.update();

    renderer.render( scene, camera );
}

animate();

//adds paralax effect to site
//changing these values changes the "center"
let oldX = 750;
let oldY = 500;
window.onmousemove = function (ev) {
    let changex = ev.x - oldX;
    let changey = ev.y - oldY;

    //Higher you divide the value, the tighter it is
    //Horizontal changes
    camera.position.x += changex/1250;
    camera.rotateY(-changex/10000);
    camera.rotation.z = 0;

    //Vertical changes
    camera.position.y -= changey/1250;
    camera.rotateX(-changey/7500);
    camera.rotation.z = 0;

    oldX = ev.x;
    oldY = ev.y;
}