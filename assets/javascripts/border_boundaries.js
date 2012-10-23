var sideScrollBoundaries = function(elementID, left_boundary, right_boundary) {
	var character = $(elementID);

	// Left boundary
	if($(character).position().left <= left_boundary) {
		character.offset({left: left_boundary});
	}
	// Right boundary
	if($(character).position().left >= right_boundary) {
		character.offset({left: right_boundary});
	}
};

var fourWayBoundaries = function(elementID, left_boundary, right_boundary, top_boundary, bottom_boundary) {
	var character = $(elementID);

	// Left boundary
	if($(character).position().left <= left_boundary) {
		character.offset({left: left_boundary});
	}
	// Right boundary
	if($(character).position().left >= right_boundary) {
		character.offset({left: right_boundary});
	}
	// Top boundary
	if($(character).position().top <= top_boundary) {
		character.offset({top: top_boundary});
	}
	// Bottom boundary
	if($(character).position().top >= bottom_boundary) {
		character.offset({top: bottom_boundary});
	}
};