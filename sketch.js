var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.setCollider("rectangle", 330, 0 , 300, fairy.height);
	fairy.debug = false;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);


	
	Engine.run(engine);

	

}


function draw() {
  background(bgImg);

  star.y = starBody.position.y
	star.x = starBody.position.x

  if(starBody.position.y > 470){

   Body.setStatic(starBody, true);

  }

  if(fairy.isTouching(star)){

	//fairyVoice.play();

  }

  drawSprites();

}

function keyPressed() {
	//write code here

 if(keyCode === RIGHT_ARROW){

    fairy.x = fairy.x+20

 }

 if(keyCode === LEFT_ARROW){

    fairy.x = fairy.x-20

 }

 if(keyCode === DOWN_ARROW){

   Body.setStatic(starBody, false);

 }
}
