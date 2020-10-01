var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];


var divisionHeight=300;
var score =0;
var turn = 0;
var particle;
var gameState = "play";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


//fucnction mousePressed
function mousePressed(){

  if(gameState !== "end"){
  
  turn++;
  particle = new Particle(mouseX, 10, 10, 10);
  
  }
  }



//draw function
function draw() {
  background("black");
  //score
  textSize(20)
 text("Score : "+score,20,30);


  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }



   if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }


 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }



   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


   //adding the score
   if(particle != null){

    particle.display();

     if(particle.body.position.y > 760){

        //500
       if(particle.body.position.x < 250){

         score = score+500;
       }
        //100
       if(particle.body.position.x > 251 && particle.body.position.x < 640){

         score = score+100;
       }

       //200
       if(particle.body.position.x > 650 && particle.body.position.x < 800){
      
       score = score+200;
     }

     //disappearing of the particle  
     particle = null;
     if( turn >= 5) gameState = "end"; 
   }  
  }


  //if the number of turns or trials are done, or have reached the limit, the game is Over
  if(turn >= 5 && particle === null){

   textSize(90);
   text("Game Over", 190, 250);
  }


   //divi 1
  textSize(20);
  text("500", 25, 530);
  
  //divi 2
  textSize(20);
  text("500", 105, 530);

  //divi 3
  textSize(20);
  text("500", 185, 530);

  //divi 4
  textSize(20);
  text("100", 265, 530);

  //divi 5
  textSize(20);
  text("100", 345, 530);

  //divi 6
  textSize(20);
  text("100", 425, 530);

  //divi 7
  textSize(20);
  text("100", 505, 530);

  //divi 8
  textSize(20);
  text("200", 585, 530);

  //divi 9
  textSize(20);
  text("200", 665, 530);

  //divi 10
  textSize(20);
  text("200", 745, 530);


}

