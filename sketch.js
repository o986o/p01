var pg;
var value = 0;
var img1;
var gif;
var animated = false;


function preload() {
  img1 = loadImage("david ex.png");
  //gif = loadGif("david-ex.gif");

}


function setup(){
  createCanvas(1400, 700);
  pg = createGraphics(200, 130);
  gif = loadGif('david-ex.gif');

}

function draw(){
  fill(0, 0, 255);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);


  if (animated) {
    image(gif, 0, 0, 200, 500);
  } else {
    image(img1, 0, 0, 200, 500);
  }


  fill(200);
  rect(1200, 550, 200,130);
  var pgx = map(mouseX, 0, width, 0, 200) +1200;
  var pgy = map(mouseY, 0, height, 0, 130) +550;
  fill(255);
  ellipse(pgx, pgy, 5, 5);

}
//기술적인 부분 - 마우스를 클릭하지 않으면 animated는 값을 불러오지 않음.
function mouseClicked() {

  if (animated) {
    animated = false;
    gif.pause();
  } else {
    animated = true;
    gif.play();
    console.log("play gif");
  }
}
