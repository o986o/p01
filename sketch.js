var posX, posy, direction;
var stepSize = 5;
var stepX = 80;
var stepY = 30;

// human readable direction
//번호는 순서의 의미를 가지고 있기 때문에 마음대로 바꿀 수 없다.
var NORTH = 0;
var EAST = 1;
var SOUTH = 2;
var WEST = 3;

function setup()
{
  createCanvas(1440, 720);

  background(255,255,0);

  posx = width/2;
  posy = height/2;
  stroke(255,0,0,100);
}


function draw(){

  stepX=max(mouseX,100); //두번째 방식
  stepY=max(mouseY,10);

  for(var y=0; y<height; y=y+stepY){ //아래로 향하는 바깥쪽 반복문 (수직)

      for(var x=0; x<width; x+=stepX){ //오른쪽으로 향하는 반복문 (수평)

        stroke(0,0,255);
        fill(x,height-y,1);
        //rect(도형의 위치x, 도형의 위치y, 도형의 크기x, 도형의 크기y)
        rect(x,y,stepX,stepY);
      }
  }
}
