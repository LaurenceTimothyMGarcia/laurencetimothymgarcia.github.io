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

//Initial variables
//Rendering
let scene, camera, renderer;

//Post processing
let composer, effectFXAA, outlinePass;

//Mouse and raycaster
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

//Used for outline
let selectedObjects = [];


//
//Initialize scene
//
function init() {

    //
    //Set up SCENE, CAMERA, RENDERER
    //
    scene = new THREE.Scene();
    //Camera initialization
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

    //Layers System
    camera.layers.enable(0);
    camera.layers.disable(1);
    camera.layers.disable(2);
    camera.layers.disable(3);
    camera.layers.disable(4);
    camera.layers.disable(5);
    camera.layers.disable(6);


    //Loading Manager
    const loadingManager = new THREE.LoadingManager();

    const progressBarContainer = document.querySelector('.progress-bar-container');
    const progressBar = document.getElementById('progress-bar');

    loadingManager.onProgress = function(url, loaded, total)
    {
        progressBar.value = (loaded/total) * 100;
    }

    loadingManager.onLoad = function()
    {
        progressBarContainer.style.display = 'none';
    }

    //Loaders
    const modelLoader = new GLTFLoader(loadingManager);
    const fontLoader = new FontLoader(loadingManager);
    const ttfLoader = new TTFLoader(loadingManager);


    //Offsets camera
    camera.position.set(0, 3, 8);

    //Get direction of camera
    const camDirection = new THREE.Vector3();
    camera.getWorldDirection(camDirection);

    //Uses dom element canvas with bg
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#scene'),
    });

    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.physicallyCorrectLights = true;

    renderer.render(scene, camera);
    //END Set up

    
    //
    //Lighting SET UP
    //

    //Ambient Light
    const ambiLight = new THREE.AmbientLight(0xF5D9C8, 0.25);
    scene.add(ambiLight);

    //Directional Light 1
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.2);
    dirLight1.position.set(50, 100, 7.5);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    //Spot Light 1
    const spotLight1 = new THREE.SpotLight(0xffffff, 850, 0, Math.PI/3, 1);
    spotLight1.position.set(-5, 20, 7.5);
    spotLight1.castShadow = true;
    scene.add(spotLight1);

    //Spot Light 2
    const spotLight2 = new THREE.SpotLight(0xffffff, 500, 0, Math.PI/3, 1);
    spotLight2.position.set(2, 1, 20);
    spotLight2.castShadow = true;
    scene.add(spotLight2);

    //Point Light 1
    const pointLight1 = new THREE.PointLight(0xffffff, 0.5);
    pointLight1.position.set(0, 4, -3);
    pointLight1.castShadow = true;
    scene.add(pointLight1);

    //Point Light 2
    const pointLight2 = new THREE.PointLight(0x8700ff, 50);
    pointLight2.position.set(-3, 2, -3);
    pointLight2.castShadow = true;
    scene.add(pointLight2);

    //Point Light 3
    const pointLight3 = new THREE.PointLight(0x0000ff, 50);
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

        gltf.scene.children[0].material = new THREE.MeshPhongMaterial();
        gltf.scene.children[0].material.color.set(0x242322);
        gltf.scene.children[2].material = new THREE.MeshPhongMaterial();
        gltf.scene.children[2].material.color.set(0x242322);

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

        monitorL.children[0].castShadow = true;

        //Video texture for testing
        const progVid = document.getElementById("programVid");
        const vidTexture = new THREE.VideoTexture(progVid);
        vidTexture.minFilter = THREE.LinearFilter;
        vidTexture.magFilter = THREE.LinearFilter;

        const videoMat = new THREE.MeshBasicMaterial({
            map: vidTexture,
            side: THREE.FrontSide,
            toneMapped: false
        });

        //Monitor CHILD 1 on array is the material for the screen
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

        monitorR.children[0].castShadow = true;
        
        const gameVid = document.getElementById("gameVid");
        const vidTexture = new THREE.VideoTexture(gameVid);
        vidTexture.minFilter = THREE.LinearFilter;
        vidTexture.magFilter = THREE.LinearFilter;

        const videoMat = new THREE.MeshBasicMaterial({
            map: vidTexture,
            side: THREE.FrontSide,
            toneMapped: false
        });

        //Monitor CHILD 1 on array is the material for the screen
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

        const resumeImg = new THREE.TextureLoader().load("../../images/SoftEngScreenshot.png");
        const resumeMat = new THREE.MeshPhongMaterial( {map: resumeImg} );
        resume.material = resumeMat;

        scene.add(resume);

    }, undefined, function ( error ) {
        console.error( error );
    });

    //CLA
    modelLoader.load('../../models/CLA.gltf', function (gltf) {

        const cla = gltf.scene.children[0];

        cla.children[0].userData.select = true;
        cla.children[0].userData.name = "CLA";

        scene.add(cla);

    }, undefined, function ( error ) {
        console.error( error );
    });

    //Phone
    modelLoader.load('../../models/SmartPhone.gltf', function (gltf) {

        const phone = gltf.scene.children[0];

        phone.children[1].userData.select = true;
        phone.children[1].userData.name = "Phone";

        scene.add(phone);

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
        const image1 = new THREE.TextureLoader().load("../../images/artprojects/Landscapes/The Apocolypse Fixed.png");
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

        polaroid2.children[0].userData.select = true;
        polaroid2.children[1].userData.select = true;
        polaroid2.children[0].userData.name = "Polaroid";
        polaroid2.children[1].userData.name = "Polaroid";

        polaroid3.children[0].userData.select = true;
        polaroid3.children[1].userData.select = true;
        polaroid3.children[0].userData.name = "Polaroid";
        polaroid3.children[1].userData.name = "Polaroid";

        polaroid4.children[0].userData.select = true;
        polaroid4.children[1].userData.select = true;
        polaroid4.children[0].userData.name = "Polaroid";
        polaroid4.children[1].userData.name = "Polaroid";

        polaroid5.children[0].userData.select = true;
        polaroid5.children[1].userData.select = true;
        polaroid5.children[0].userData.name = "Polaroid";
        polaroid5.children[1].userData.name = "Polaroid";

        //Add all polaroids to the scene
        scene.add(polaroid1);
        scene.add(polaroid2);
        scene.add(polaroid3);
        scene.add(polaroid4);
        scene.add(polaroid5);

    }, undefined, function ( error ) {
        console.error( error );
    });

    //Text Loader
    ttfLoader.load('../../fonts/Comfortaa-Regular.ttf',(json) => {
            const comfortaaFont = fontLoader.parse(json);

            //Name
            const nameGeometry = new TextGeometry('Laurence Garcia', {
                font: comfortaaFont,
                size: 1, 
                height: 0.25
            });
            const nameMaterial = new THREE.MeshToonMaterial();
            nameMaterial.color.set(0xB6C3E3);
            const nameMesh = new THREE.Mesh(nameGeometry, nameMaterial);
            nameMesh.position.set(-6, 5.5, -1);
            scene.add(nameMesh);

            //Programming Projects
            const programmingGeo = new TextGeometry('Programming Portfolio', {
                font: comfortaaFont,
                size: 0.25, 
                height: 0.1
            });
            const programmingMat = new THREE.MeshToonMaterial();
            programmingMat.color.set(0xffffff);
            const programmingMesh = new THREE.Mesh(programmingGeo, programmingMat);
            programmingMesh.position.set(-4.55, 3.9, -2);
            programmingMesh.rotateY(0.18);
            programmingMesh.layers.set(1);
            scene.add(programmingMesh);

            //Game Projects
            const gameTextGeo = new TextGeometry('Game Dev Portfolio', {
                font: comfortaaFont,
                size: 0.25, 
                height: 0.1
            });
            const gameTextMat = new THREE.MeshToonMaterial();
            gameTextMat.color.set(0xffffff);
            const gameTextMesh = new THREE.Mesh(gameTextGeo, gameTextMat);
            gameTextMesh.position.set(0.85, 1.35, -1.531);
            gameTextMesh.rotateY(-0.36163222);
            gameTextMesh.layers.set(2);
            scene.add(gameTextMesh);


            //Art Portfolio
            const artTextGeo = new TextGeometry('Art Portfolio', {
                font: comfortaaFont,
                size: 0.35, 
                height: 0.1
            });
            const artTextMat = new THREE.MeshToonMaterial();
            artTextMat.color.set(0xffffff);
            const artTextMesh = new THREE.Mesh(artTextGeo, artTextMat);
            artTextMesh.position.set(-6, 1.5, -1.2);
            artTextMesh.rotateZ(1.5708);
            artTextMesh.rotateX(0.436332);
            artTextMesh.layers.set(3);
            scene.add(artTextMesh);


            //Resume
            const resumeTextGeo = new TextGeometry('Resume', {
                font: comfortaaFont,
                size: 0.25, 
                height: 0.1
            });
            const resumeTextMat = new THREE.MeshToonMaterial();
            resumeTextMat.color.set(0xffffff);
            const resumeTextMesh = new THREE.Mesh(resumeTextGeo, resumeTextMat);
            //Front
            resumeTextMesh.position.set(-0.85, 0.85, 2.5);
            //Back
            // resumeTextMesh.position.set(-0.85, 1.10, -1.5);
            resumeTextMesh.layers.set(4);
            scene.add(resumeTextMesh);


            //Relevant Courses
            const courseTextGeo = new TextGeometry('Relevant\nCourses', {
                font: comfortaaFont,
                size: 0.15, 
                height: 0.1
            });
            const courseTextMat = new THREE.MeshToonMaterial();
            courseTextMat.color.set(0xffffff);
            const courseTextMesh = new THREE.Mesh(courseTextGeo, courseTextMat);
            courseTextMesh.position.set(5, 3, 2);
            courseTextMesh.rotateZ(-1.5708);
            courseTextMesh.rotateX(0.436332);
            courseTextMesh.layers.set(5);
            scene.add(courseTextMesh);

            //Socials
            const socialsTextGeo = new TextGeometry('Socials', {
                font: comfortaaFont,
                size: 0.30, 
                height: 0.05
            });
            const socialsTextMat = new THREE.MeshToonMaterial();
            socialsTextMat.color.set(0xffffff);
            const socialsTextMesh = new THREE.Mesh(socialsTextGeo, socialsTextMat);
            socialsTextMesh.position.set(-3.35, 1, 1.75);
            socialsTextMesh.rotateY(1.2836897);
            socialsTextMesh.rotateX(-1.0472);
            socialsTextMesh.layers.set(6);
            scene.add(socialsTextMesh);
        }
    );

    //
    //Mouse interaction
    //
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
                case "Right Monitor":
                    location.href = '../../gameprojects.html';
                    break;
                case "Left Monitor":
                    location.href = '../../programmingprojects.html';
                    break;
                case "Polaroid":
                    location.href = '../../artprojects.html';
                    break;
                case "Resume":
                    // location.href = '../../resume.html';
                    overlayOn();
                    overlayDataOn("resume");
                    break;
                case "CLA":
                    // location.href = '../../coursetaken.html';
                    overlayOn();
                    overlayDataOn("course");
                    break;
                case "Phone":
                    //Overlay to socials here
                    overlayOn();
                    overlayDataOn("socials");
                    break;
            }
        }
    });


    //
    //Post Processing
    //
    composer = new EffectComposer( renderer );

    const renderPass = new RenderPass( scene, camera);
    composer.addPass(renderPass);

    outlinePass = new OutlinePass( new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
    //Outline pass initialization
    outlinePass.edgeStrength = 10;
    outlinePass.edgeGlow = 1;
    outlinePass.edgeThickness = 1;
    outlinePass.visibleEdgeColor.set('#ffffff');
    outlinePass.hiddenEdgeColor.set('#190a05');
    composer.addPass(outlinePass);

    effectFXAA = new ShaderPass( FXAAShader );
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

    let word = 1;
    function checkIntersection() {

        raycaster.setFromCamera( mouse, camera );

        const intersects = raycaster.intersectObject( scene, true );

        if ( intersects.length > 0 && intersects[0].object.userData.select) {

            let selectedObject = null;

            document.body.style.cursor = 'pointer';

            switch(intersects[0].object.userData.name)
            {
                case "Left Monitor":
                    selectedObject = intersects[1].object;
                    word = 1;
                    break;
                case "Right Monitor":
                    selectedObject = intersects[1].object;
                    word = 2;
                    break;
                case "Polaroid":
                    selectedObject = intersects[0].object;
                    word = 3;
                    break;
                case "Resume":
                    selectedObject = intersects[0].object;
                    word = 4;
                    break;
                case "CLA":
                    selectedObject = intersects[0].object;
                    word = 5;
                    break;
                case "Phone":
                    selectedObject = intersects[0].object;
                    word = 6;
                    break;
            }

            camera.layers.enable(word);

            addSelectedObject( selectedObject );
            outlinePass.selectedObjects = selectedObjects;

        } else {

            outlinePass.selectedObjects = [];
            document.body.style.cursor = 'default';

            camera.layers.disable(word);
        }
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



//
//Program Running
//
init();
animate();