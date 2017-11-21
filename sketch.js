var pg;

function setup(){
  createCanvas(1440, 80);
  background(100,0);
  pg = createGraphics(200, 130);
}

function draw(){
  fill(255, 30);
  rect(0, 0, width, height);
  fill(0, 0, 255);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);

  pg.background(0.1);
  pg.noFill(0);
  pg.stroke(255);
  var pgx = map(mouseX, 0, width, 0,200) + 1200;
  var pgy = map(mouseY, 0, width, 0,130) + 550;
  console.log(pgx);
  pg.ellipse(pgx, pgy, 5, 5);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 1200, 550);
}
