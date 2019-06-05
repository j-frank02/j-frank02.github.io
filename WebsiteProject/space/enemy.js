class Enemy{
  constructor(x,y,wave,speed,img){
    
    this.startx=x
    this.starty=y
    this.x=this.startx
    this.y=this.starty
    this.size=35
    this.r=this.size/2
    this.speed=speed
    this.wave=wave
    this.xd=1
    this.yd=1
    
    this.img=img
    this.hit=false
    this.image3=loadImage("bug3.png")
    this.image1=loadImage("bug2.png")
    this.image2=loadImage("ufo.png")
  }
  //collision detection
  checkHitPlayer(x,y,s){
    if(this.y+this.size>y&&this.y<y+s){
      if(this.x+this.size>x&&this.x<x+s){
         fill(255,0,0)
          return true
         }
    }
  }
  
  explode(){
    let fire=loadImage("fire.png")
    for(let i=0;i<10;i++){
      //this.img=fire
      this.show()
          //image(fire,this.x,this.y,this.size,this.size)
        
    }
  
  }
  
  checkHit(x,y,r){
    let d=dist(this.x,this.y,x,y)
    if(x-r>this.x&&x+r<this.x+this.size&&y-r>this.y&&y+r<this.y+this.size){
      return true 
      //this.hit=true
    //  this.explode()
    }
    
  }
  shoot(array,p){
    let d=-1
    if(p.y<this.y){
      d=1
    }
    array.push(new Ball(this.x,this.y,d,1))
  }
  show(){
    fill(255)
    if(this.hit==false){
    if(this.wave==1){
      this.img=this.image1
      this.size=30
    }
    if(this.wave==2){
      this.img=this.image2
      this.size=50
    }
    if(this.wave==3){
        this.img=this.image3
        this.size=30
    }
    }
    
    image(this.img,this.x,this.y,this.size,this.size)
  }
  move(){
    //this is where I determine how the enemy will move based on which variation.
    if(this.wave==1){
    this.x+=this.speed
    if(this.y>=height){
      this.yd=-1
    }
    if(this.x>=width||this.x<=0){
      this.y+=this.size*this.yd
      this.speed=-this.speed
    }
      
    }
    
    if(this.wave==3){
      this.x+=this.xd*this.speed
      this.y+=this.yd*this.speed
       // this.x=lerp(this.x,pmouseY,.005)
     // this.y=lerp(this.y,pmouseX,.005)
      if(this.y<this.starty+width/2){
        this.yd=1
      }
      if(this.x>=width||this.x<=0){
        this.xd=-this.xd
        this.yd=-this.yd
      }
      if(this.y>=height){
        this.yd=-this.yd
      }
    if(this.y>this.starty+width/4){  if(this.startx>width/2&&this.x==this.startx){
        this.xd=-1
        
      }
                                if(this.startx<width/2&&this.x==this.startx){
        this.xd=1
        
      }}
      
    }
    
    
    
    if(this.wave==2){
       if(this.startx<width/2&&this.x==this.startx){
        this.xd=1
        this.yd=1
      }
      if(this.startx>width/2&&this.x==this.startx){
        this.xd=-1
        this.yd=1
      }
      this.x+=this.xd*this.speed
      this.y+=this.yd*this.speed
      if(this.startx<0&&this.x>=this.size||this.startx>width&&this.x<width){
      if(this.x>=width||this.x<=0||this.y>=height||this.y<=0){
        this.xd=-this.xd
       this.yd=-this.yd
      }
      }
      
    }
    
  }
}

