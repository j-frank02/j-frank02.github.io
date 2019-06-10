//press space to add more bubbles, click on a bubble to pop it

function setup() {
  createCanvas(400, 400);
  for (i = 0; i < 20; i++) {
    bubbles.push(new Bubble())
  }
}
var bubbles = []

function draw() {
  background(0);
  textSize(50)
  fill(255)
  textFont("Impact")
  text(bubbles.length, 180, 200)
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].show()
    bubbles[i].checkMouse()
    bubbles[i].move()

  }
}

function keyPressed() {
  if (keyCode == 32) {
    for (i = 1; i < bubbles.length; i++) {
        stroke(255)
      line(bubbles[i].x,bubbles[i].y,bubbles[i-1].x,bubbles[i-1].y)
      
    //  bubbles[i].color = "white"


    }
    bubbles.push(new Bubble())
  }
}

function mouseClicked() {
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].pop(i, bubbles)
    //bubbles[i].color="red"


  }
}