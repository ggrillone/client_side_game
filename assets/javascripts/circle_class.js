/*
 * The Circle class extends the Shape class and serves the purpose
 * of drawing a circle.
 * @param canvasElement The canvas element to draw the shape on
 * @param x_value The x position of the circle in relation to the canvasElement
 * @param y_value The y position of the circle in relation to the canvasElement
 * @param radius The radius of the circle (size)
 * @param start The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
 * @param stop The ending angle, in radians
 * @param fill_color The fill color of the circle, if none then do not fill circle
 * @param border_color The border color of the circle, if none then do not add border
 * @param border_width The thickness of the border around the circle
*/
var Circle = function(canvasElement, x_value, y_value, radius, start, stop, fill_color, border_color, border_width) {
	this.canvasElement = canvasElement;
	this.x = x_value;
	this.y = y_value;
	this.radius = radius;
	this.start = start;
	this.stop = stop;
	this.fill_color = fill_color;
	this.border_color = border_color;
	this.border_width = border_width;
};

$.extend(Circle.prototype, {
	// Draw a circle
	draw: function() {
		var canvas_element = $(this.canvasElement);
		var ctx = canvas_element[0].getContext("2d");
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, this.start, this.stop);
		if(this.fill_color != "none") {
			ctx.fillStyle = this.fill_color;
			ctx.fill();
		}
		if(this.border_color != "none") {
			ctx.lineWidth = this.border_width;
			ctx.strokeStyle = this.border_color;
			ctx.stroke();
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
});