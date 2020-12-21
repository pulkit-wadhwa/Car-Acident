var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(800,200,80,20);
  movingRect.shapeColor='blue';
  fixedRect.shapeColor='blue';
}

function draw() {
  background(255,255,255);  
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor='red';
  fixedRect.shapeColor='red';
}
else{
  movingRect.shapeColor='blue';
  fixedRect.shapeColor='blue';
}

  drawSprites();
}