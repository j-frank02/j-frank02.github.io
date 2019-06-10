function setup() {
  createCanvas(400, 400);
  for (var i=0;i<dropslength;i++){
  	drops[i]=new Rain();
}
  for(var x=0;x<cloudlength;x++){
  	cloud[x]=new Cloud()
  	
  }
}

var cloud=[];
var cloudlength=50;
var drops=[];
var dropslength=200;


function draw() {
  background(map(mouseX,0,width,0,255))
  for (i=0;i<dropslength;i++){
    drops[i].show();
    drops[i].update();
  }
   for (var a=0;a<cloud.length;a++){
    //cloud[a].see();
  	//cloud[a].move();
  }
}
