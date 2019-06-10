class Player{
	constructor(){
  	this.x=mouseX
    this.y=mouseY
    this.size=10
    
    
  }
  show(){ 
    noStroke()
    fill(0,255,0)
    this.x=mouseX
    this.y=mouseY
  	ellipse(this.x,this.y,this.size,this.size)
  }
  
}