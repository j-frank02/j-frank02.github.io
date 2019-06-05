class Enemy {
  constructor() {
    this.x = random(-20, width + 20)
    this.y = random(-20, height + 20)
    this.xOut = random([true, false])
    if (this.xOut == false) {
      while (this.y < height && this.y > 0) {
        this.y = random(-20, height + 20)
      }
    } else {
      this.y = random(height)
    }
    if (this.xOut == true) {
      while (this.x < width && this.x > 0) {
        this.x = random(-20, width + 20)
      }
    } else {
      this.x = random(width)
    }


    this.c = random(180)
    this.size = random(10, 20)
    this.speed = random(0.1, 1)

  }
  show() {
    fill(255, this.c, 15)
    noStroke()
    ellipse(this.x, this.y, this.size, this.size)
  }
  move(x, y) {
    if (this.x == x) {
      this.x += 0
    }
    if (this.y == y) {
      this.y += 0
    }
    if (this.x < x) {
      this.x += this.speed
    }
    if (this.y < y) {
      this.y += this.speed
    }
    if (this.y > y) {
      this.y -= this.speed
    }
    if (this.x > x) {
      this.x -= this.speed
    }

  }

}