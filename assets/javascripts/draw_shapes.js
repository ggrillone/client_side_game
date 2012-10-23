var drawSquare = function(canvasElementID, x_val, y_val, width, height, fill_color) {
	var canvas_element = $(canvasElementID);
	var ctx = canvas_element[0].getContext("2d");
	ctx.fillStyle=fill_color;
	ctx.fillRect(x_val,y_val,width,height);
};

var drawCircle = function(canvasElementID, x_val, y_val, radius, start, stop, fill_color) {
	var canvas_element = $(canvasElementID);
	var ctx = canvas_element[0].getContext("2d");
	ctx.beginPath();
	ctx.arc(x_val,y_val,radius,start,stop);
	ctx.fillStyle = fill_color;
	ctx.fill();
	ctx.stroke();
};