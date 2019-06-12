
var player;
var frame = 0;
var c;
var score = 0;
var run = true;
var b;
var start = false;
var enemies = [];

function setup() {
  createCanvas(windowWidth-50, windowHeight-200);
 // createCanvas(400,400);
  player = new Player()
  c = new Coin()

  //b.position(180, 150)
  //b.hide()
  //b.mousePressed(go)
  for (i = 0; i < 2; i++) {
    enemies[i] = new Enemy()

  }
  //  console.log(enemies.length)
}

function draw() {
  background(0)
  if (start == false) {
    textSize(50)
    textFont("Impact")
    fill(255, 0, 0)
    text("AVOID", width / 2-50, height / 2 - 60)
    textSize(15)
    fill(255)
    textFont("Arial")
    text("Press Space to Start", width / 2 - 60, height / 2)
    if (keyIsPressed && keyCode == 32) {
      start = true
    }
  }
  if (run == true && start == true) {
    c.show()
   
    noCursor()
    background(0);
    textSize(80)
    fill(255)
    noStroke()
    textFont("Impact")
    text(score, width / 2 - 30, height / 2)
    c.show()
    player.show()
    frame++
    if (frame == 70) {
      frame = 0
      //score++
      let b = enemies.length
      enemies[b] = new Enemy()
      //console.log("new")
      // console.log(enemies.length)
    }
    if (abs(mouseX - c.x) <= c.size && abs(mouseY - c.y) <= c.size) {
      c.change()
      score++
    }
    for (let a = 0; a < enemies.length; a++) {
      // console.log(a)
      enemies[a].show()
      enemies[a].move(mouseX, mouseY)


      if (abs(mouseX - enemies[a].x) <= enemies[a].size / 2 && abs(mouseY - enemies[a].y) <= enemies[a].size / 2) {
        clear()

        fill(0)
        //score = 0
        run = false
      }
    }
  }
  if (run == false&&start==true) {
    background(0)
    cursor()
    textSize(40)
    fill(255)
    textFont("Impact")
    text("YOU LOSE", width / 2-60, height / 2 - 50)
    textSize(20)
    text("score:", width / 2 - 30, height / 2)
    text(score, width / 2 + 35, height / 2)
    text("press space to restart",width/2-80,height/2+50)
    for (i = 0; i < enemies.length; i++) {
      enemies[i].x = random(width)
      enemies[i].y = random(height)
    }
    reset()
    //b.show()
  }

}
function reset(){
	enemies.splice(1,enemies.length-1);
  if(keyIsPressed&&keyCode==32){
  	start=false 
    run=true
    
    score=0
  }
  
}
function go() {
  run = true
}
