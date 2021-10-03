var backgroundImage;
var dummy
var lightImage;
var p1leftImage;
var p1rightImage;
var p2leftImage;
var p2rightImage;
var p1;
var p2;
var b1,b2;
var d1=1;
var d2=1;
function preload(){
  backgroundImage=loadImage("images/background.jpg")
  lightImage=loadImage("images/ligth orignal-modified.png")
p2leftImage=loadImage("images/p1 right.png")
p1rightImage=loadImage("images/p1left.png")

}

function setup() {
  createCanvas(displayWidth-160,displayHeight-189);
  p2=createSprite(1260,200, 50, 50);
  p2.addImage(p1rightImage);
  p1=createSprite(100,200,30,30);
  p1.addImage(p2leftImage)
  
  b1=createSprite(200,p1.y-27)
  b1.addImage(lightImage)
  b1.scale=0.3


  b2=createSprite(1200,p2.y-27)
  b2.addImage(lightImage)
  b2.scale=0.3
}

function draw() {
  background(backgroundImage);  
 
  if(keyDown("W")){
    p1.y=p1.y-10;
  }
  if(keyDown("S")){
    p1.y=p1.y+10;
  }
  
  if(keyDown("UP_ARROW")){
    p2.y=p2.y-10;
  }
  if(keyDown("DOWN_ARROW")){
    p2.y=p2.y+10;
  }
 if(b1.isTouching(p1)){
   d1++
 }
 
console.log(d1)  
  drawSprites();
}

function bullet(b,v){
  
  b.velocityX=v;
b.lifetime = 300
}
function keyPressed(){
  if(keyDown("D")){
    bullet(b1,9)
  }
  else if(keyDown("LEFT_ARROW")){
    bullet(b2,-9);
  }
  
}




