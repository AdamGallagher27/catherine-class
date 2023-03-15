
function rotateArrow() {
  const adjacent =  mouseX - 250 
  const opposite = mouseY - 250
  const angle  = atan2(opposite, adjacent)
  const arrow = new Arrow(250, 250, angle)
  arrow.drawArrow()
}


function setup(){
}

function draw() {
  createCanvas(500, 500)
  angleMode(DEGREES)


  // x1, y1, x2, y2 
  line(250, 250, mouseX, mouseY)

  rotateArrow()

}


