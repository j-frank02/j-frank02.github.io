function setup() {
  createCanvas(500, 500);
  player = new Player()
  goal = new Goal()
  for (i = 0; i < 20; i++) {
    enemies.push(new Enemy())
  }
}
let goal;
let a = 0;
let count = 0;
let player;
let enemies = [];
let run = true;
let mid;
let score = 0;

function draw() {
  background(0);
  mid = width / 2
  if (run == true) {
    text(score, 20, 20)
    player.move()
    player.show()
    goal.show()
    if (goal.check(player.y, player.size)) {
      goal.change()
      score++
    }
    count++
    if (count == 10) {
      if (a < enemies.length) {
        a++
      }
      count = 0
    }
    for (i = 0; i < a; i++) {
      if (enemies[i].checkOverlap(player.x, player.y, player.size)) {
        run = false
        // console.log("check")

      }
      enemies[i].show()
      enemies[i].move()

    }
  }
  if (run == false) {
    a = 0
    for (i = 0; i < enemies.length; i++) {
      enemies[i].reset()
    }
    textSize(40)
    textFont("impact")

    text("GAME OVER", mid - 80, mid - 30)
    textSize(20)
    text(score, mid, mid)

    if (keyIsPressed && keyCode == "32") {
      score = 0
      run = true
    }
  }
}