/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;*/
var bg,bgImg;
var player, shooterImg, shooter_shooting;
var ground1a;
var ground2a, ground2b;
var ground3a, ground3b, ground3c;
var ground4a, ground4b, ground4c, ground4d;
var rata;

function preload(){
  //imagen del jugador
  hero = loadImage("assets/hero.png");
  heroR = loadImage("assets/heroRight.png");
  heroL = loadImage("assets/heroLeft.png");
  //animacion del jugador 
  //heroAnimation = loadAnimation("assets/heroRight.png","assets/hero.png");

  //imagen del fondo
  bgImg = loadImage("assets/bg.png");
}


function setup() {
  createCanvas(1100,720);

  createEdgeSprites();

  //adding the background image
  bg = createSprite(950,970,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1;
  
  //creating the player sprite
  player = createSprite(100, 620, 50, 50);
  player.addImage(hero);
  player.scale = 0.13;
  player.debug = true;
  player.setCollider("rectangle",0,0,600,600);

  /*var options={isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2}

  player = Bodies.rectangle(displayWidth-1150, displayHeight-300, 50, 50,options);
  World.add(world,player);*/

  //creando obstaculos
  rata = createSprite(200,620,30,30)
  rata.shapeColor = "yellow";
  
  bala = createSprite(100,620,10,10);

  //creando sprite del suelo
  ground1a = createSprite(525,560,900,10);

  ground2a = createSprite(300,460,450,10);
  ground2b = createSprite(800,460,350,10);

  ground3a = createSprite(225,360,200,10);
  ground3b = createSprite(800,360,200,10);
  ground3c = createSprite(530,360,100,10);

  ground4a = createSprite(900,280,80,10);
  ground4b = createSprite(200,280,80,10);
  ground4c = createSprite(400,280,80,10);
  ground4d = createSprite(600,280,80,10);

  ground5a = createSprite(525,660,900,10);

  rightEdge = createSprite(1050,300,10,100);

}


function draw() {
  background(0); 
  //Engine.update(engine);

  

  //mostrar en la consola la posicion del jugador
  console.log(player.x,player.y);

  //el jugador colisiona con el piso
  player.collide(ground1a);

  player.collide(ground2a);
  player.collide(ground2b);

  player.collide(ground3a);
  player.collide(ground3b);
  player.collide(ground3c);

  player.collide(ground4a);
  player.collide(ground4b);
  player.collide(ground4c);
  player.collide(ground4d);

  player.collide(ground5a);

  //el jugador colisiona con el obstaculo
  player.collide(rata);


  ground4a.velocityX = 2;

  //ground4a.bounceOff(rightEdge);

  if(ground4a.collide(rightEdge)){
    ground4a.velocityX = -2;
  }
  //rightEdge.bounceOff(ground4a);

  //cambiar la animacion cuando se presiona la tecla
  if(keyCode == 32){

  }

  //disparar cuando se presiona la tecla
  if(keyCode == 32){
    bala.velocityX = 6;
  }

  /*bala.x = player.x;
  bala.y = player.y;*/

  if(bala.x > 1100){
    reset();
  }

  //moving the player up and down and making the game mobile compatible using touches
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-9
  }

  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y = player.y+9
  }

  if(keyDown("LEFT_ARROW")){
    player.x = player.x-9;
  }
  
  
  if(keyDown("RIGHT_ARROW")){
    player.addImage(heroR);
    player.x = player.x+9
  }
  
  else if(keyWentDown("RIGHT_ARROW")){
    player.addImage(heroL);
  }

  else if(keyWentUp("RIGHT_ARROW")){
    player.addImage(hero);;
  }

  else if(keyWentDown("LEFT_ARROW")){
    player.addImage(heroL);
  }

  else if(keyWentUp("LEFT_ARROW")){
    player.addImage(hero);
  }

  drawSprites();
}


function reset(){
  bala.x = player.x;
  bala.y = player.y;

  //bala.velocityX = 0;
}