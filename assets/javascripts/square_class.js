var Square = function(canvasElement, x_value, y_value, width, height, fill_color) {
	this.canvasElement = canvasElement;
	this.x = x_value;
	this.y = y_value;
	this.width = width;
	this.height = height;
	this.fill_color = fill_color;
};


Square.prototype = {
	draw: function() {
		var canvas_element = $(this.canvasElement);
		var ctx = canvas_element[0].getContext("2d");
		ctx.fillStyle = this.fill_color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
};

Square.prototype = $.extend(
	{},
	Shape.prototype,
	Square.prototype
);