var circleResolution, radius;
//centerpoint는 width와 height의 중간에 위치하게 할 것이기 때문에 변수 설정이 필요없음.

function setup(){
  createCanvas(1440, 710);

  noFill();
  background(255,0);
}

function draw()
{
  stroke(255,15);
  translate(width/2, height/2);

  //도형 닫기.
  circleResolution = Math.round(map(mouseY, 0,height, 3,24));

  radius = mouseX - width/2;
  var angle = TWO_PI / circleResolution;

  beginShape();
  for(var i=0; i<=circleResolution; i++) {
    var x = cos(angle*i) * radius;
    var y = sin(angle*i) * radius;
    stroke(angle,mouseX,mouseY);
    vertex(x,y);
  }
  endShape();
}
