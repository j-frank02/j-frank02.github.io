var ballArray = []
var gravity = 9.8/30.0;
var speed = 0.0005

var sunX = 500
var sunY = 500

var sX=100
var sY=100

class Ball {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
   
  }
  
  update(){
    let directionX,directionY
    if(abs(sunX-this.x)>abs(sX-this.x)&&abs(sunY-this.y)>abs(sY-this.y)){
	 directionX = sunX-this.x
     directionY = sunY-this.y
    }
    else {
     directionX = sX-this.x
     directionY = sY-this.y
    }
    var speed=map(this.width,10,100,0.001,0.00005)
    this.xSpeed += directionX*speed
    this.ySpeed += directionY *speed
    
    this.x += this.xSpeed
    this.y += this.ySpeed
    
    //console.log("speed: ", this.xSpeed)
		
  }
  
  draw(){
    	
    let red=map(this.xSpeed,0,2,0,255)
    let green=map(this.ySpeed,0,2,0,255)
    fill(red,green,100)
    stroke(red,green,100)
    ellipse(this.x, this.y, this.width, this.width)
  }
}

function setup() {
  createCanvas(600, 600);
	for(var i = 0;i<20;i++){
  	var newBall = new Ball(random(0, width), random(0, height), random(10, 100))
    ballArray.push(newBall)
  }
}
function mousePressed(){
  sunX=mouseX
  sunY=mouseY
  
}

function draw() {
  background(0, 0, 0);
  
  fill("yellow")
  ellipse(sunX, sunY, 10, 10)
  ellipse(sX,sY,10,10)
	
  for(var i = 0;i<ballArray.length-1;i++){
    
      line(ballArray[i].x,ballArray[i].y,ballArray[i+1].x,ballArray[i+1].y)
  	ballArray[i].update()
    ballArray[i].draw()
  }
  
}