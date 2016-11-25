var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material); // this is an instance of Object3D.
                                               // It has a matrix which stores its position/rotation/scale.

scene.add(cube);

camera.position.z = 5;

function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube.position.x += 0.01;
  if (cube.position.x > 3) {
    cube.position.x = -2;
  }
  renderer.render(scene, camera);
}
render();
