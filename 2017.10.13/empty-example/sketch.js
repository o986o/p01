var gridcountx = 5;
var gridcounty = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke(0);
}

function draw(){
gridcountx = map(mouseX, 0, width, 1200, 300);
fill(255);


for(var x=0; x<gridcountx; x++){
  for(var y=0; y<gridcounty; y++) {
    //transfer from gridspace to screenspace
    var cellWidth = width/gridcountx;
    var posx =x* cellWidth;
    var cellHeight = height/gridcounty;
    var posy =y*cellHeight;

    rect(posx,posy, cellWidth, cellHeight);
  }
}
}
