const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine, world;
var bola
var piso
var teto, paredeE,paredeD;

function setup() {
  createCanvas(400,500);

  engine = Engine.create();
  world = engine.world;

  var bola_options = {
    restitution: 0.7,   
  }

  bola = Bodies.circle(200,100,20,bola_options);
  World.add(world,bola);

  piso = new Parede(200,490,400,20);
  teto = new Parede(200,10,400,20);




}

function draw() {
  background("black");  

  Engine.update(engine);

  strokeWeight(2)
  stroke("purple");
  noFill()
  

  ellipseMode(RADIUS);
  ellipse(bola.position.x,bola.position.y,20);

  piso.show();
  teto.show();


  
  
}