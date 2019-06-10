class Cloud{
	constructor(){
  	this.size=10;
    this.speed=random(3);
    this.y=random(10,30);
    this.x=random(width)
    this.r=random(2,60)
    this.change=random(-5,5);
  }
	see(){
    var change=random(10)
    fill(255,255,255)
  	ellipse(this.x+20,this.y+3,this.r-this.change,this.r-this.change)
    ellipse(this.x,this.y,this.r,this.r+5)
    ellipse(this.x-5,this.y,this.r,this.r)
    fill(255,255,255)
    stroke(200,200,200)
    
  }
  
  move(){
    var speed=map(mouseX,.5,width,0,5)+this.speed
  	this.x+=speed
    if(this.x>=400){
    	this.x=0
    }
  }
}