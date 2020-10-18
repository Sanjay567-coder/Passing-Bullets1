var bullet;
var wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1400,600);

  speed = random(232,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 250, 50, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1100,250,thickness,height/2);
  wall.shapeColor = color("grey");

}

function draw() {
  background("black"); 
  
  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var damage =  0.5 * weight * speed * speed / (thickness*thickness*thickness);
    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10){
      wall.shapeColor = color(0,225,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall) {

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
  }