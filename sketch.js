const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

ground = new Ground(600,390,1200,20);
stand1 = new Ground(350,300,250,10);
stand2 = new Ground(650,200,200,10);
polygon = new Polygon(100,100,15);

//level1
//stand1
block1 = new Block(350,250,30,45);
block2 = new Block(380,250,30,45);
block3 = new Block(320,250,30,45);
block4 = new Block(410,250,30,45);
block5 = new Block(440,250,30,45);
block6 = new Block(290,250,30,45);
block7 = new Block(260,250,30,45);

//stand2
blockb1 = new Block(650,150,30,45);
blockb2 = new Block(620,150,30,45);
blockb3 = new Block(680,150,30,45);
blockb4 = new Block(590,150,30,45);
blockb5 = new Block(710,150,30,45);

//level2
//stand1
block8 = new Block(350,200,30,45);
block9 = new Block(380,200,30,45);
block10 = new Block(320,200,30,45);
block11 = new Block(410,200,30,45);
block12 = new Block(290,200,30,45);

//stand2
blockb6 = new Block(650,100,30,45);
blockb7 = new Block(620,100,30,45);
blockb8 = new Block(680,100,30,45);

//level3
//stand1
block13 = new Block(320,150,30,45);
block14 = new Block(380,150,30,45);
block15 = new Block(350,150,30,45);

//stand2
blockb9 = new Block(650,50,30,45);

//level4
block16 = new Block(350,100,30,45);

string = new String(polygon.body,{x:100,y:100})
}

function draw() {
  background(58, 45, 45); 
  
  noStroke();
  textSize(35);
  fill("white");
  text("SCORE : "+score,20,40);

  Engine.update(engine);
  drawSprites();
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  blockb1.display();
  blockb2.display();
  blockb3.display();
  blockb4.display();
  blockb5.display();
  block6.display();
  block7.display();
  block8.display();
  blockb6.display();
  blockb7.display();
  blockb8.display();
  block9.display();
  blockb9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  blockb1.score();
  blockb2.score();
  blockb3.score();
  blockb4.score();
  blockb5.score();
  block6.score();
  block7.score();
  block8.score();
  blockb6.score();
  blockb7.score();
  blockb8.score();
  block9.score();
  blockb9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  polygon.display();

  string.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  string.fly();
}

function keyPressed(){
  if(keyCode === 32){
     string.attach(polygon.body);
  }
}