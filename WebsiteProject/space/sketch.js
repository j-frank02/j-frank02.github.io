//Instructions:move the mouse to control the player and press space to shoot. Don't hit the enemies and avoid their fire.
//Please leave feedback and suggestions as well as any bugs I may have missed
//Thank You!, Jayna Frank



function setup() {
   //most of the files are not in use, and are just variations on the pictures I chose for the graphics
  createCanvas(648,474);
  player = new Player()
  //this starts the first wave
  newWave()
  //these are the pictures for the background
  bg = loadImage("background.png")
  startScreen=loadImage("startscreen.png")
  title=loadImage("title3.png")
  gameover=loadImage("gameover.png")
}
let waves
let title;
let gameover
let wave = 1;
let enemies = [];
let bullets = [];
let player;
let eb = [];
let health=[];
let bg;
let score=0;
let startScreen;
let once = true;
let start = false;
let inputSpeed=1
let shotsFired=0
let enemiesKilled=0
function draw() {
  //startscreen
  if (start == false) {
    image(startScreen,0,0,width,height)
    fill(255 )
    textSize(25)
    stroke(0)
    textFont("Impact")
    image(title,width/2-220,height/2-100)
    text("Press Space to Start", width/2-100, height/2)
    textSize(20)
    textFont("arial")
    fill(255,200)
    rect(width/2-120,height/2+10,250,110)
    fill(0,200)
    text("\t\t\t\tInstructions: \n Press space to shoot \n and use the mouse to \n move the ship",width/2-100,height/2+30)
    if (keyIsPressed && keyCode == 32) {
      start = true
    }
  }
//This is the code that runs the space
  if (player.health > 0 && start == true) {
  
    noCursor()
    background(0);
    image(startScreen, 0, 0, width, height)
    

    fill(255)
    textSize(15)
    text("WAVE: "+wave,width-80,20)
    textSize(10)
    textFont("arial")
    stroke(255)
    
    text(player.health, player.health + 30, 20)

    fill(0, 255, 0)
    rect(10, 10, player.health, 10)

    if (enemies.length == 0) {
      //this checks when theres no enemies left on the screen, and starts the next wave
     newWave()
      wave++
      inputSpeed+=0.5
      

    }
    
    //all the bullets are objects separate from the player or enemy. these bullets are from the player
    for (i = 0; i < bullets.length; i++) {
       bullets[i].show()
      bullets[i].move()
      
      //for each bullet in the array, and for each enemy on the screen, the enemy will check if its colliding with the bullet. If it is, it gets removed from the array of enemies 
      for (a = 0; a < enemies.length; a++) {
        if (enemies[a].checkHit(bullets[i].x, bullets[i].y, bullets[i].r)) {
          
          //this determines if a health box will drop
          let num=random([1,2,3,4,5,6])
          if(num==2){
            
            health.push(new Health(enemies[a].x,enemies[a].y))
          }
          enemiesKilled++
          enemies.splice(a, 1)
          bullets[i].y = -10
        }
      }
     
    }
    //movement and visuals for the enemies
    for (i = 0; i < enemies.length; i++) {
      enemies[i].show()
      enemies[i].move()
      //the enemy will check if its hitting the player
      if (enemies[i].checkHitPlayer(player.x, player.y - 20, player.width)) {
        enemies.splice(i, 1)
        player.takeHit()
      }
      let num = random(2)
      //theres a random chance that the enemy will shoot
      if (abs(num - 1) <= 0.002) {
        enemies[i].shoot(eb, player)
      }
    }
    
    //this is for bullets coming from the enemies
    //i did this so that enemies cant take hits from other enemies, and the player can't be harmed by its bullets.
    for (i = 0; i < eb.length; i++) {
      eb[i].show()
      eb[i].move()
      if (eb[i].checkHitPlayer(player.x, player.y-20, player.width)) {
        noFill()
        stroke(255, 0, 0)
        player.takeHit()
        eb.splice(i, 1)
      
      }

    }
    //movement of health boxes
    for(i=0;i<health.length;i++){
      health[i].show()
      health[i].fall()
      if(health[i].checkHitPlayer(player.x,player.y,player.width)){
        player.health+=5
        health.splice(i,1)
      }
    }
    player.show()
    player.move()
  }
  //space over screen
  if (start == true && player.health <= 0) {
    
    background(0)
    fill(255, 0, 0)
    stroke(0)
    textFont("impact")
    textSize(25)
    
    image(gameover,width/2-150,height/2-80,300,41)
    text("\n\t\tWAVE:  "+wave, width / 2 - 50, height / 2-40 )
    textSize(20)
    let accuracy=int((enemiesKilled/shotsFired)*100)
    
    text("\t\t\t\t\taccuracy: "+accuracy+"%"+ "\n press space to restart",width/2-90,height/2+20)
    if(keyIsPressed&&keyCode==32)(
      reset()
    )

  }
}
//the wave functions set the enemies up in different places, and their movement is different in the enemy class
function wave2() {
  let a = -300
  for (i = a; i < 0; i += 25) {
    a += 25
    enemies.push(new Enemy(i, a, 2,inputSpeed))
  }
  a = -300
  for (c = width - a; c > width; c -= 20) {
    a += 20
    enemies.push(new Enemy(c, a, 2,inputSpeed))
  }

}
//resets each variable to the starting place

function reset(){
  wave=0
  player.health=100
  eb=[]
  enemiesKilled=0
  shotsFired=0
  player.y=mouseY
  enemies = [];
 bullets = [];
 eb = [];
 health=[];
 score=0
 once = true;
 start = false;
 inputSpeed=1
}

function newWave(){
    let num=random([1,2,3])
    if(num==1){
      wave1()
    }
  if(num==2){
      wave2()
    }
  if(num==3){
      wave3()
    }
}

function wave1() {
  for (a = 0; a < height/4; a += 50) {
    for (i = 0; i < width-40; i += 40) {
      enemies.push(new Enemy(i, a, 1,inputSpeed))
    }
  }
}


function wave3() {
  for (a = -300; a < 0; a += 30) {
    enemies.push(new Enemy(width/2-100, a, 3,inputSpeed))
  }
  for (a = -300; a < 0; a += 30) {
    enemies.push(new Enemy(width/2+100, a, 3,inputSpeed))
  }
}
//uses space to shoot
function keyPressed() {
  if (keyCode == 32) {
    player.shoot(bullets)
    if(start){
    shotsFired++
    }
  }
}