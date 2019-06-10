class Rain {
	constructor(){
    this.r=random(2,7);
   // this.speed;
    this.y=random(height);
    //this.y=0;
    this.x=random(0,width);
  }
	show() {
    var px=this.x
    var py=this.y-10
    var d=abs(this.y-400)
    var c=map(mouseX,0,width,20,255,true);
    var b=map(d,0,height,20,255,true);
    //line(px,py,this.x,this.y)
    triangle(this.x,this.y,this.r)
  	ellipse(this.x,this.y,this.r,this.r)
    //fill(c,c+c,c/c)
    fill(20,b-20,b+100)
  	stroke(255)
    strokeWeight(.7)
    //noStroke()
    
  }
  update(){
    var speed;
    var change=random(-2,5)
    //if (mouseX<=200){ speed=map(mouseX,0,width,-10,10,true)-change}
    //if (mouseX>=200){speed=map(mouseX,0,width,-10,10)+change }
    speed=map(mouseX,0,width,1,10)+change
  	this.y+=speed
    this.x+=random(-2,2)
    if (this.y>height){
      this.y=0
    	
    }
    if (this.y<0)
      this.y=height
      //
  }
}
