class Goal{
  constructor(){
    this.x=width/2
    this.y=random(height)
    this.size=20
    this.r=this.size/2
  }
  show(){
    fill(0,255,0)
    ellipse(this.x,this.y,this.size,this.size)
  }
  check(y,s){
    let self=this
    if(y<this.y+this.r&&y>this.y-this.r||y+s>this.y-this.r&&y+s<this.y+this.r){
      return true
    }
    
  }
  
  change(){
    this.y=random(height)
  }
}