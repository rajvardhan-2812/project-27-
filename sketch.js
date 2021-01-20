
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;


var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bar1 = new bar(400,100,550,25)
  
	ball1 = new balls(400,200,170)

	rope1 = new rope(ball1,bar1,0,0)

options = {bodyA:ball1,
				bodyB: bar1,
				stiffness:0.03,
				length:10

}

 // constraint12 = Constraint.create(options)
 // World.add(world,constraint12)
}

function draw() {
  rectMode(CENTER);
  background(0);
  


bar1.display()

ball1.display()

rope1.display()
  drawSprites();
 
}


































































