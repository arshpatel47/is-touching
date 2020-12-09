var movingrect,fixrect,stoprect,startrect



function setup() {

  createCanvas(800,400);
 movingrect=createSprite(400, 200, 50, 50);
 fixrect=createSprite(100, 200, 50, 50);
 stoprect=createSprite(200,100,50,50);
 startrect=createSprite(300,100,50,50);
}

function draw() {
  background("black");  
  drawSprites();
  movingrect.x=mouseX;
  movingrect.y=mouseY;

 console.log(movingrect.x-fixrect.x);
 console.log(movingrect.width/2 + fixrect.width/2);
 
 if(my_is_touching(movingrect,startrect)){
  movingrect.shapeColor="red";
  startrect.shapeColor="red";
 }
 else {
     movingrect.shapeColor="green";
     startrect.shapeColor="green";
 }

 //ball.istouching(wall);



}