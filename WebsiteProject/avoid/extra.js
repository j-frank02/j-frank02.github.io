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
