/*
 * The Square class extends the Shape class and serves the purpose
 * of drawing a square.
 * @param canvasElement The canvas element to draw the shape on
 * @param x_value The x position of the square in relation to the canvasElement
 * @param y_value The y position of the square in relation to the canvasElement
 * @param width The width of the square
 * @param height The height of the square
 * @param fill_color The fill color of the square, if none then do not fill square
 * @param border_color The border color of the square, if none then do not add border
 * @param border_width The thickness of the border around the square
*/
var Square = function(canvasElement, x_value, y_value, width, height, fill_color, border_color, border_width) {
	this.canvasElement = canvasElement;
	this.x = x_value;
	this.y = y_value;
	this.width = width;
	this.height = height;
	this.fill_color = fill_color;
	this.border_color = border_color;
	this.border_width = border_width;
};


Square.prototype = {
	// Draws a square based on the paramaters
	draw: function() {
		var canvas_element = $(this.canvasElement);
		var ctx = canvas_element[0].getContext("2d");

		if(this.border_color != "none") {
			ctx.lineWidth = this.border_width;
			ctx.strokeStyle = this.border_color;
			ctx.strokeRect(this.x, this.y, this.width, this.height);
		}
		if(this.fill_color != "none") {
			ctx.fillStyle = this.fill_color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	},

	/*
	 ********************
	 * Getter & Setters *
	 ********************
	*/

	// set fill color
	changeFill: function(fill_color) {
		this.fill_color = fill_color;

		this.draw();
	},

	// set border color and width
	changeBorder: function(border_color, border_width) {
		this.border_color = border_color;
		this.border_width = border_width;

		this.draw();
	}
};

Square.prototype = $.extend(
	{},
	Shape.prototype,
	Square.prototype
);