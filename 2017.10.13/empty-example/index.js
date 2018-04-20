var gridcounty = 10;

  function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0, 0, 255);
    noStroke();
    rectMode(CENTER)
  }

function draw() {
  noStroke();

  for(var x=0; x<gridcountx; x=x+1){
    console.log(x)
  }
}
