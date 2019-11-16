// import * as Three from 'three'

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); //3D camera
//var camera = new THREE.OrthographicCamera(-5 ,5 ,-5 , 5 , 0.1 , 1000 );
//var camera = new THREE.OrthographicCamera(-5 ,5 ,-5 , 5 , 0.1 , 1000 ); //2D camera
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

// Add cube to Scene
scene.add( cube );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

   // cube.rotation.x += 0.01;
   // cube.rotation.y += 0.01;
    //cube.rotation.z += 0.01;
  //camera.translateX(.02);
  //camera.rotation.z = Math.PI/4;


  var i;
  for (i=0 ; i<10 ;i++)
  {
    var newCube =cube.clone();
    newCube.rotation.z = i*(360/10)*(Math.PI/180);
    newCube.translateY(2.0);
    scene.add(newCube);
  }

  // Render the scene
  renderer.render(scene, camera);
};

render();