const heart = [];
const totalFrames = 240;
let counter = 0;
let bgImage;

function preload()
{
  bgImage = loadImage("images/Background.jpg");
}

function setup() {
  createCanvas(windowWidth - 2, windowHeight - 2);
}

function draw() {
  const percent = float(counter % totalFrames) / totalFrames;
  render(percent);
  fill(255);
  noStroke();
  textSize(32);
  textAlign(CENTER);
  textFont("Brush Script MT");
  text("Happy Birthday enoda\nore uyir thozhi\n💖💖💖💖💖💖💖💖💖💖\n\n" + 
    "என் அன்பு தோழிக்கு\nஇனிய பிறந்தநாள் வாழ்த்துக்கள்\n💕💕💕💕💕💕💕💕💕", 0, -50);
  counter++;
}

function render(percent) {
  background(bgImage);
  translate(width/2, height/2);
  stroke(255, 0, 0);
  strokeWeight(4);
  fill(150, 0, 20);
  beginShape();
  for (let v of heart) {
    const a = map(percent, 0, 1, 0, TWO_PI*2);
    const r = map(sin(a), -1, 1, height/80, height/40);
    vertex(r * v.x, r * v.y);
  }
  endShape();

  if (percent < 0.5) {
    const a = map(percent, 0, 0.5, 0, TWO_PI);
    const x = 16 * pow(sin(a), 3);
    const y = -(13 * cos(a) - 5*cos(2*a) - 2*cos(3*a)- cos(4*a));
    heart.push(createVector(x, y));
  } else {
    heart.splice(0, 1);
  }
}