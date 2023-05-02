//Arrow class
class Arrow {
	constructor(x, y, speed, rotation) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;



		// vx / vy
		this.vx = cos(rotation) * speed
		this.vy = sin(rotation) * speed

		this.rotation = this.rotateToMovement()
		
	}

	drawArrow() {
		push()
		translate(this.x, this.y)
		noStroke()
		beginShape()
		vertex(-50, -25)
		vertex(0, -25)
		vertex(0, -50)
		vertex(50, 0)
		vertex(0, 50)
		vertex(0, 25)
		vertex(-50, 25)
		vertex(-50, -25)
		endShape()
		pop();
		
		this.moveArrow()
	}

	//rotate arrow in direction of movement
	rotateToMovement() {
		return tan(this.angle)
	}

	//move arrow - same as for Ball class
	moveArrow(){
		this.x += this.vx
		this.y += this.vx
	}

}