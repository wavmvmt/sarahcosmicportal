
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(0, 0, 0);
scene.add(light);

// Sun (simple sphere for now)
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Load GLBs
const loader = new THREE.GLTFLoader();
const planets = [
  { name: "Mercury", url: "https://drive.google.com/uc?export=download&id=1NrXzQbVJfFJ_JD5enBB4TqRAAhNY03xI", x: 5 },
  { name: "Venus", url: "https://drive.google.com/uc?export=download&id=1w7QHJkA2WalkKE-NrTCjbKurJ7X6SPm7", x: 8 },
  { name: "Earth", url: "https://drive.google.com/uc?export=download&id=1oUFHuRr14m-ge-c8lGpSdTMLridKTn75", x: 11 },
  { name: "Mars", url: "https://drive.google.com/uc?export=download&id=1ZrIg2z0kqtMTsQh9HhwK2_sHHJA7FNdw", x: 14 },
  { name: "Jupiter", url: "https://drive.google.com/uc?export=download&id=18yi2IGd2XnDHBILO3X6At4FNsL7nHarh", x: 17 },
  { name: "Saturn", url: "https://drive.google.com/uc?export=download&id=1WnkTUL9bZ-xWPeZukysilHs892cCu_71", x: 20 },
  { name: "Uranus", url: "https://drive.google.com/uc?export=download&id=1Hj5NJT-4jMcT_TAnA8R6wDiElK-GdoTD", x: 23 },
  { name: "Neptune", url: "https://drive.google.com/uc?export=download&id=1UMbDy4Xr-kqzTi2areW48mcTdq4NJ3mO", x: 26 },
  { name: "Pluto", url: "https://drive.google.com/uc?export=download&id=1m6cssy3NGndL3ne7ceXQQOKLfWqoP5N-", x: 29 },
  { name: "Moon", url: "https://drive.google.com/uc?export=download&id=1x0478JIeVCxbHaZ6QhySe_QrI_VH1fTI", x: 13 },
  { name: "Blackhole", url: "https://drive.google.com/uc?export=download&id=19Bik9HvxMwBUEmuhWk5XIiqwxMlELVf5", x: 35 },
];

planets.forEach(planet => {
  loader.load(planet.url, function(gltf) {
    const obj = gltf.scene;
    obj.position.x = planet.x;
    obj.scale.set(0.5, 0.5, 0.5);
    scene.add(obj);
  }, undefined, function(error) {
    console.error(`Failed to load ${planet.name}:`, error);
  });
});

camera.position.z = 40;

function animate() {
  requestAnimationFrame(animate);
  sun.rotation.y += 0.001;
  renderer.render(scene, camera);
}
animate();
