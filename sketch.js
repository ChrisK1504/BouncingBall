class Ball {
  constructor (x,y,diameter) {
    this.position = createVector(x,y);
    this.velocity = createVector(0,5);
    this.diameter = diameter;
  }
  show() {
    fill("red");
    noStroke();
    circle(this.position.x, this.position.y, this.diameter);
  }
}


let ball;

function setup() {
  ball = new Ball(100,100,10);
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  stroke(255,255,255);
  circle(200,200,400);
  ball.show();

}
