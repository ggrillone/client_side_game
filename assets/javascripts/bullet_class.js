/*
 * The Bullet class is used to allow characters to shoot. It contains methods for drawing and
 * shooting bullets.
 * @param appendToElement the DOM element to append the new bullet to
 * @param shape The shape of the bullet. Can be a circle or square
 * @param fill_color The fill color of the bullet, if value is 'none' then the bullet has no fill
 * @param border_color The color of the bullet's border, if the value is 'none' then the bullet has no border
 * @param border_width The thickness of the bullet's border
 * @param elementName The name to give to the canvas element that will contain the Bullet
 * @param bullet_direct The direction to shoot the bullet
*/
var Bullet = function(appendToElement, shape, fill_color, border_color, border_width, elementName, bullet_direction) {
	this.appendToElement = appendToElement;
	this.shape = shape;
	this.fill_color = fill_color;
	this.border_color = border_color;
	this.border_width = border_width;
	this.elementName = elementName;
	this.bullet_direction = bullet_direction;
	this.radius = 25;
	this.height = 50;
	this.width = null;

	if(this.shape == "circle") {
		this.width = 100;
	}
	else if(this.shape == "square") {
		this.width = 50;
	}
};

Bullet.prototype = {
	// Generate the canvas element for the Bullet
	makeCanvas: function() {
		Shape.call(this, this.elementName, this.width, this.height, this.appendToElement);
		return (
			Shape.prototype.generateCanvasWithClass.call(this)
		);
	},

	/*
	 * Draw the Bullet.
	 * @param canvasElement The canvas element to draw the Bullet on
	*/
	drawBullet: function(canvasElement) {
		if(this.shape == "circle") {
			Circle.call(this, canvasElement, this.width / 2, this.height / 2, this.radius, 0, 2 * Math.PI, this.fill_color, this.border_color, this.border_width);
			return (
				Circle.prototype.drawWithObject.call(this)
			);
		}
		else if(this.shape == "square") {

		}
	},

	/*
	 * Shoot the bullet. This calls the makeCanvas() and drawBullet() methods
	 * to initialize the bullet.
	*/
	shoot: function() {
		var bullet_canvas = this.makeCanvas();
		this.drawBullet(bullet_canvas);
	},

	// Setter method for setting the height of the bullet
	setHeight: function(height) {
		this.height = height;
	},

	// Setter method for setting the width of the bullet
	setWidth: function(width) {
		this.width = width;
	},

	// Setter method for setting the radius of the bullet
	setRadius: function(radius) {
		if(this.shape == "circle") {
			this.radius = radius;
		}
	},

	// Setter method for setting the direction of the bullet
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