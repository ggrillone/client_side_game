var getEnemyCount = function() {
	var enemy_count = $(".enemy");
	return enemy_count.length;
};

var drawEnemy = function(shape, color, position) {
	enemy_id = 'enemy' + position + getEnemyCount(); // get count of bullets to create unique ids

	// Generate canvas element for new bullet
	var canvas_element = $("<canvas class='enemy' id='"+enemy_id+"' height='50' width='50'></canvas>");
	
	if(position == "middle") {
		$(canvas_element).css('left',($("#game_container").width() * 1));
	}
	else if(position == "right") {
		$(canvas_element).css('left',($("#game_container").width() * 1.3));
	}

	// Append new bullet to #game_container
	$("#game_container").append(canvas_element);

	// Draw shape of bullet
	if(shape == "circle") {
		drawCircle("#" + enemy_id, $(canvas_element).width(), $(canvas_element).height(), 50, 0, 2 * Math.PI,color);
	}
	else if(shape == "square") {
		drawSquare("#" + enemy_id,0,0,50,50,color);
	}
	else {
		drawCircle("#" + enemy_id,95,50,50,0,30*Math.PI,color);
	}

	// Return ID of enemy so that we can animate it
	return "#" + enemy_id;
};