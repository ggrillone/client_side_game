/*
	* The Shape class the base class for all shapes.
	* The purpose of this class is to generate a new
	* canvas element to draw on and append it to the DOM.
*/
var Shape = function(elementID, width, height, appendToElement) {
	this.elementID = elementID;
	this.width = width;
	this.height = height;
	this.appendToElement = appendToElement;
	this.canvasElement = null;
};

$.extend(Shape.prototype, {
	generateCanvasWithID: function() {
		// Source: http://stackoverflow.com/questions/10433046/creating-a-canvas-element-and-setting-its-width-and-height-attributes
		this.canvasElement = $("<canvas/>",
			{ 'id' : this.elementID })
			.width(this.width)
			.height(this.height);
		$(this.appendToElement).append($(this.canvasElement));
	},

	generateCanvasWithClass: function() {
		this.canvasElement = $("<canvas/>",
			{ 'class' : this.elementID })
			.width(this.width)
			.height(this.height);
		$(this.appendToElement).append($(this.canvasElement));
		return this.canvasElement;
	},

	getCanvas: function() {
		return this.canvasElement;
	}
});