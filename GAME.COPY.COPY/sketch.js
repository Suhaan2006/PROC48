var player, playerimg;
var bg;
var rect1,rect1img;
var rect2,rect2img;
var rect3,rect3img;
var rect4,rect4img;
var rect5,rect5img;
var rect6,rect6img;
var rect7,rect7img;
var rect8,rect8img;
var rect9,rect9img;
var balloon1,balloon1img;
var balloon2,balloon2img;


function setup() {

  bg=loadImage("./assets/brickwall.png");

  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);


  

 
  //player
  playerimg=loadImage("./assets/clipart.png");
  player=createSprite(width-1111,height/2);
  player.addImage(playerimg)
  player.scale=0.3


  //***********rectangles and obstacles***********//
  
  //1st rect
  rect1img=loadImage("./assets/rect1new.png");
  rect1=createSprite(width-1111,height-720);
  rect1.addImage(rect1img);
  rect1.scale=0.6

  //2nd rect
  rect2=createSprite(width-777,height-720);
  rect2img=loadImage("./assets/rect1new.png");
  rect2.addImage(rect2img);
  rect2.scale=0.5

  //3rd rect
  rect3=createSprite(width-555,height-720);
  rect3img=loadImage("./assets/rectUPSIDEDOWN.png");
  rect3.addImage(rect2img);   
  rect3.scale=0.3

  //4th rect
  rect4=createSprite(width-333,height-720);
  rect4.addImage(rect2img);
  rect4.scale=0.4

  //5th rect
  rect5=createSprite(width-222,height-720);
  rect5.addImage(rect2img);
  rect5.scale=0.7


  //6th rect
  rect6=createSprite(width-1020,height-9)
  rect6.addImage(rect3img);
  
  
  //7th rect
  rect7=createSprite(width-818,height-9);
  rect7.addImage(rect3img);
  rect7.scale=0.9;


  //8th rect
  rect8=createSprite(width-555,height-9);
  rect8.addImage(rect3img);
  rect8.scale=1.1;


  //9th rect
  rect9=createSprite(width-333,height-9);
  rect9.addImage(rect3img);
  rect9.scale=0.9


  //balloons
  balloon1img=loadImage("./assets/balloons.png");
  balloon1=createSprite(player.x-40,player.y-40);
  balloon1.addImage(balloon1img);
  balloon1.scale=0.15

  balloon2img=loadImage("./assets/balloons3.png");
  


  


}

function draw() {
  //background(255,199,0);

  
  
  background(bg);

  // moving the obstacles
  rect1.velocityX=-3
  if(rect1.x<0) {
    rect1.x=width-177
  }

  rect2.velocityX=-2
  if(rect2.x<0) {
    rect2.x=width-177
  }

  rect3.velocityX=-1
  if(rect3.x<0) {
    rect3.x=width-177
  }

  rect4.velocityX=-2.1
  if(rect4.x<0) {
    rect4.x=width-177
  }

  rect5.velocityX=-2.2
  if(rect5.x<0) {
    rect5.x=width-177
  }

  rect6.velocityX=-3
  if(rect6.x<0) {
    rect6.x=width-177
  }

  rect7.velocityX=-2
  if(rect7.x<0) {
    rect7.x=width-177
  }

  rect8.velocityX=-1.9
  if(rect8.x<0) {
    rect8.x=width-177
  }
  
  rect9.velocityX=-2.2
  if(rect9.x<0) {
    rect9.x=width-177
  }


    //movement
    if(keyDown(UP_ARROW)) {
      balloon2=createSprite(balloon1.x-10,balloon1.y-10);
      balloon2.addImage(balloon2img);
      balloon2.scale=0.5;
      player.velocityY=-0.5;
      balloon1.velocityY=-0.5;
      balloon2.velocityY=-0.5;
  
    }

    if(keyDown(DOWN_ARROW)) {
      //balloon2=createSprite(balloon1.x-10,balloon1.y-10);
      //balloon2.destroy();
      player.velocityY=+0.5;
      balloon1.velocityY=+0.5;
      

    }


    if(player.isTouching(rect1)) {

      player.velocityY=0;

      rect1.velocityX=0;
      rect2.velocityX=0;
      rect3.velocityX=0;
      rect4.velocityX=0;
      rect5.velocityX=0;
      rect6.velocityX=0;
      rect7.velocityX=0;
      rect8.velocityX=0;
      rect9.velocityX=0;

      balloon2.velocityY=0;


    }



  drawSprites();
}