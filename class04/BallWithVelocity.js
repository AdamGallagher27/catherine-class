class BallWithVelocity {
	constructor(x , y, speed, radius, angle){
		this.x = x
		this.y = y
		this.speed = speed
		this.radius = radius
		this.angle = angle

		// vx / vy
		this.vx = cos(this.angle) * this.speed
		this.vy = sin(this.angle) * this.speed
	}


	intersects(other) {
		const x1 = this.x
		const y1 = this.y

		const x2 = other.x
		const y2 = other.y

		const dx = x2 - x1
		const dy = y2 - y1

		const leng = Math.sqrt((dx * dx) + (dy * dy))

		if(leng < this.radius / 2){
			console.log('colision')
		}
	}

	bounce() {
		const screenSize = 1000

		// right
		if(this.x > screenSize - (this.radius / 2)) {
			this.vx = this.vx * -1
		}

		// left
		if(this.x < 0 + (this.radius / 2)) {
			this.vx = this.vx * -1
		}

		// bottom
		if(this.y > screenSize - (this.radius / 2)) {
			this.vy = this.vy * -1
		}

		// top
		if(this.y < 0 + (this.radius / 2)) {
			this.vy = this.vy * -1
		}
	}

	drawBall() {
		fill(255)
		ellipse(this.x, this.y, this.radius)
		this.moveBall()
		this.bounce()
	}

	moveBall() {
		this.x += this.vx
		this.y += this.vy
	}
	
}