const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,390,1200,20)
    box1 = new Box(70,320,75,89);
    box2 = new Box(890,220,70,70);
    box3= new Box (810,350,20,80)
    log1 = new Log (80,260,300,PI/3);

    box4 = new Box (690,690,49,70);
    box5 = new Box (920,240,50,110);
    box6 = new Box (80,220,90,10);
    log2 = new Log (690,210,300,PI/5);
    box7 = new Box (830,160,7,70);
    log3 = new Log (780,110,150,PI/7);
    log4 = new Log (810,90,150,-PI/7);
  
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    log1.display();
    box4.display();
    box5.display();
     box6.display();
    log2.display();
    box7.display();
    log3.display();
    log4.display();
  
}