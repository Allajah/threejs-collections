require('../styles/main.scss');
import * as THREE from 'three';
const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshLambertMaterial(
    {
      color: 0x2a98c5
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 100;

    var light = new THREE.PointLight(0xFFFFFF);
    light.position.set(100, 100, 100);
    scene.add( light );

    function render() {
      requestAnimationFrame(render);
      cube.rotation.x += 0.05;
      cube.rotation.y += 0.05;
      cube.rotation.z += 0.05;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    }
    render();

