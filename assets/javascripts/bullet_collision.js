var removeElement = function(elementID) {
	$(elementID).stop();
	$(elementID).hide();
	$(elementID).remove();
};

var bulletWallCollision = function(elementID, left_boundary, right_boundary, top_boundary, bottom_boundary) {
	var bullet = $(elementID);

	// Left boundary
	if($(bullet).offset().left <= left_boundary) {
		removeElement($(bullet));
	}
	// Right boundary
	if($(bullet).offset().left >= right_boundary) {
		removeElement($(bullet));
	}
	// Top boundary
	if($(bullet).offset().top <= top_boundary) {
		removeElement($(bullet));
	}
	// Bottom boundary
	if($(bullet).position().top >= bottom_boundary) {
		removeElement($(bullet));
	}
};

// Source of overlaps() function: http://jsfiddle.net/98sAG/
var overlaps = (function () {
    function getPositions( elem ) {
        var pos, width, height;
        pos = $( elem ).position();
        width = $( elem ).width();
        height = $( elem ).height();
        return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
    }

    function comparePositions( p1, p2 ) {
        var r1, r2;
        r1 = p1[0] < p2[0] ? p1 : p2;
        r2 = p1[0] < p2[0] ? p2 : p1;
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function ( a, b ) {
        var pos1 = getPositions( a ),
            pos2 = getPositions( b );
        return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
    };
})();

var bulletEnemyCollision = function(elementID, current_position) {
	var bullet = $(elementID);
	var enemies = $(".enemy");

	for(var i = 0;i < enemies.length; i++) {
		if(overlaps(enemies[i], bullet)) {
			var enemyID = $(enemies[i]).attr('id');
			enemyStopShoot(enemyID);
			removeElement($(bullet));
			removeElement($(enemies[i]));
		}
	}
};

var bulletPlayerCollision = function(elementID, current_position, playerID) {
	var bullet = $(elementID);
	var player = $(playerID);

	if(overlaps(player,bullet)) {
		removeElement($(bullet));
	}
};

