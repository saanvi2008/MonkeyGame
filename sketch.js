
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, ground;
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
   
  score = 0;
}


function draw() {
background(245,245,245);
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  score = score + Math.round(getFrameRate()/60)
    console.log(getFrameRate())
  
  monkey.collide(ground);
  
  food();
  obstacles();
drawSprites(); 
textSize(15);
stroke("black");
text("Survival Time :" + score, 115,20);
}


function food() {
  if(frameCount % 80 === 0){
    var banana = createSprite(400,400,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.setLifetime = 150;
    foodGroup.add(banana);
  }
}

function obstacles (){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,400,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6; 
    obstacle.y = Math.round(random(100,16));
    obstacleGroup.add(obstacle);
  }
}






