
let arrow

function setup(){
  createCanvas(500, 500)
  angleMode(DEGREES)
  arrow = new Arrow(250, 250, 10, 180)
}

function draw() {
  background(0)
  arrow.drawArrow()
}


