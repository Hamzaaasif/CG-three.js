
// import * as Three from 'three'

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera

var prescamera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000 ); //3D 
prescamera.position.set(0,0,15,0);
prescamera.lookAt(new THREE.Vector3(0,0,0));

var orthocamera = new THREE.OrthographicCamera(-10 ,10 ,10 , -10 , 0.1 , 1000 );

//var camera = new THREE.OrthographicCamera(-5 ,5 ,-5 , 5 , 0.1 , 1000 ); //2D camera
orthocamera.position.z=4;
//orthocamera.position.set(0,10,0);
//orthocamera.lookAt(new THREE.Vector3(0,5,5));
//orthocamera.lookAt(new THREE.Vector3(0,8,-10));
//prescamera.position.z = 4;



//Transformation 
var transformation = function()
{
  var M1 = new THREE.Matrix4().makeTranslation(4,-6,0);  //
  var M2 = new THREE.Matrix4(); //scaling matrix
  var M3 = new THREE.Matrix4(); //shear

  var Sx = 2.0 / 3.0;
  var Sy = Math.sqrt(3)/2;
  var Sz = 1.0;

  M2.set(//scaling matrix
    Sx,0,0,0,
    0,Sy,0,0,
    0,0,Sz,0,
    0,0,0,1
  );

  var xshear = -1.0/Math.sqrt(3.0)
  var yshear =1;
  var zshear = 1;
  M3.set(
    1,xshear,     0,     0,
    0,yshear,     0,     0,
    0,0,       zshear,   0,
    0,0,            0 ,   1
  );

  var M = new THREE.Matrix4();
  M = M.multiply(M3).multiply(M2).multiply(M1);
  console.log("Resultant matrix:" , M);
  return M;
  
}

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

var size = 8 , step =1;

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


var geometrycube = new THREE.BoxGeometry(1 , 1 , 1);
var materialcube = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometrycube, materialcube );

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

var newTriangle = triangle.clone();
newTriangle.matrixAutoUpdate=false;
var color="#00FFFF";
newTriangle.material.color.setHex(color)
var trans =transformation();
newTriangle.applyMatrix(trans);
newTriangle.verticesNeedUpdate= true;
//prescamera.applyMatrix(trans);



//creating box
var geometryBox = new THREE.Geometry();
var materialbox = new THREE.LineBasicMaterial({color: 0x00ff00 , opacity: 0.2});
geometryBox.vertices.push(new THREE.Vector3(0,0,0));
geometryBox.vertices.push(new THREE.Vector3(0,4,0));
geometryBox.vertices.push(new THREE.Vector3(-6,4,0));
geometryBox.vertices.push(new THREE.Vector3(-6,0,0));

geometryBox.faces.push(new THREE.Face3(0,1,2));
geometryBox.faces.push(new THREE.Face3(0,2,3));
geometryBox.computeFaceNormals();
var boxpolygon = new THREE.Mesh(geometryBox , materialbox);
boxpolygon.position.set(0.0, 0.0, 0.0);

var newboxpolygon = boxpolygon.clone();
newboxpolygon.matrixAutoUpdate=false;
var color="#0x00ff00";
newboxpolygon.material.color.setHex(0x00ff00)
var trans =transformation();
newboxpolygon.applyMatrix(trans);
newboxpolygon.verticesNeedUpdate= true;


// Add cube to Scene
scene.add( line );
// scene.add( triangle );
// scene.add(newTriangle);
// scene.add(boxpolygon);
// scene.add(newboxpolygon);
scene.add(cube);

var axis = new THREE.Vector3(0,0,1);
axis.normalize();


// Render Loop
var render = function () {
  requestAnimationFrame( render );

    //line.rotation.x += 0.01;
   // cube.rotation.y += 0.01;
    //cube.rotation.z += 0.01;
    //orthocamera.translateZ(2);
  //camera.rotation.z = Math.PI/4;


  var i;
  for (i=0 ; i<10 ;i++)
  {
    // var newaxis = axis.clone();
    // newaxis.normalize();
    var newCube =cube.clone();
    newCube.rotation.z =  i*(360/10)*(Math.PI/180) ;
    //newCube.rotateOnAxis (axis,i*(360/10)*(Math.PI/180));
    newCube.translateY(3);
    newCube.scale.set(1,1,1);
    //newCube.rotation.z =  -i*(360/10)*(Math.PI/180) ;
   //newCube.rotateOnAxis (axis,i*(360/10)*(Math.PI/180));
    scene.add(newCube);
  }

  // Render the scene
  renderer.render(scene, prescamera);
};

render();