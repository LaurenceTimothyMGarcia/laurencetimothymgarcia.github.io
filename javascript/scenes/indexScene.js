//Scene for the index page of portfolio website

//Import THREE JS 
import * as THREE from 'three';

//Loading models
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//Font and text loaders and text geometry addon
import { TTFLoader } from 'three/addons/loaders/TTFLoader';
import { FontLoader } from 'three/addons/loaders/FontLoader';
import { TextGeometry } from 'three/addons/geometries/TextGeometry';

//Import Post processing
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer';
import { RenderPass } from 'three/addons/postprocessing/RenderPass';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass';
import { FXAAShader } from 'three/addons/shaders/FXAAShader'

//Import Controls
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let selectedObjects = [];


//
//Set up SCENE, CAMERA, RENDERER
//
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

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.render(scene, camera);
//END Set up


//
//Lighting SET UP
//

//Directional Light 1
const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.2);
dirLight1.position.set(50, 100, 7.5);
dirLight1.castShadow = true;
scene.add(dirLight1);

//Spot Light 1
const spotLight1 = new THREE.SpotLight(0xffffff, 0.75, 0, Math.PI/3, 1);
spotLight1.position.set(-5, 20, 7.5);
spotLight1.castShadow = true;
scene.add(spotLight1);

//Spot Light 2
const spotLight2 = new THREE.SpotLight(0xffffff, 0.3, 0, Math.PI/3, 1);
spotLight2.position.set(2, 1, 20);
spotLight2.castShadow = true;
scene.add(spotLight2);

//Point Light 1
const pointLight1 = new THREE.PointLight(0xffffff, 0.5);
pointLight1.position.set(0, 4, -3);
pointLight1.castShadow = true;
scene.add(pointLight1);

//Point Light 2
const pointLight2 = new THREE.PointLight(0x8700ff, 2);
pointLight2.position.set(-3, 3, -3);
pointLight2.castShadow = true;
scene.add(pointLight2);

//Point Light 2
const pointLight3 = new THREE.PointLight(0x0000ff, 2);
pointLight3.position.set(3, 3, -3);
pointLight3.castShadow = true;
scene.add(pointLight3);

//Light helper - Remove later
// const dirHelper1 = new THREE.DirectionalLightHelper(dirLight1);
// scene.add(dirHelper1);
// const spotHelper1 = new THREE.SpotLightHelper(spotLight1);
// scene.add(spotHelper1);
// const spotHelper2 = new THREE.SpotLightHelper(spotLight2);
// scene.add(spotHelper2);
// const pointHelper1 = new THREE.PointLightHelper(pointLight1);
// scene.add(pointHelper1);
// const pointHelper2 = new THREE.PointLightHelper(pointLight2);
// scene.add(pointHelper2);
// const pointHelper3 = new THREE.PointLightHelper(pointLight3);
// scene.add(pointHelper3);


//Control 3d scene
// const controls = new OrbitControls(camera, renderer.domElement);
// //Uses direction to set up orbit control default 
// camera.getWorldPosition(controls.target);
// controls.target.addScaledVector(camDirection, 5);
// controls.update();


//
//Loading 3D models
//

//Loader for 3d models
const modelLoader = new GLTFLoader();

//Room || Walls
modelLoader.load('../../models/Room.gltf', function (gltf) {

    gltf.scene.children[0].receiveShadow = true;

    gltf.scene.children[0].userData.select = false;

    scene.add(gltf.scene);

}, undefined, function ( error ) {
    console.error( error );
});

//Desk
modelLoader.load( '../../models/Desk.gltf', function ( gltf ) {

    gltf.scene.children[0].castShadow = true;
    gltf.scene.children[0].receiveShadow = true;
    gltf.scene.children[1].castShadow = true;
    gltf.scene.children[1].receiveShadow = true;
    gltf.scene.children[2].castShadow = true;
    gltf.scene.children[2].receiveShadow = true;

    scene.add(gltf.scene);

}, undefined, function ( error ) {
    console.error( error );
});

