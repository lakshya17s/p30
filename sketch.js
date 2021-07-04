const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine,world;
var pImg
var ground,polygon;
var ground2;
var box, box1;
var box2,box3,box4,box5,box6,box7,box9,box10;
var sling;

function preload(){
    pImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,800)
    engine = Engine.create();
    world = engine.world;
    polygon = Bodies.rectangle(50,500,50,50,{ 'restitution':0.8,'friction':1.0,'density':0.5});
    World.add(world, polygon);
    ground = new Ground();
    ground2 = Bodies.rectangle(470+500,425,300,20,{isStatic:true,});
    World.add(world, ground2);
    box= new Box(400+500,400,50,50);
    box1 = new Box(450+500,400,50,50);
    box2 = new Box(500+500,400,50,50);
    box3 = new Box(550+500,400,50,50)
    box4 = new Box(425+500,350,50,50);
    box5 = new Box(475+500,350,50,50);
    box6 = new Box(525+500,350,50,50);
    box7 = new Box(450+500,300,50,50);
    box8 = new Box(500+500,300,50,50);
    box9 = new Box(475+500,250,50,50);
    sling = new Sling(polygon,{x:350,y:400});
}
 function draw(){
     background(0,0,50);
     Engine.update(engine);
     var pos = polygon.position;
     var pos2 = ground2.position;
     rectMode(CENTER);
     rect(pos2.x,pos2.y,300,20);
     imageMode(CENTER);
image(pImg,pos.x,pos.y,50,50);
     ground.display();
     box.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
      box5.display();
      box6.display();
      box7.display();
     box8.display();
     box9.display();
     sling.display();
    
    }
 

 function mouseDragged(){
     Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
     sling.fly();
 }
 function keyPressed(){
    if(keyDown("SPACE")){
      sling.attach(polygon);

    }
}