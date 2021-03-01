const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground1;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(240,795,480,10);
for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }

for (var j = 55; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,375));
}

for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,175));
}

 for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}


}

function draw() {
  background("black");  
  Engine.update(engine);

  ground1.display();

for (var j = 0; j < particles.length; j++){

  particles[j].display();
}
for (var j = 0; j < plinkos.length; j++){

  plinkos[j].display();
}

for (var k = 0; k < divisions.length; k++) {
     
  divisions[k].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10), 10,10));

}


  drawSprites();
}