//Left monitor
modelLoader.load( '../../models/MonitorL.gltf', function ( gltf ) {

    const monitorL = gltf.scene.children[0];

    //User data - must select the screen
    monitorL.children[1].userData.select = true;
    monitorL.children[1].userData.name = "Left Monitor";
    monitorL.children[1].userData.ogCol = monitorL.children[0].material.color.getHex();

    monitorL.children[0].castShadow = true;

    //Monitor CHILD 1 on array is the mesh for the screen
    const screenMat = new THREE.MeshBasicMaterial ( { color: 0x00ff00 } );
    monitorL.children[1].material = screenMat;

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

    monitorL.children[1].material = videoMat;

    scene.add(monitorL);

}, undefined, function ( error ) {
    console.error( error );
});


//Right monitor
modelLoader.load( '../../models/MonitorR.gltf', function ( gltf ) {

    const monitorR = gltf.scene.children[0];

    //User data
    monitorR.children[1].userData.select = true;
    monitorR.children[1].userData.name = "Right Monitor";
    monitorR.children[1].userData.ogCol = monitorR.children[0].material.color.getHex();

    monitorR.children[0].castShadow = true;

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

//Resume
modelLoader.load('../../models/Resume.gltf', function (gltf) {

    const resume = gltf.scene.children[0];

    resume.userData.select = true;
    resume.userData.name = "Resume";
    resume.userData.ogCol = resume.material.color.getHex();

    const resumeImg = new THREE.TextureLoader().load("../../images/SoftEngScreenshot.png");
    const resumeMat = new THREE.MeshLambertMaterial( {map: resumeImg} );
    resume.material = resumeMat;

    scene.add(resume);

}, undefined, function ( error ) {
    console.error( error );
});

//CLA
modelLoader.load('../../models/CLA.gltf', function (gltf) {

    const cla = gltf.scene.children[0];

    cla.userData.select = true;
    cla.userData.name = "CLA";
    cla.userData.ogCol = cla.material.color.getHex();

    scene.add(cla);

}, undefined, function ( error ) {
    console.error( error );
});

//Polaroids
modelLoader.load('../../models/Polaroids.gltf', function (gltf) {

    //Initialize all 5 polaroids
    const polaroid1 = gltf.scene.children[0];
    const polaroid2 = gltf.scene.children[1];
    const polaroid3 = gltf.scene.children[2];
    const polaroid4 = gltf.scene.children[3];
    const polaroid5 = gltf.scene.children[4];

    //Loading Image
    const image1 = new THREE.TextureLoader().load("../../images/artprojects/landscapes/The Apocolypse Fixed.png");
    const imageMat1 = new THREE.MeshLambertMaterial( {map: image1} );
    polaroid1.children[1].material = imageMat1;

    const image2 = new THREE.TextureLoader().load("../../images/artprojects/OriginalCharacters/DetectiveIncognito/Detective Incognito Bar Window Second Grain.png");
    const imageMat2 = new THREE.MeshLambertMaterial( {map: image2} );
    polaroid2.children[1].material = imageMat2;

    const image3 = new THREE.TextureLoader().load("../../images/artprojects/OriginalCharacters/Oras/Man of Time God Pose Watermark.png");
    const imageMat3 = new THREE.MeshLambertMaterial( {map: image3} );
    polaroid3.children[1].material = imageMat3;

    const image4 = new THREE.TextureLoader().load("../../images/artprojects/FanArt/ArcaneEkko/HoverPose1.png");
    const imageMat4 = new THREE.MeshLambertMaterial( {map: image4} );
    polaroid4.children[1].material = imageMat4;

    const image5 = new THREE.TextureLoader().load("../../images/artprojects/FanArt/VelvetRoomP5/Mementos Official Final.png");
    const imageMat5 = new THREE.MeshLambertMaterial( {map: image5} );
    polaroid5.children[1].material = imageMat5;

    //Initialize all polaroids user data to be selectable
    polaroid1.children[0].userData.select = true;
    polaroid1.children[1].userData.select = true;
    polaroid1.children[0].userData.name = "Polaroid";
    polaroid1.children[1].userData.name = "Polaroid";
    polaroid1.children[0].userData.ogCol = polaroid1.children[0].material.color.getHex();
    polaroid1.children[1].userData.ogCol = polaroid1.children[0].material.color.getHex();

    polaroid2.children[0].userData.select = true;
    polaroid2.children[1].userData.select = true;
    polaroid2.children[0].userData.name = "Polaroid";
    polaroid2.children[1].userData.name = "Polaroid";
    polaroid2.children[0].userData.ogCol = polaroid2.children[0].material.color.getHex();
    polaroid2.children[1].userData.ogCol = polaroid2.children[0].material.color.getHex();

    polaroid3.children[0].userData.select = true;
    polaroid3.children[1].userData.select = true;
    polaroid3.children[0].userData.name = "Polaroid";
    polaroid3.children[1].userData.name = "Polaroid";
    polaroid3.children[0].userData.ogCol = polaroid3.children[0].material.color.getHex();
    polaroid3.children[1].userData.ogCol = polaroid3.children[0].material.color.getHex();

    polaroid4.children[0].userData.select = true;
    polaroid4.children[1].userData.select = true;
    polaroid4.children[0].userData.name = "Polaroid";
    polaroid4.children[1].userData.name = "Polaroid";
    polaroid4.children[0].userData.ogCol = polaroid4.children[0].material.color.getHex();
    polaroid4.children[1].userData.ogCol = polaroid4.children[0].material.color.getHex();

    polaroid5.children[0].userData.select = true;
    polaroid5.children[1].userData.select = true;
    polaroid5.children[0].userData.name = "Polaroid";
    polaroid5.children[1].userData.name = "Polaroid";
    polaroid5.children[0].userData.ogCol = polaroid5.children[0].material.color.getHex();
    polaroid5.children[1].userData.ogCol = polaroid5.children[0].material.color.getHex();

    //Add all polaroids to the scene
    scene.add(polaroid1);
    scene.add(polaroid2);
    scene.add(polaroid3);
    scene.add(polaroid4);
    scene.add(polaroid5);

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


//
//Mouse interaction
//
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

//When clicking on eligble mesh
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

        //Doesnt revert back to original color
        // intersects[0].object.material.color.set(0xffffff);

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
            case "Polaroid":
                location.href = '../../artprojects.html';
                break;
            case "Resume":
                location.href = '../../resume.html';
                break;
            case "CLA":
                location.href = '../../coursetaken.html';
                break;
        }
    }
});


