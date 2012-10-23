/* Animate Enemies */

var strafeLeftRight = function(elementID, move_left, original_enemy_left, current_enemy_left) {
	if(((original_enemy_left - current_enemy_left) <= 80) && (move_left)) {
		$(elementID).css('left','-=2px');
	}
	else {
		if(((original_enemy_left - current_enemy_left) >= 0) && (!move_left)) {
			$(elementID).css('left','+=2px');
		}
	}
};

var animateEnemy = function(shape, color, speed, position) {
	var enemy = drawEnemy(shape, color, position);
	enemy_speed = speed * 100;
	var original_enemy_top = $(enemy).offset().top;
	var original_enemy_left = $(enemy).offset().left;
	var move_left = true;
	//alert(original_enemy_top); //172
	//alert(original_enemy_left); //532

	$(enemy).animate({ top: "+=500px"}, { duration: enemy_speed, step: function(current_position) {
		var current_enemy_left = $(enemy).offset().left;

		if(current_position > (original_enemy_top)) {
			if((original_enemy_left - current_enemy_left) == 80) {
				move_left = false;
			}
			if((original_enemy_left - current_enemy_left) === 0) {
				move_left = true;
			}
			strafeLeftRight(this, move_left, original_enemy_left, current_enemy_left);
		}
	}});
};

var spawnEnemy = function(shape, color, speed, position) {
	animateEnemy(shape, color, speed, position);
};

/* Have Enemies Shoot */

var enemiesShoot = function(enemyID, playerID, shape, color, speed, direction) {
	var dynamic_var_name = enemyID.split("#")[1];
	eval("var " + dynamic_var_name + " = '"+	setInterval(function() { enemyShootBullet(enemyID, playerID, shape, color, speed, direction); }, Math.floor(Math.random() * 10000))+"'");
	//alert($(enemyID.split("#")[1]));
	/*setInterval(function() { 
		enemyShootBullet(enemyID, playerID, shape, color, speed, direction);
	}, Math.floor(Math.random() * 10000));*/
};

var loadEnemyWeapons = function(playerID, shape, color, speed, direction) {
	var enemies = $(".enemy");
	for(var i = 0;i < enemies.length;i++) {
		var enemyID = "#" + $(enemies[i]).attr('id');
		enemiesShoot(enemyID, playerID, shape, color, speed, direction);
	}
};