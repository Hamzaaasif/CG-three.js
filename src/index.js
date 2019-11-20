// import * as Three from 'three'

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera

var prescamera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000 ); //3D 
prescamera.position.set(0,8,5);
prescamera.lookAt(new THREE.Vector3(0,0,5));

var orthocamera = new THREE.OrthographicCamera(-10 ,10 ,10 , -10 , 0.1 , 1000 );

//var camera = new THREE.OrthographicCamera(-5 ,5 ,-5 , 5 , 0.1 , 1000 ); //2D camera
orthocamera.position.z=4;
//orthocamera.position.set(0,10,0);
//orthocamera.lookAt(new THREE.Vector3(0,5,5));
//orthocamera.lookAt(new THREE.Vector3(0,8,-10));
//prescamera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#9C5444");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

//create grid

var size = 4 , step =1;

//for grid geometry
var geometrygrid = new THREE.Geometry();
var materialgrid = new THREE.LineBasicMaterial( {color: 0xccccc , opacity: 0.2});

for(var i=-size ; i<=size ; i+=step)
{
  console.log("X :",size, "Y: ",i);
  geometrygrid.vertices.push(new THREE.Vector3(-size , i ,0 ));
  geometrygrid.vertices.push(new THREE.Vector3(size , i ,0 ));
   geometrygrid.vertices.push(new THREE.Vector3(i, -size  ,0 ));
   geometrygrid.vertices.push(new THREE.Vector3(i, size, 0 ));
}

var line = new THREE.LineSegments( geometrygrid, materialgrid );


// Create a Cube Mesh with basic material


// var geometrycube = new THREE.BoxGeometry(1 , 1 , 1);
// var materialcube = new THREE.MeshBasicMaterial( { color: "#433F81" } );
// var cube = new THREE.Mesh( geometrycube, materialcube );

//for triangle geometry
var geometrytri = new THREE.Geometry();
var materialtri = new THREE.MeshBasicMaterial({color: "#433F81" , opacity: 0.2 });

geometrytri.vertices.push (new THREE.Vector3(-3 , 3, 0 ));
geometrytri.vertices.push (new THREE.Vector3(0 , 3, 0 ));
geometrytri.vertices.push (new THREE.Vector3(0 , 5, 0 ));

geometrytri.faces.push (new THREE.Face3(0 , 1, 2 ));
geometrytri.computeFaceNormals();
var triangle = new THREE.Mesh(geometrytri, materialtri);
//triangle.position.set(0.0 , 0.0 , 0.0);


// Add cube to Scene
scene.add( line );
scene.add( triangle );
//scene.add(cube);

// Render Loop
var render = function () {
  requestAnimationFrame( render );

    //line.rotation.x += 0.01;
   // cube.rotation.y += 0.01;
    //cube.rotation.z += 0.01;
    //orthocamera.translateZ(2);
  //camera.rotation.z = Math.PI/4;


  // var i;
  // for (i=0 ; i<10 ;i++)
  // {
  //   var newCube =cube.clone();
  //   newCube.rotation.z = i*(360/10)*(Math.PI/180);
  //   newCube.translateY(2.0);
  //   scene.add(newCube);
  // }

  // Render the scene
  renderer.render(scene, orthocamera);
};

render();