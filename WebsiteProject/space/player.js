class Player{
  constructor(x){
    this.x=200
    this.y=height-40
    this.height=10
    this.health=100
    this.width=40
    this.image=loadImage("ship2.png")
  }
  shoot(array){
    array.push(new Ball(this.x+this.width/2,this.y,1,3))
  }
  takeHit(){
    this.health-=10
  }
  show(){
    noStroke()  
    image(this.image,this.x,this.y-20,this.width,this.width)
      
  }
  move(){
    //this is what creates the delayed movement
   this.x= lerp(this.x,mouseX-this.width/2,0.05) 
   this.y=lerp(this.y,mouseY+5,0.05)
  }
  
  
}