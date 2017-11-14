var segmentcount = 3;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB, 360, width, height); //360은 범위이다 0부터 360으로 색깔을 설정하겠다는 이야기이다.
  background(800);//위에 있는 hsb시스템으로 배경색이 지정된다.
  }

function draw(){
  noStroke();
   //calculate angular in circle and radius
   var anglestep = 360/segmentcount;
   var radiusx = 350;
   var radiusy = 350;

   //draw Form = TriangleFan
   beginShape(TRIANGLE_FAN);
   vertex(width/2, height/2);
   for(var angle=0; angle<=360; angle+=anglestep) { //+= angle = angle+anglestep
      //console.log("loop"+angle)
      //calculate xy position in radian measure
      var vx = width/2 + cos(radians(angle)) * radiusx; //위치 + 측정 * 그리는
      var vy = height/2 + sin(radians(angle)) * radiusy;
      //console.log("loop: x" + vx + "// y =" + vy); // 더이상 command가 필요없다면 남겨두지 말 것. 퍼포먼스하는데 많은 메모리를 소모하기 때문이다.
      vertex(vx, vy);
      fill(angle, mouseX, mouseY);// $$angle은 색깔 범위의 역할을 하고 있다. x:채도 y:명도
   }
   endShape();
  }



function keyReleased() {
  if (key == 1) {
    segmentcount = 4;
    console.log("value 0")
  }
  if (key == 2) {
    segmentcount = 8;
  }
  if (key == 3) {
    segmentcount = 24;
  }
  if (key == 4) {
    segmentcount = 36;
  }
  if (key == 5) {
    segmentcount = 48;
  }
  if (key == 6) {
    segmentcount = 126;
  }
  if (key == 7) {
    segmentcount = 250;
  }

  else {
    console.log("value 0")
  }
  return false; // prevent any default behavior
}
