class Bubble{
  constructor(){
    this.x=random(width)
    this.y=random(height)
    this.r=50
    this.xs=random(-3,3)
    this.ys=random(-3,3)
    this.color="white"
  }
  show(){
    noStroke()
   // stroke(255)
    fill(this.color)
    ellipse(this.x,this.y,this.r,this.r)
    
  }
  move(){
    this.x+=this.xs
    this.y+=this.ys
    if(this.x>width||this.x<0){
      this.xs=-this.xs
    }
    if(this.y>height||this.y<0){
      this.ys=-this.ys
    }
    
  }
  checkMouse(){
      if(abs(this.x-mouseX)<=this.r/2&&abs(this.y-mouseY)<=this.r/2)
       {
         this.color="red"
       }
    else{
      this.color="white"
    }
  }
  pop(i,array){
    if(abs(this.x-mouseX)<=this.r/2&&abs(this.y-mouseY)<=this.r/2)
       {
       array.splice(i,1);
       //this.color="red"
         
       }
    
    //else{this.color="white"}
  }
}