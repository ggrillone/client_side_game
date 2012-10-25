/*
	* The Shape class the base class for all shapes.
	* The purpose of this class is to generate a new
	* canvas element to draw on and append it to the DOM.
	* @param elementName the name to give to the canvas element that will be generated
	* @param width The width of the canvas element
	* @param height The height of the canvas element
	* @param appendToElement the DOM element to append the new canvas element to
*/
var Shape = function(elementName, width, height, appendToElement) {
	this.elementName = elementName;
	this.width = width;
	this.height = height;
	this.appendToElement = appendToElement;
	this.canvasElement = null;
};

/*
 * Functions for the Shape class.
*/
$.extend(Shape.prototype, {
	// Append a new canvas element with the an id attribute, to the DOM
	generateCanvasWithID: function() {
		// Source: http://stackoverflow.com/questions/10433046/creating-a-canvas-element-and-setting-its-width-and-height-attributes
		this.canvasElement = $("<canvas/>",
			{ 'id' : this.elementName })
			.width(this.width)
			.height(this.height);
		$(this.appendToElement).append($(this.canvasElement));
	},

	// Append a new canvas with the class name attribute, to the DOM
	generateCanvasWithClass: function() {
		this.canvasElement = $("<canvas/>",
			{ 'class' : this.elementName })
			.width(this.width)
			.height(this.height);
		$(this.appendToElement).append($(this.canvasElement));
		return this.canvasElement;
	},

	/*
	 ********************
	 * Getter & Setters *
	 ********************
	*/

	// get canvas element
	getCanvas: function() {
		return this.canvasElement;
	}
});