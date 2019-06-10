class Enemy{
  constructor(){
    this.length=60
    this.carLeft1=loadImage("car1left.png")
    this.carRight1=loadImage("car1right.png")
    this.carRight2=loadImage("car2right.png")
    this.carLeft2=loadImage("car2left.png")
    this.image=loadImage("car2left.png")
    this.height=30
    
    this.startx=random([0-this.length,width])
    if(this.startx<0){
      this.d=1;
    }
    else{
      this.d=-1
    }
    
    this.starty=random(height)
    this.x=this.startx
    this.y=this.starty
    this.speed=random(2)
    this.changeImage()
    
  }
  changeImage(){
   if(this.d==-1){
      this.image=random([this.carLeft1,this.carLeft2])
    }
    if(this.d==1){
      this.image=random([this.carRight1,this.carRight2])
    }
  
  
  }
  reset(){
    
     this.x=random([0-this.length,width])
    this.y=random(height)
  }
  checkOverlap(x,y,s){
    if(this.x+this.length>x&&this.x<x+s){
      if(this.y+this.height>y&&this.y<y+s){
          return true
      }
    }
    
  }
  show(){
    fill(255,0,0)
    
    image(this.image,this.x,this.y,this.length,this.height)
  }
  move(){
    if(this.x>width){
      this.changeImage()
      this.x=-this.length
      this.y=random(height)
    }
    if(this.x<-this.length){
      this.changeImage()
      this.x=width
      this.y=random(height)

    }
    if(this.startx>width/2){
      this.d=-1
      this.x-=this.speed
    }
    if(this.startx<0){
      this.d=1
      this.x+=this.speed
    }
  }
}