$(document).ready(function() {

	var canvasElem = new Shape("mycanvas", 300, 150, "#container2");
	canvasElem.generateCanvasWithID();

	//var my_square = new Square(canvasElem.getCanvas(), 0, 0, 100, 100, "#0F67A1");
	//my_square.draw();
	//var my_circle = new Circle(canvasElem.getCanvas(), 150, 75, 50, 0, 2 * Math.PI, "#0F67A1");
	//my_circle.draw();
	var enemy = new Enemy();
	enemy.initWithSquare(canvasElem.getCanvas(), 30, 30, 100, 100, "#0F67A1", "red", 5);
	//enemy.initWithCircle(canvasElem.getCanvas(), 150, 75, 50, 0, 2 * Math.PI, "#0F67A1");
	enemy.changeFill("red");
	enemy.changeBorder("green");

	var bullet = new Bullet("#game_container", "circle", "#88B541", "red", 5, "enemy_bullet", "up");
	bullet.shoot();

	//drawSquare("#main_character",0,0,100,100,"#0F67A1");
	//loadInitialEnemies();
	//loadEnemies();

	// var canShoot = true;

	// $(document).keydown(function(event) {
	// 	var key_press = event.keyCode || event.which;
	// 	sideScrollMovement("#main_character",25,key_press);
	// 	sideScrollBoundaries("#main_character", 440, 1140);
	// 	//fourWayMovement("#main_character",25,key_press);
	// 	//fourWayBoundaries("#main_character", 440, 1140, 173, 573);
	// 	if(canShoot) {
	// 		playerShootBullet("#main_character", "circle", "#5B9058", 10, "up", key_press);
	// 		canShoot = false;
	// 	}
	// });

	// $(document).keyup(function(event) {
	// 	var key_press = event.keyCode || event.which;
	// 	if(keyPressed(key_press) == 'space') {
	// 		canShoot = true;
	// 	}
	// });
});