var Circle = function(canvasElement, x_value, y_value, radius, start, stop, fill_color) {
	this.canvasElement = canvasElement;
	this.x = x_value;
	this.y = y_value;
	this.radius = radius;
	this.start = start;
	this.stop = stop;
	this.fill_color = fill_color;
};

$.extend(Circle.prototype, {
	draw: function() {
		var canvas_element = $(this.canvasElement);
		var ctx = canvas_element[0].getContext("2d");
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, this.start, this.stop);
		ctx.fillStyle = this.fill_color;
		ctx.fill();
		ctx.stroke();
	},

	drawWithObject: function() {
		var canvas_element = $(this.canvasElement);
		var ctx = canvas_element[0].getContext("2d");
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, this.start, this.stop);
		ctx.fillStyle = this.fill_color;
		ctx.fill();
		ctx.stroke();
	}
});