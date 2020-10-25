
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600, 650, 1400, 20);
  ground2 = new Ground(700, 400, 700, 20);
  

  box1 = new Box(400, 395, 50, 50);
  box2 = new Box(460, 395, 50, 50);
  box3 = new Box(510, 395, 50, 50);
  box4 = new Box(550, 395, 50, 50);
  box5 = new Box(660, 395, 50, 50);
  box6 = new Box(450, 345, 50, 50)
  box7 = new Box(550, 345, 50, 50);
  box8 = new Box(650, 345, 50, 50);
  box9 = new Box(750, 345, 50, 50);
  box10 = new Box(850, 345, 50, 50);
  box11 = new Box(535, 300, 50, 50);
  box12 = new Box(780, 300, 50, 50);
  box13 = new Box(675, 250, 50, 50);

  polygon = new Polygon( 100, 200, 30);

  slingshot = new SlingShot(polygon.body, {x: 200, y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  
  polygon.display();

  slingshot.display();

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}


