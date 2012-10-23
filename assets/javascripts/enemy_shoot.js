var enemyShootBullet = function(enemyElementID, playerElementID, shape, color, speed, direction) {
	var bullet_speed = speed * 100;
	var player = $(playerElementID);
	var enemy = $(enemyElementID);
	var bullet = drawBullet(enemy, shape, color, "enemy");

	// Animate bullet up
	if(direction == "up") {
		$(bullet).animate({ top: "-=400px" }, { duration: bullet_speed, step: function(current_top) {
			bulletWallCollision(bullet, 450, 1150, 173, 650);
			bulletPlayerCollision(bullet,current_top, player);
		}});
	}
	// Animate bullet left
	else if(direction == "left") {
		$(bullet).animate({ left: "-=800px" }, { duration: bullet_speed, step: function(current_left) {
			bulletWallCollision(bullet, 450, 1150, 173, 650);
			bulletPlayerCollision(bullet,current_top, player);
		}});
	}
	// Animate bullet right
	else if(direction == "right") {
		$(bullet).animate({ left: "+=800px" }, { duration: bullet_speed, step: function(current_left) {
			bulletWallCollision(bullet, 450, 1150, 173, 650);
			bulletPlayerCollision(bullet,current_top, player);
		}});
	}
	// Animate bullet down
	else if(direction == "down") {
		$(bullet).animate({ top: "+=500px" }, { duration: bullet_speed, step: function(current_top) {
			bulletWallCollision(bullet, 450, 1150, 173, 650);
			bulletPlayerCollision(bullet,current_top, player);
		}});
	}
	else {
		alert('Incorrect bullet direction given');
	}
};

var enemyStopShoot = function(enemyID) {
	clearInterval(enemyID);
};

