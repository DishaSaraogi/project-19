var banana,bananaimage,bananaGroup
var monkey,monkeymoving
var backgroud,backgroundimage
var stoneimage,stoneGroup
var score = 0





function preload(){
bananaimage = loadImage("banana.png");
monkeymoving = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  backgroundimage = loadImage("jungle.jpg");
  
  stoneimage = loadImage ("stone.png");
}


function setup() {
  createCanvas(400, 400);
  
  //createing background sprite
  backgroud = createSprite (200,200,400,400);
  backgroud.addImage("backgroundmoving",backgroundimage);
  backgroud.velocityX = -4;
  backgroud.x = backgroud.width/2;
  
  monkey = createSprite (50,380,10,10);
  monkey.addAnimation("monkey",monkeymoving);
  monkey.scale = 0.1
  
  bananaGroup= new Group();
  stoneGroup= new Group();
}
  
 



function draw() {
  background(220);
  edges = createEdgeSprites()
  
  if (backgroud.x <0 ){
      backgroud.x = backgroud.width/2;
      }
  
  if(keyDown("space")){
     monkey.velocityY=-10
     
}
  
  monkey.velocityY = monkey.velocityY +0.8
  if (stoneGroup.isTouching(monkey)){
      monkey.scale=0.07
}
  if (bananaGroup.isTouching(monkey)){
      score = score+1
  }
  
  monkey.collide(edges[3]);
  
  switch(score){
    case 10: monkey.scale=0.12;
      break;
      case 20: monkey.scale=0.14;
      break;
      case 30: monkey.scale=0.16;
      break;
      case 40: monkey.scale=0.18;
      break;
      default:
      break; }
         
         
         
         
  
  
  
  spawnfruits();
  spawnstones();
  
  drawSprites();
  
  
  stroke ("white");
  textSize(20);
  fill("white");
  text("Score: "+score,300,50);
}




function spawnfruits() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(200,250));
    banana.addImage(bananaimage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
   
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}



function spawnstones() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var stone = createSprite(400,380,40,10);
    stone.addImage(stoneimage);
    stone.scale = 0.1;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
    stone.lifetime = 200;
    
   
    
    //add each cloud to the group
    stoneGroup.add(stone);
  }
  
}