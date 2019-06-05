class Health{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.size=35;
    this.r=this.size/2
    this.img=loadImage("health.png")
  }  
  show(){
    fill(0,255,0)
    noStroke();               image(this.img,this.x,this.y,this.size,this.size)
  }
checkHitPlayer(x,y,s){
    if(this.y+this.size>y&&this.y<y+s){
      if(this.x+this.size>x&&this.x<x+s){
         //fill(255,0,0)
          return true
         }
    }
  }
  
  fall(){
    this.y++
  }
  
}