// import {
//   Scene,
//   Color,
//   PerspectiveCamera,
//   BoxBufferGeometry,
//   MeshStandardMaterial,
//   Mesh,
//   WebGLRenderer,
//   DirectionalLight,
//   HemisphereLight,
//   AmbientLight,
//   TextureLoader,
//   sRGBEncoding
// } from "three";

// function init() {
//   // canvas = document.createElement( 'canvas' );
//   // const canvas2 = new fabric.Canvas(app.querySelector("canvas"), {
//   //   centeredScaling: true
//   // });
//   ctx = canvas.getContext("2d");

//   renderer = new THREE.WebGLRenderer();
//   renderer.setSize(innerWidth, innerHeight);

//   texture = new THREE.Texture(canvas);
//   camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
//   scene = new THREE.Scene();

//   scene.add(
//     new THREE.Mesh(
//       new THREE.PlaneBufferGeometry(2, 2),
//       new THREE.MeshBasicMaterial({ map: texture })
//     )
//   );

//   document.body.appendChild(renderer.domElement);
// }
// function animate() {
//   var innerWidth = 500;
//   var innerHeight = 350;
//   // Always update your renderer size.
//   // This might be better off in the window.onresize event.
//   renderer.setSize(innerWidth, innerHeight);

//   // This will clear all draw data from your canvas, so we can draw on an empty canvas
//   canvas.width = 500;
//   canvas.height = 350;

//   ctx.save();
//   // Move the origin to the center of the canvas
//   ctx.translate(canvas.width / 2, canvas.height / 2);
//   // Scale the canvas like you did, except we know the size as we just set it.
//   ctx.scale(1, innerWidth / innerHeight);
//   ctx.fillStyle = "#FF0000";
//   // Draw the rectangle as if you want its center at the origin
//   ctx.fillRect(-25, -25, 50, 50);
//   ctx.restore();

//   texture.needsUpdate = true;
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

// // I have removed some of the globals we don't need
// // as the animate() function only needs access to some.
// // I mostly do this because it clarifies what the functions share of resources.

// var renderer, scene, camera, texture, ctx;

// init();
// animate();
