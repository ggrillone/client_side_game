var loadEnemies = function() {
	setInterval(function() {
		spawnEnemy("square","#D74A38",400, 'left');
		spawnEnemy("square","#D74A38",400, 'middle');
		spawnEnemy("square","#D74A38",400, 'right');

		loadEnemyWeapons("#main_character", "circle", "#420064", 10, "down");
	}, 10000);
};

var loadInitialEnemies = function() {
	spawnEnemy("square","#D74A38",400, 'left');
	spawnEnemy("square","#D74A38",400, 'middle');
	spawnEnemy("square","#D74A38",400, 'right');

	loadEnemyWeapons("#main_character", "circle", "#420064", 10, "down");
};