const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;


function preload()
{
  starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800,800);
	engine = Engine.create();
  world = engine.world;
  
  fairy = createSprite(500, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(700,100,10,10);
	star.addImage(starImg);
  star.scale = 0.2;

  starBody = Bodies.circle(700,100,20 , { isStatic:true});
	World.add(world, starBody);
}


function draw() {
 
  background(bgImg);
  Engine.update(engine)
  
  star.x = starBody.position.x;
  star.y = starBody.position.y;
  
  edges = createEdgeSprites();
  fairy.bounceOff(edges);
  
  if(keyWentDown(RIGHT_ARROW)) {
	fairy.velocityX = 3;
    //fairy.velocityY = 0;
  }
  if(keyWentDown(LEFT_ARROW)) {
    fairy.velocityX = -3;
    //fairy.velocityY = 0;
  }
  
  drawSprites();

}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
   
       //packageBody.restitution = 0.6
    Body.setStatic(starBody,false)
   
   // Look at the hints in the document and understand how to make the package body fall only on
   
   }
 }
 