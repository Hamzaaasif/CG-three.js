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

eval("// import * as Three from 'three'\r\n\r\n// ------------------------------------------------\r\n// BASIC SETUP\r\n// ------------------------------------------------\r\n\r\n// Create an empty scene\r\nvar scene = new THREE.Scene();\r\n\r\n// Create a basic perspective camera\r\n\r\nvar prescamera = new THREE.PerspectiveCamera(-10 ,10 ,-10 , 10 , 0.1 , 1000 ); //3D camera\r\nvar orthocamera = new THREE.OrthographicCamera(-10 ,10 ,-10 , 10 , 0.1 , 1000 );\r\n//var camera = new THREE.OrthographicCamera(-5 ,5 ,-5 , 5 , 0.1 , 1000 ); //2D camera\r\northocamera.position.z = 4;\r\nprescamera.position.z = 4;\r\n\r\n// Create a renderer with Antialiasing\r\nvar renderer = new THREE.WebGLRenderer({antialias:true});\r\n\r\n// Configure renderer clear color\r\nrenderer.setClearColor(\"#9C5444\");\r\n\r\n// Configure renderer size\r\nrenderer.setSize( window.innerWidth, window.innerHeight );\r\n\r\n// Append Renderer to DOM\r\ndocument.body.appendChild( renderer.domElement );\r\n\r\n// ------------------------------------------------\r\n// FUN STARTS HERE\r\n// ------------------------------------------------\r\n\r\n//create grid\r\n\r\nvar size = 4 , step =1;\r\n\r\n//for grid geometry\r\nvar geometrygrid = new THREE.Geometry();\r\nvar materialgrid = new THREE.LineBasicMaterial( {color: 0xccccc , opacity: 0.2});\r\n\r\nfor(var i=-size ; i<=size ; i+=step)\r\n{\r\n  console.log(\"X :\",size, \"Y: \",i);\r\n  geometrygrid.vertices.push(new THREE.Vector3(-size , i ,0 ));\r\n  geometrygrid.vertices.push(new THREE.Vector3(size , i ,0 ));\r\n   geometrygrid.vertices.push(new THREE.Vector3(i, -size  ,0 ));\r\n   geometrygrid.vertices.push(new THREE.Vector3(i, size , 0 ));\r\n}\r\n\r\nvar line = new THREE.LineSegments( geometrygrid, materialgrid );\r\n\r\n\r\n// Create a Cube Mesh with basic material\r\n\r\n\r\n// var geometrycube = new THREE.BoxGeometry(1 , 1 , 1);\r\n// var materialcube = new THREE.MeshBasicMaterial( { color: \"#433F81\" } );\r\n// var cube = new THREE.Mesh( geometrycube, materialcube );\r\n\r\n//for triangle geometry\r\nvar geometrytri = new THREE.Geometry();\r\nvar materialtri = new THREE.MeshBasicMaterial({color: \"#433F81\" , opacity: 0.2 });\r\n\r\ngeometrytri.vertices.push (new THREE.Vector3(-2 , 0, 0 ));\r\ngeometrytri.vertices.push (new THREE.Vector3(0 , 0, 0 ));\r\ngeometrytri.vertices.push (new THREE.Vector3(0 , 2, 0 ));\r\n\r\ngeometrytri.faces.push (new THREE.Face3(0 , 2, 1 ));\r\ngeometrytri.computeFaceNormals();\r\nvar triangle = new THREE.Mesh(geometrytri, materialtri);\r\ntriangle.position.set(0.0 , 0.0 , 0.0);\r\n\r\n\r\n// Add cube to Scene\r\nscene.add( line );\r\nscene.add( triangle );\r\n//scene.add(cube);\r\n\r\n// Render Loop\r\nvar render = function () {\r\n  requestAnimationFrame( render );\r\n\r\n    //line.rotation.x += 0.01;\r\n   // cube.rotation.y += 0.01;\r\n    //cube.rotation.z += 0.01;\r\n    //orthocamera.translateZ(2);\r\n  //camera.rotation.z = Math.PI/4;\r\n\r\n\r\n  // var i;\r\n  // for (i=0 ; i<10 ;i++)\r\n  // {\r\n  //   var newCube =cube.clone();\r\n  //   newCube.rotation.z = i*(360/10)*(Math.PI/180);\r\n  //   newCube.translateY(2.0);\r\n  //   scene.add(newCube);\r\n  // }\r\n\r\n  // Render the scene\r\n  renderer.render(scene, orthocamera);\r\n};\r\n\r\nrender();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });