class Car {
  constructor(x, y, width, height) {
    // all properties including axes and size
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.accleration = 0.2;
    this.maxspeed = 3;
    this.friction = 0.05;
    this.angle = 0; // Corrected variable name

    this.controls = new Controls();
  }

  update() {
    this.#move();
  }
  #move(){
    if (this.controls.forward) {
      this.speed += this.accleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.accleration;
    }

    // Limit the speed within the maximum speed and half of the maximum speed
    this.speed = Math.min(Math.max(this.speed, -this.maxspeed / 2), this.maxspeed);

    // Apply friction
    if (this.speed > 0) {
      this.speed -= this.friction;
    } else if (this.speed < 0) {
      this.speed += this.friction;
    }
    if (Math.abs(this.speed) < this.friction) {////if speed is less than friction set speed 0
      this.speed = 0;
    }

    // LEFT RIGHT WE IMPLEMENT HERE
    if(this.speed!=0){
      const flip=this.speed>0?-1:1; ///flip can be -1 or 1 just to flip the signs - and  + just to move like a car gas right no gas no right 
    
    if (this.controls.left) {
      this.angle += 0.03*flip;
    }
    if (this.controls.right) {
      this.angle -= 0.03*flip;
    }
  }

    // Update the position and apply rotation dx = this.speed * cos(theta)dy = this.speed * sin(theta)
    this.x-=Math.sin(this.angle)*this.speed;
    this.y-=Math.cos(this.angle)*this.speed;

    // Ensure angle stays within 0 to 2π range
    this.angle %= Math.PI * 2;
  }

  draw(ctx) {
    // to make rotation
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle); // Corrected variable name
    ctx.beginPath();
    ctx.rect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    ); // positioning car
    ctx.fill(); // fill color
    ctx.restore(); // Restore canvas state
  }
}
