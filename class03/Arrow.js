//Arrow class
class Arrow {
	constructor(x, y, rotation) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		//rotation of arrow
		this.rotation = rotation;
	}
	//function to draw the arrow
	drawArrow() {
		push();

		this.calcDistance()

		//translate from the top left corner to x and y of object
		translate(this.x, this.y);
		//rotate by rotation value of object
		rotate(this.rotation);
		// line(-50, -25, 0, -25);
		// line(0, -25, 0, -50);
		// line(0, -50, 50, 0);
		// line(50, 0, 0, 50);
		// line(0, 50, 0, 25);
		// line(0, 25, -50, 25);
		// line(-50, 25, -50, -25);

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
		
	}

	calcDistance() {
		const x1 = this.x
		const y1 = this.y

		const x2 = mouseX
		const y2 = mouseY

		const dx = x2 - x1
		const dy = y2 - y1

		const leng = Math.sqrt((dx * dx) + (dy * dy))

		console.log(leng)
	}
	

}