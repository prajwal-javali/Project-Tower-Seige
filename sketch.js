const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, layer, polygon, chain;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11;
var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 350, 1200, 20);
    layer = new Ground(500, 250, 200, 10);
    block1 = new Box(490, 229, 30, 30);
    block2 = new Box(455, 229, 30, 30);
    block3 = new Box(420, 229, 30, 30);
    block4 = new Box(525, 229, 30, 30);
    block5 = new Box(560, 229, 30, 30);
    block6 = new Box(490, 200, 30, 30);
    block7 = new Box(455, 200, 30, 30);
    block8 = new Box(525, 200, 30, 30);
    block9 = new Box(510, 150, 30, 30);
    block10 = new Box(480, 150, 30, 30);
    block11 = new Box(495, 100, 30, 30);
    polygon = new Polygon(100, 300, 50, 50);
    chain = new Chain(polygon.body, {x: 200, y: 200});
   
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();
    polygon.display();
    chain.display();
    layer.display();
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    
    stroke("white");
    textSize(40);
    fill("white");
    text("Score: "+ score, 900, 50);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.detatch();
}