var Bullet = function(elementID, shape, color, type, bullet_direction) {
	this.elementID = elementID;
	this.shape = shape;
	this.color = color;
	this.type = type;
	this.bullet_direction = bullet_direction;
	this.radius = 25;
	this.height = null;
	this.width = null;

	if(this.shape == "circle") {
		this.height = 50;
		this.width = 100;
	}
	else if(this.shape == "square") {
		this.height = 50;
		this.width = 50;
	}
};

Bullet.prototype = {
	makeCanvas: function() {
		Shape.call(this, this.type, this.width, this.height, this.elementID);
		return (
			Shape.prototype.generateCanvasWithClass.call(this)
		);
	},

	drawBullet: function(canvasElement) {
		if(this.shape == "circle") {
			Circle.call(this, canvasElement, this.width / 2, this.height / 2, this.radius, 0, 2 * Math.PI, this.color);
			return (
				Circle.prototype.drawWithObject.call(this)
			);
		}
		else if(this.shape == "square") {

		}
	},

	shoot: function() {
		var bullet_canvas = this.makeCanvas();
		this.drawBullet(bullet_canvas);
	},

	setHeight: function(height) {
		this.height = height;
	},

	setWidth: function(width) {
		this.width = width;
	},

	setRadius: function(radius) {
		this.radius = radius;
	},

	setBulletDirection: function(direction) {
		this.bullet_direction = direction;
	}
};

Bullet.prototype = $.extend(
	{},
	Shape.prototype,
	Square.prototype,
	Circle.prototype,
	Bullet.prototype
);