let balls = []


function setup() {

  for(let i = 0; i < 4; i++) {
    balls.push(new BallWithVelocity(random(50, 400), random(50, 400), 10, 100, random(0, 360)))
  }
  
  createCanvas(1000, 1000)
  angleMode(DEGREES)
}

function draw() {

  background(0)

  balls.forEach((ball, index) => {
    ball.drawBall()
  })

  for(let i = 0; i < balls.length; i++) {
    for(let j = i + 1; j < balls.length; j++) {
      balls[i].intersects(balls[j])
    }
  }

}