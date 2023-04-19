let ballV 
balls.push()

function setup() {
  ballV = new BallWithVelocity(250, 250, 5, 5, 45)
  createCanvas(500, 500)
  angleMode(DEGREES)
}

function draw() {
  background(0)
  ballV.drawBall()
  ballV.moveBall()
}