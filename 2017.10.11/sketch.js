function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0, 0, 255);
    noStroke();
    rectMode(CENTER)
  }

function draw() {
  fill(255, 0, 0);
  ellipse(random(width), random(height), 5, 5);

  fill(0, 255, 0);
  rect(random(width), random(height), 3, 3);
}
