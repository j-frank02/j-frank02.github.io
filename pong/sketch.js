function setup() {
  createCanvas(400, 400);
  x=width/2
  y=height/2
  xs=6
  ys=4
  rx=380
  ry=100
  px=10
  py=100
  var b=createButton("Reset")
  b.mousePressed(reset)
  b.position(180,0)
}

let rx,ry,px,py;
let xs,ys;
var xd=1
var yd=1
let x,y;
var score=0
var rscore=0
var rs=3
var c=ry
function draw() {
  let s=5
  background(0)

  fill(0)
  //rect(0,0,width,height)
  //rect(10,0,390,height)
//  fill(0)
  //rect(0,0,10,height)
	x+=xs*xd
  y+=ys*yd
  noFill()
  stroke(255)
  line(200,0,200,400)
  //line(rx,ry+25,0,ry+25) //shows center of the 2nd paddle
 // line(x,y,rx,y)
  //line(0,200,400,200)
 //line(0,0,400,400)
  //line(400,0,0,400)
  stroke(255)
  fill(255,0,0)
  noStroke()
  
  if(py<=y&&y<=py+60&&x-10<=20){
    xd=1
  }
  if(ry<=y&&y<=ry+60&&x+10>=390){
    xd=-1
   
  }
  if(y>=height||y<=0){yd=-yd}
  if(x>width-10){
    xd=-1
    score+=1
  }
  if(x<10){
    xd=1
   
  	rscore++
  }
  if(keyIsPressed){
  	if(keyCode==38 && py>0){
    	py-=s
    }
    if(keyCode==40&&py+50<height){
    	py+=s
    }  }
  if(y>ry+25){
    ry+=rs
   	c=ry+25
  }
  if(y<ry+25){
    ry-=rs
    c=ry
  }
  strokeWeight(3)
  stroke(255,0,0)
  
  line(385,ry+25,385,c)
 // rect(x,y,20,20)
 	noStroke()
  
  fill(255)
  ellipse(x,y,20,20)
  fill(255)
  rect(rx,ry,10,50)
  
 
  rect(px,py,10,50)
  fill(0)
  
  textSize(40)
  fill(0)
  
  fill(255)
  textFont("Impact")
  text(score,130,80)
  
  text(rscore,240,80)
}
function reset(){
	rscore=0
  score=0
  xd=1
  yd=1
  x=200
  y=100
}