var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
//  createSprite(400, 200, 50, 50);
fixedRect=createSprite(600,400,50,80);
fixedRect.shapeColor="green";
movingRect=createSprite(400,200,80,30);
movingRect.shapeColor="green";
movingRect.debug=true;

}

function draw() {
  background(100,200,240);
  movingRect.x=World.mouseX  ;
  movingRect.y=World.mouseY;
    console.log(movingRect.width/2+fixedRect.width/2);
    console.log(movingRect.height/2+fixedRect.height/2);

    if (movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
      && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
      && movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
      && fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2){
      
      movingRect.shapeColor="blue";
      fixedRect.shapeColor="blue";

    }
    else {
      movingRect.shapeColor="green";
      fixedRect.shapeColor="green";
    }

  drawSprites();
}