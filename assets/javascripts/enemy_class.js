/*
 * The purpose of the Enemy class is to draw an enemy by generating
 * a new canvas element for the enemy and drawing the enemy shape.
*/
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
	// Store the shape object for the Enemy
	this.shape_object = null;
};

// Extending and inheriting from multiple classes:
// http://www.bennadel.com/blog/2039-Experimenting-With-Multiple-Class-Inheritance-In-Javascript.htm

Enemy.prototype = {
	/*
	 * The init() method for Enemy draws the enemy on the page. By default an enemy is a square.
	 * @param canvasElement The canvas element to draw the enemy on
	 * @param x_value The x position of the enemey shape, relative to the canvasElement
	 * @param y_value The y position of the enemy shape, relative to the canvasElement
	 * @param width The width of the enemy
	 * @param height The height of the enemy
	 * @param fill_color The fill color of the enemy, if this is 'none' then it has no fill color
	 * @param border_color The color of the border of the enemy, if this is 'none' then it has no border
	 * @param border_width The thickness of the border
	*/
	init: function(canvasElement, x_value, y_value, width, height, fill_color, border_color, border_width) {
		this.canvasElement = canvasElement;
		this.x = x_value;
		this.y = y_value;
		this.width = width;
		this.height = height;
		this.fill_color = fill_color;
		this.border_color = border_color;
		this.border_width = border_width;

		this.shape_object = new Square(this.canvasElement, this.x, this.y, this.width, this.height, this.fill_color, this.border_color, this.border_width);
		this.shape_object.draw();
	},

	/*
	 * The initWithSquare() method draws a square enemy.
	 * @param canvasElement The canvas element to draw the enemy on
	 * @param x_value The x position of the enemey shape, relative to the canvasElement
	 * @param y_value The y position of the enemy shape, relative to the canvasElement
	 * @param width The width of the enemy
	 * @param height The height of the enemy
	 * @param fill_color The fill color of the enemy, if this is 'none' then it has no fill color
	 * @param border_color The color of the border of the enemy, if this is 'none' then it has no border
	 * @param border_width The thickness of the border
	*/
	initWithSquare: function(canvasElement, x_value, y_value, width, height, fill_color, border_color, border_width) {
		this.init(canvasElement, x_value, y_value, width, height, fill_color, border_color, border_width);
	},

	/*
	 * The initWithCircle() method draws a circular enemy.
	 * @param canvasElement The canvas element to draw the enemy on
	 * @param x_value The x position of the enemey shape, relative to the canvasElement
	 * @param y_value The y position of the enemy shape, relative to the canvasElement
	 * @param radius The radius of the enemy (size)
	 * @param start The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
	 * @param stop The ending angle, in radians
	 * @param fill_color The fill color of the enemy, if this is 'none' then it has no fill color
	 * @param border_color The color of the border of the enemy, if this is 'none' then it has no border
	 * @param border_width The thickness of the border
	*/
	initWithCircle: function(canvasElement, x_value, y_value, radius, start, stop, fill_color, border_color, border_width) {
		this.canvasElementID = canvasElement;
		this.x = x_value;
		this.y = y_value;
		this.radius = radius;
		this.start = start;
		this.stop = stop;
		this.fill_color = fill_color;
		this.border_color = border_color;
		this.border_width = border_width;

		this.shape_object = new Circle(this.canvasElement, this.x, this.y, this.radius, this.start, this.stop, this.fill_color, this.border_color, this.border_width);
		this.shape_object.draw();
		},

	/*
	 * Calls to Square/Circle Class methods
	*/

	// set fill color
	changeFill: function(fill_color) {
		this.shape_object.changeFill(fill_color);
	},

	// set border color
	changeBorder: function(border_color, border_width) {
		this.shape_object.changeBorder(border_color,border_width);
	}

};

Enemy.prototype = $.extend(
	{},
	Shape.prototype,
	Square.prototype,
	Circle.prototype,
	Enemy.prototype
);