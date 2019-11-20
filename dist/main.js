/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n// import * as Three from 'three'\r\n\r\n// ------------------------------------------------\r\n// BASIC SETUP\r\n// ------------------------------------------------\r\n\r\n// Create an empty scene\r\nvar scene = new THREE.Scene();\r\n\r\n// Create a basic perspective camera\r\n\r\nvar prescamera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000 ); //3D \r\nprescamera.position.set(0,0,15,0);\r\nprescamera.lookAt(new THREE.Vector3(0,0,0));\r\n\r\nvar orthocamera = new THREE.OrthographicCamera(-10 ,10 ,10 , -10 , 0.1 , 1000 );\r\n\r\n//var camera = new THREE.OrthographicCamera(-5 ,5 ,-5 , 5 , 0.1 , 1000 ); //2D camera\r\northocamera.position.z=4;\r\n//orthocamera.position.set(0,10,0);\r\n//orthocamera.lookAt(new THREE.Vector3(0,5,5));\r\n//orthocamera.lookAt(new THREE.Vector3(0,8,-10));\r\n//prescamera.position.z = 4;\r\n\r\n\r\n\r\n//Transformation \r\nvar transformation = function()\r\n{\r\n  var M1 = new THREE.Matrix4().makeTranslation(4,-6,0);  //\r\n  var M2 = new THREE.Matrix4(); //scaling matrix\r\n  var M3 = new THREE.Matrix4(); //shear\r\n\r\n  var Sx = 2.0 / 3.0;\r\n  var Sy = Math.sqrt(3)/2;\r\n  var Sz = 1.0;\r\n\r\n  M2.set(//scaling matrix\r\n    Sx,0,0,0,\r\n    0,Sy,0,0,\r\n    0,0,Sz,0,\r\n    0,0,0,1\r\n  );\r\n\r\n  var xshear = -1.0/Math.sqrt(3.0)\r\n  var yshear =1;\r\n  var zshear = 1;\r\n  M3.set(\r\n    1,xshear,     0,     0,\r\n    0,yshear,     0,     0,\r\n    0,0,       zshear,   0,\r\n    0,0,            0 ,   1\r\n  );\r\n\r\n  var M = new THREE.Matrix4();\r\n  M = M.multiply(M3).multiply(M2).multiply(M1);\r\n  console.log(\"Resultant matrix:\" , M);\r\n  return M;\r\n  \r\n}\r\n\r\n// Create a renderer with Antialiasing\r\nvar renderer = new THREE.WebGLRenderer({antialias:true});\r\n\r\n// Configure renderer clear color\r\nrenderer.setClearColor(\"#9C5444\");\r\n\r\n// Configure renderer size\r\nrenderer.setSize( window.innerWidth, window.innerHeight );\r\n\r\n// Append Renderer to DOM\r\ndocument.body.appendChild( renderer.domElement );\r\n\r\n// ------------------------------------------------\r\n// FUN STARTS HERE\r\n// ------------------------------------------------\r\n\r\n//create grid\r\n\r\nvar size = 8 , step =1;\r\n\r\n//for grid geometry\r\nvar geometrygrid = new THREE.Geometry();\r\nvar materialgrid = new THREE.LineBasicMaterial( {color: 0xccccc , opacity: 0.2});\r\n\r\nfor(var i=-size ; i<=size ; i+=step)\r\n{\r\n  console.log(\"X :\",size, \"Y: \",i);\r\n  geometrygrid.vertices.push(new THREE.Vector3(-size , i ,0 ));\r\n  geometrygrid.vertices.push(new THREE.Vector3(size , i ,0 ));\r\n   geometrygrid.vertices.push(new THREE.Vector3(i, -size  ,0 ));\r\n   geometrygrid.vertices.push(new THREE.Vector3(i, size, 0 ));\r\n}\r\n\r\nvar line = new THREE.LineSegments( geometrygrid, materialgrid );\r\n\r\n\r\n// Create a Cube Mesh with basic material\r\n\r\n\r\nvar geometrycube = new THREE.BoxGeometry(1 , 1 , 1);\r\nvar materialcube = new THREE.MeshBasicMaterial( { color: \"#433F81\" } );\r\nvar cube = new THREE.Mesh( geometrycube, materialcube );\r\n\r\n//for triangle geometry\r\nvar geometrytri = new THREE.Geometry();\r\nvar materialtri = new THREE.MeshBasicMaterial({color: \"#433F81\" , opacity: 0.2 });\r\n\r\ngeometrytri.vertices.push (new THREE.Vector3(-3 , 3, 0 ));\r\ngeometrytri.vertices.push (new THREE.Vector3(0 , 3, 0 ));\r\ngeometrytri.vertices.push (new THREE.Vector3(0 , 5, 0 ));\r\n\r\ngeometrytri.faces.push (new THREE.Face3(0 , 1, 2 ));\r\ngeometrytri.computeFaceNormals();\r\nvar triangle = new THREE.Mesh(geometrytri, materialtri);\r\n//triangle.position.set(0.0 , 0.0 , 0.0);\r\n\r\nvar newTriangle = triangle.clone();\r\nnewTriangle.matrixAutoUpdate=false;\r\nvar color=\"#00FFFF\";\r\nnewTriangle.material.color.setHex(color)\r\nvar trans =transformation();\r\nnewTriangle.applyMatrix(trans);\r\nnewTriangle.verticesNeedUpdate= true;\r\n//prescamera.applyMatrix(trans);\r\n\r\n\r\n\r\n//creating box\r\nvar geometryBox = new THREE.Geometry();\r\nvar materialbox = new THREE.LineBasicMaterial({color: 0x00ff00 , opacity: 0.2});\r\ngeometryBox.vertices.push(new THREE.Vector3(0,0,0));\r\ngeometryBox.vertices.push(new THREE.Vector3(0,4,0));\r\ngeometryBox.vertices.push(new THREE.Vector3(-6,4,0));\r\ngeometryBox.vertices.push(new THREE.Vector3(-6,0,0));\r\n\r\ngeometryBox.faces.push(new THREE.Face3(0,1,2));\r\ngeometryBox.faces.push(new THREE.Face3(0,2,3));\r\ngeometryBox.computeFaceNormals();\r\nvar boxpolygon = new THREE.Mesh(geometryBox , materialbox);\r\nboxpolygon.position.set(0.0, 0.0, 0.0);\r\n\r\nvar newboxpolygon = boxpolygon.clone();\r\nnewboxpolygon.matrixAutoUpdate=false;\r\nvar color=\"#0x00ff00\";\r\nnewboxpolygon.material.color.setHex(0x00ff00)\r\nvar trans =transformation();\r\nnewboxpolygon.applyMatrix(trans);\r\nnewboxpolygon.verticesNeedUpdate= true;\r\n\r\n\r\n// Add cube to Scene\r\nscene.add( line );\r\n// scene.add( triangle );\r\n// scene.add(newTriangle);\r\n// scene.add(boxpolygon);\r\n// scene.add(newboxpolygon);\r\nscene.add(cube);\r\n\r\nvar axis = new THREE.Vector3(0,0,1);\r\naxis.normalize();\r\n\r\n\r\n// Render Loop\r\nvar render = function () {\r\n  requestAnimationFrame( render );\r\n\r\n    //line.rotation.x += 0.01;\r\n   // cube.rotation.y += 0.01;\r\n    //cube.rotation.z += 0.01;\r\n    //orthocamera.translateZ(2);\r\n  //camera.rotation.z = Math.PI/4;\r\n\r\n\r\n  var i;\r\n  for (i=0 ; i<10 ;i++)\r\n  {\r\n    // var newaxis = axis.clone();\r\n    // newaxis.normalize();\r\n    var newCube =cube.clone();\r\n    newCube.rotation.z =  i*(360/10)*(Math.PI/180) ;\r\n    //newCube.rotateOnAxis (axis,i*(360/10)*(Math.PI/180));\r\n    newCube.translateY(3);\r\n    newCube.scale.set(1,1,1);\r\n    //newCube.rotation.z =  -i*(360/10)*(Math.PI/180) ;\r\n   //newCube.rotateOnAxis (axis,i*(360/10)*(Math.PI/180));\r\n    scene.add(newCube);\r\n  }\r\n\r\n  // Render the scene\r\n  renderer.render(scene, prescamera);\r\n};\r\n\r\nrender();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });