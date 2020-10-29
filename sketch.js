var sword, fruit, r, monster;

var sword_Image, fruit1, fruit2, fruit3, fruit4, monster_Image; 

var fruitGroup, monsterGroup;

var PLAY=1, END=0, gameState = 1;
    
var score;    

function preload(){
  
   sword_Image = loadImage("sword.png");
   fruit1 = loadImage("fruit1.png");
   fruit2 = loadImage("fruit2.png");
   fruit3 = loadImage("fruit3.png");
   fruit4 = loadImage("fruit4.png");
  
   monster_Image = loadAnimation("alien1.png", "alien2.png");
}

function setup(){
  createCanvas(600, 600);
  
  //creating sword sprite
  sword = createSprite(100,100, 20, 20);
  sword.addImage(sword_Image);
  sword.scale = 0.7;
  
  fruitGroup = createGroup();
  monsterGroup = createGroup();
  
  score = 0;
}

function draw(){

   background("lightblue");
  
  //displaying score
  text("Score: "+ score, 500,50);
   

  
  if(gameState === PLAY){
     fruits();
     enemy();
    sword.y = World.mouseY
    sword.x = World.mouseX
     if(sword.isTouching(fruitGroup)){
      fruitGroup.destroyEach(); 
       score=score+2;
    }
      if(sword.isTouching(monsterGroup)){
      monsterGroup.destroyEach();
      gameState === END;
     }
  }
  
  drawSprites();
}

function fruits(){
  if(frameCount%30===0){
    fruit = createSprite(600, 200, 20, 20);
    fruit.scale = 0.2;
    r = Math.round(random(1,4));
    if(r===1){
      fruit.addImage(fruit1);
    }else if(r===2){
       fruit.addImage(fruit2);
    }else if(r===3){
       fruit.addImage(fruit3);
    }else{
       fruit.addImage(fruit4);
    } 
    fruit.y = Math.round(random(50, 350));
    fruit.velocityX = -15;
    fruit.lifetime = 100;
    fruitGroup.add(fruit);
  }
}
function enemy(){
  if(frameCount%100===0){
    monster = createSprite(600, 100, 40, 40);
    monster.addAnimation("moving", monster_Image);
    monster.y = Math.round(random(100, 500));
    monster.velocityX = -12;
    monster.lifetime = 100;
    monsterGroup.add(monster);
    
}
}