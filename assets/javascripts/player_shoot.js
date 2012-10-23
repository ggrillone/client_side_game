var playerShootBullet = function(playerElementID, shape, color, speed, direction, key_press) {
	if(keyPressed(key_press) == 'space') {
		var bullet_speed = speed * 100;
		var character = $(playerElementID);
		var bullet = drawBullet(playerElementID, shape, color, "player");

		// Animate bullet up
		if(direction == "up") {
			$(bullet).animate({ top: "-=500px" }, { duration: bullet_speed, step: function(current_top) {
				bulletWallCollision(bullet, 450, 1150, 173, 650);
				bulletEnemyCollision(bullet,current_top);
			}});
		}
		// Animate bullet left
		else if(direction == "left") {
			$(bullet).animate({ left: "-=800px" }, { duration: bullet_speed, step: function(current_left) {
				bulletWallCollision(bullet, 450, 1150, 173, 650);
				bulletEnemyCollision(bullet,current_top);
			}});
		}
		// Animate bullet right
		else if(direction == "right") {
			$(bullet).animate({ left: "+=800px" }, { duration: bullet_speed, step: function(current_left) {
				bulletWallCollision(bullet, 450, 1150, 173, 650);
				bulletEnemyCollision(bullet,current_top);
			}});
		}
		// Animate bullet down
		else if(direction == "down") {
			$(bullet).animate({ top: "+=500px" }, { duration: bullet_speed, step: function(current_top) {
				bulletWallCollision(bullet, 450, 1150, 173, 650);
				bulletEnemyCollision(bullet,current_top);
			}});
		}
		else {
			alert('Incorrect bullet direction given');
		}
	}
};

