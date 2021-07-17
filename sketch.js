
var boy,boyImage
var path,pathImage
var coins,coinImage



function preload(){
  //pre-load images
  pathImage= loadImage("path.png");
 boyImage= loadAnimation("Runner-1.png","Runner-2.png");
 coinImage= loadImage("coin.png");


}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path= createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY=4
  boy= createSprite(290,370,10,20);
  boy.addAnimation("running",boyImage);
  boy.scale= 0.07
  coins= createSprite(290,200,10,20);
  coins.addAnimation("coin_run",coinImage);
  coins.scale= 0.5
  coins.velocityY=4
  


}

function draw() {
  background(0);
  boy.x= World.mouseX;
drawSprites();
 if(path.y>400){
   path.y= path.height/4
  }
  console.log(path.height);
}
