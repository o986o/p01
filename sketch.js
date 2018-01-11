var img;
var line;

function preload() {
  img = loadImage('line.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);
}

function draw() {
  background(244, 248, 252);
  line(0, 0, windowWidth, mouseY*2);
  line(windowWidth, 0, 0, mouseY*2);
  line(0, 0, mouseX*2, windowHeight);
  line(mouseX*2, 0, 0, windowHeight);
  line(mouseX, 0, mouseX, windowHeight)

}