//
//Post Processing
//

let composer = new EffectComposer( renderer );

const renderPass = new RenderPass( scene, camera);
composer.addPass(renderPass);

let outlinePass = new OutlinePass( new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
//Outline pass initialization
outlinePass.edgeStrength = 10;
outlinePass.edgeGlow = 1;
outlinePass.edgeThickness = 1;
outlinePass.visibleEdgeColor.set('#ffffff');
outlinePass.hiddenEdgeColor.set('#190a05');
composer.addPass(outlinePass);

let effectFXAA = new ShaderPass( FXAAShader );
effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight );
composer.addPass( effectFXAA );

renderer.domElement.style.touchAction = 'none';
renderer.domElement.addEventListener('pointermove', onPointerMove);

function onPointerMove( event ) {

    if ( event.isPrimary === false ) return;

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    checkIntersection();

}

function addSelectedObject( object ) {

    selectedObjects = [];
    selectedObjects.push( object );

}

function checkIntersection() {

    raycaster.setFromCamera( mouse, camera );

    const intersects = raycaster.intersectObject( scene, true );

    if ( intersects.length > 0 && intersects[0].object.userData.select) {

        let selectedObject = null;

        switch(intersects[0].object.userData.name)
        {
            case "Left Monitor":
                selectedObject = intersects[1].object;
                break;
            case "Right Monitor":
                selectedObject = intersects[1].object;
                break;
            case "Polaroid":
                selectedObject = intersects[0].object;
                break;
            case "Resume":
                selectedObject = intersects[0].object;
                break;
            case "CLA":
                selectedObject = intersects[0].object;
                break;
        }

        addSelectedObject( selectedObject );
        outlinePass.selectedObjects = selectedObjects;

    } else {

        outlinePass.selectedObjects = [];

    }

}

//Resizes window when window changes
window.onresize = function (e) {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
    effectFXAA.uniforms['resolution'].value.set(1/window.innerWidth, 1/window.innerHeight);
}


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
};


//Recursive function to repeatedly call and refresh the screen
function animate()
{
    requestAnimationFrame( animate );

    // controls.update();
    composer.render();

    // renderer.render( scene, camera );
}

animate();