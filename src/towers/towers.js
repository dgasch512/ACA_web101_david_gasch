'use strict';

// Procedure Hanoi(disk, source, dest, aux)

// IF disk == 1, THEN 
//   move disk from source to defaultStatus
// else
//   Hanoi(disk -, source, aux, dest)
//   move disk from source to dest
//   Hanoi(disk - 1, aux, dest, source)
// END IF 

$(document).ready(function() {
	// Variables
	var holding = [],
		moves,
		disksNum = 4,
		minMoves = 127,
		$can = $("#can"),
		$tower = $can.find(".tower"),

	// Init Game
	function initGame(tower) {
		$tower.html("");
		moves = 0;
		$movesCount.html(0);
		holding = [];
		for (var i = 1; i <= disksNum; i++) {
			tower.prepend(
				$('<li class="disk disk-' + i + '" data-value="' + i + '"></li>')
			);
		}
	
	}

	// Game Logic

	function tower(tower) {
		var $disks = tower.children(),
			$topDisk = tower.find(":last-child"),
			topDiskValue = $topDisk.data("value"),
			$holdingDisk = $can.find(".hold");

		if ($holdingDisk.length !== 0) {
			if (topDiskValue === holding[0]) {
				$holdingDisk.removeClass("hold");
			} else if (topDiskValue === undefined || topDiskValue > holding[0]) {
				$holdingDisk.remove();
				tower.append(
					$(
						'<li class="disk disk-' +
							holding[0] +
							'" data-value="' +
							holding[0] +
							'"></li>'
					)
				);
				countMove();
			}
		} else if ($topDisk.length !== 0) {
			$topDisk.addClass("hold");
			holding[0] = topDiskValue;
		}
	}

	initGame($tower.eq(0));

	// Event Handlers
	$can.on("click", ".tower", function() {
		var $this = $(this);
		tower($this);
  });
});
