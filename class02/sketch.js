function rotateArrow(position, color) {
  const adjacent =  mouseX - position[0] 
  const opposite = mouseY - position[1]
  const angle  = atan2(opposite, adjacent)
  fill(...color)
  const arrow = new Arrow(position[0], position[1], angle)
  arrow.drawArrow()
}


function rotateArrowMouse() {
  const adjacent =  250 - mouseX
  const opposite = 250 - mouseY
  const angle  = atan2(opposite, adjacent)
  const arrow = new Arrow(mouseX, mouseY, angle)
  arrow.drawArrow()
}


function rotateArrowCorner() {
  const adjacent =  mouseX
  const opposite = mouseY
  const angle  = atan2(opposite, adjacent)
  const arrow = new Arrow(mouseX, mouseY, angle  - 180)
  arrow.drawArrow()
}

function randCol() {
  return [random(0, 255), random(0, 255), random(0, 255)]
}

function randPosition() {
  return [random(0, 500), random(0, 500)]
}

let positions = []
let colors = []

function setup(){

  for(let i = 0; i < 10; i++) {
    positions.push(randPosition())
    colors.push(randCol())

  }

}

function draw() {
  createCanvas(500, 500)
  angleMode(DEGREES)

  for(let i = 0; i < positions.length; i++) {
    rotateArrow(positions[i], colors[i])
  }
  

  
}


