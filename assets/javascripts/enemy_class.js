var Enemy = function() {
	// Circle and Square
	this.canvasElement = null;
	this.x = null;
	this.y = null;
	this.fill_color = null;
	// Square
	this.width = null;
	this.height = null;
	// Circle
	this.radius = null;
	this.start = null;
	this.stop = null;
};

// Extending and inheriting from multiple classes:
// http://www.bennadel.com/blog/2039-Experimenting-With-Multiple-Class-Inheritance-In-Javascript.htm

Enemy.prototype = {
	init: function(canvasElement, x_value, y_value, width, height, fill_color) {
		this.canvasElement = canvasElement;
		this.x = x_value;
		this.y = y_value;
		this.width = width;
		this.height = height;
		this.fill_color = fill_color;

		Square.call(this, this.canvasElement, this.x, this.y, this.width, this.height, this.fill_color);

		return(
			Square.prototype.draw.call(this)
		);
	},

	initWithSquare: function(canvasElement, x_value, y_value, width, height, fill_color) {
		this.init(canvasElement, x_value, y_value, width, height, fill_color);

		Square.call(this, this.canvasElement, this.x, this.y, this.width, this.height, this.fill_color);

		return(
			Square.prototype.draw.call(this)
		);
	},

	initWithCircle: function(canvasElement, x_value, y_value, radius, start, stop, fill_color) {
		this.canvasElementID = canvasElement;
		this.x = x_value;
		this.y = y_value;
		this.radius = radius;
		this.start = start;
		this.stop = stop;
		this.fill_color = fill_color;

		Circle.call(this, this.canvasElement, this.x, this.y, this.radius, this.start, this.stop, this.fill_color);

		return(
			Circle.prototype.draw.call(this)
		);
	}
};

Enemy.prototype = $.extend(
	{},
	Square.prototype,
	Circle.prototype,
	Enemy.prototype
);