class Coin{
	constructor(){
  	this.x=random(390);
    this.y=random(390);
    this.c1=random(0,255);
    this.c2=random(0,255);
    this.c3=random(0,255);
    this.size=15;
  }
  show(){
    fill(this.c1,this.c2,this.c3)
    stroke(0,255,0)
    strokeWeight(2)
  	ellipse(this.x,this.y,this.size,this.size)
  }
  change(){
  	this.x=random(this.size,width-this.size)
    this.y=random(this.size,height-this.size)
    
    this.c1=random(0,255);
    this.c2=random(0,255);
    this.c3=random(0,255);
  }
}