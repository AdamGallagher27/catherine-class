class BallWithVelocity {
	constructor(x , y, speed , radius, angle){
		this.x = x
		this.y = y
		this.speed = speed
		this.radius = radius
		this.angle = angle

		this.vx = cos(this.angle)
		this.vy = sin(this.angle)
	}


	drawBall() {
		ellipse(this.x, this.y, this.radius)
	}

	moveBall() {
		rotate(this.angle)
		this.x += this.speedX
		this.y += this.speedY
	}
	
}