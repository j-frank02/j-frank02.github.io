class Player{
  constructor(){
     this.size=30;
    this.x=width/2-this.size/2;
    this.y=width/2;
   
    this.imageUp=loadImage("frogup.png");
    this.imageDown= loadImage("frogdown.png");
    this.image =loadImage("frogup.png");
    
  }
  changeImage(){
    if(mouseY-pmouseY<0){ 
      this.image=this.imageUp
    }
    if(mouseY-pmouseY>0){
     this.image=this.imageDown
    }
  
  }
  show(){
   this.changeImage()
    fill(255)
    noStroke()
    //console.log(pmouseY-mouseY)
    
    image(this.image,this.x,this.y,this.size,this.size)
                        
  }
  move(){
    this.y=mouseY
    if(pmouseY<=0){
    this.y=0
      }
    if(pmouseY>=height-this.size){
      this.y=height-this.size
    }
  }
}