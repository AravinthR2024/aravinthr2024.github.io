let sun;
let cam;

let sunTexture;
const textures = [];

function preload() {
  sunTexture = loadImage('data/Rithi_Papa.jpg');
  textures[0] = loadImage('data/With_My_Love_1.jpg');
  textures[1] = loadImage('data/With_My_Love_2.jpg');
  textures[2] = loadImage('data/With_My_Love_3.jpg');
  textures[3] = loadImage('data/With_My_Love_4.jpg');
  textures[4] = loadImage('data/With_My_Love_5.jpg');
  textures[5] = loadImage('data/With_My_Love_6.jpg');
  textures[6] = loadImage('data/With_My_Love_7.jpg');
}

function setup() {
  let canvas = createCanvas(windowWidth - 2, windowHeight - 2, WEBGL);
  // Disable the context menu on the canvas so the camera can use the right mouse button
  canvas.elt.oncontextmenu = () => false;

  cam = createEasyCam({ distance: 500 });

  sun = new Planet(50, 0, 0, sunTexture);
  sun.spawnMoons(7, 1);
}

function draw() {
  background("#182030");
  ambientLight(255, 255, 255);
  pointLight(255, 255, 255, 0, 0, 0);
  sun.show();
  sun.orbit();
}
