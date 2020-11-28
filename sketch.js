var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "red"
  fixedRect.velocityY = +5


  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "red"
  movingRect.velocityY = -5
}



function draw() {
  background(255,255,255);
  

  
  bounceOff(fixedRect,movingRect);
  drawSprites();
}

function bounceOff(oc1, oc2) {

  if (oc1.x - oc2.x<oc2.width/2+oc1.width/2 &&
    oc2.x - oc1.x<oc2.width/2+oc1.width/2 
    ) {

      oc2.velocityX = oc2.velocityX * (-1)
      oc1.velocityX = oc1.velocityX * (-1)
  
}

if(oc2.y - oc1.y<oc2.width/2+oc1.width/2 &&
  oc1.y - oc2.y<oc2.width/2+oc1.width/2) {

    oc2.velocityY = oc2.velocityY * (-1)
  oc1.velocityY = oc1.velocityY * (-1)


}



}