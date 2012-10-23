var getBulletCount = function() {
	var bullet_count = $(".player_bullet");
	return bullet_count.length;
};

var drawBullet = function(playerElementID, shape, color, type) {
	var pos = $(playerElementID).position(); // get current position of player
	var bullet_id; // get count of bullets to create unique ids
	var bullet_width, bullet_height;
	var canvas_element; // Generate canvas element for new bullet

	if(shape == 'circle') {
		bullet_width = 30;
		bullet_height = 30;
	}
	else if(shape == 'square'){
		bullet_width = 25;
		bullet_height = 25;
	}
	else {
		bullet_width = 30;
		bullet_height = 30;
	}

	if(type == "player") {
		bullet_id = 'player_bullet' + (Math.floor(getBulletCount() * Math.random() * Math.PI));
		canvas_element = $("<canvas class='player_bullet' id='"+bullet_id+"' height='"+bullet_height+"' width='"+bullet_width+"'></canvas>");

	}
	else if(type == "enemy") {
		bullet_id = 'enemy_bullet' + (Math.floor(getBulletCount() * Math.random() * Math.PI));
		canvas_element = $("<canvas class='enemy_bullet' id='"+bullet_id+"' height='"+bullet_height+"' width='"+bullet_width+"'></canvas>");
	}

	$(canvas_element).css('position','absolute');
	$(canvas_element).css('top',pos.top + 'px');
	$(canvas_element).css('left',(pos.left + 35) + 'px');

	// Append new bullet to #game_container
	$("#game_container").append(canvas_element);

	// Draw shape of bullet
	if(shape == "circle") {
		drawCircle("#" + bullet_id, $(canvas_element).width() / 2, $(canvas_element).height() / 2, 12.5, 0, 2 * Math.PI,color);
	}
	else if(shape == "square") {
		drawSquare("#" + bullet_id,0,0,25,25,color);
	}
	else {
		drawCircle("#" + bullet_id, $(canvas_element).width() / 2, $(canvas_element).height() / 2, 12.5, 0, 2 * Math.PI,color);
	}

	// Return ID of bullet so that we can animate it
	return "#" + bullet_id;
};