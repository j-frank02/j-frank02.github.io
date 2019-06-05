class Ball {
  constructor(x, y, d, s) {
    this.speed = s
    this.x = x
    this.y = y

    this.r = 3
    this.d = d
  }
  checkHitPlayer(x, y, s) {
    if (this.x > (x) && this.x < x + s && this.y > y && this.y < y + s) {
      return true
    }

  }
  show() {
    noStroke()
    fill(255, 45, 45)
    // fill(255)
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r)
  }
  move() {
    this.y -= this.speed * this.d
  }
}