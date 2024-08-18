class Ball {
  constructor (x,y,diameter) {
    this.position = createVector(x,y);
    this.velocity = createVector(0,5);
    this.diameter = diameter;
  }
  show() {
    fill("black");
    circle(this.position.x, this.position.y, this.diameter);
  }
  update() {
    this.position.add(this.velocity);
    this.velocity.y += 0.1;
  }
  
  collisionDetection() {
    // Get the vector from the current position of the ball to the center of the circle
    let distanceFromCenter = createVector(200-this.position.x, 200-this.position.y);
    // Checks if any part of the ball is outside the circle
    if (distanceFromCenter.mag() + this.diameter/2 >= 200) {
      this.bounce(distanceFromCenter);
    }
  }

  bounce(distance) {
    // TODO: CALCULATE THE NORMAL AT THE POINT OF CONTACT
    let normal = distance.normalize();
    // w = v - 2 * (v . n) * n
    // w -> exiting vector
    // v -> entering vector
    // n -> normal to the surface
    // the normal is not taken from the surface in this case
    // but from the center of the ball, which is diameter/2 away from the surface
    // The bigger the ball gets, the more error this approximation will have
    let reflectionVelocity = this.velocity.sub(normal.mult(2*p5.Vector.dot(normal,this.velocity)));
    this.velocity = reflectionVelocity;
  }
}

let ball;
function setup() {
  frameRate(240);
  ball = new Ball(100,100,10);
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  stroke(random(255), random(255), random(255));
  strokeWeight(3);
  circle(200,200,400);
  ball.show();
  ball.update();
  ball.collisionDetection();
}