/* 
* Gets the key code and translates into
* more human readable form.
*
* w = 119
* a = 97
* s = 115
* d = 100
* q = 113
* r = 114
* enter = 13
* space = 32
* up (arrow key) = 38
* left (arrow key) = 37
* down (arrow key) = 40
* right (arrow key) = 39
*/
var keyPressed = function(key_pressed) {
	switch(key_pressed) {
		case 119: case 38:
			return 'up';

		case 97: case 37:
			return 'left';

		case 115: case 40:
			return 'down';

		case 100: case 39:
			return 'right';

		case 13:
			return 'enter';

		case 32:
			return 'space';

		default:
			return 'other';
	}
};

var sideScrollMovement = function(elementID, speed, key_press) {
	var character = $(elementID);

	if(keyPressed(key_press) != 'other') {
		switch(keyPressed(key_press)) {
			case 'left':
				character.css("left", "-=" + speed);
				break;

			case 'right':
				character.css("left", "+=" + speed);
				break;
		}
	}
};

var fourWayMovement = function(elementID, speed, key_press) {
	var character = $(elementID);

	if(keyPressed(key_press) != 'other') {
		switch(keyPressed(key_press)) {
			case 'up':
				character.css("top", "-=" + speed);
				break;

			case 'left':
				character.css("left", "-=" + speed);
				break;

			case 'down':
				character.css("top", "+=" + speed);
				break;

			case 'right':
				character.css("left", "+=" + speed);
				break;
		}
	}
};	