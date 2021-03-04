var background1, backgroundImage

function preload()
{
  backgroundImage = loadImage('background1.png');
}


function setup() {
  createCanvas(2000,4700);

  background1 = createSprite(300,200,20,20);
  background1.addImage(backgroundImage);
  background1.scale = 1.2;

}

function draw() {
  background(255,255,255);  


  drawSprites();
}