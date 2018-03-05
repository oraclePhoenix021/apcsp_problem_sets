var decideWinner = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let msg = document.getElementById('message');
let BLANK = 0, X = 1, O = -1;
let currentPlayer = X;
var gameOver = false, gameOver1 = false, gameOver2 = false, gameOver3 = false,
    gameOver4 = false, gameOver5 = false, gameOver6 = false, gameOver7 = false,
    gameOver8 = false;
var gameIsOver = false;

function displayTurn () {
   msg.textContent = ((currentPlayer == X)? 'X': 'O') + '\'s turn.';
}

function determineWinner() {
	var xes = 0;
	var os = 0;
	var ties = 0;
	function print() {
	    console.log('X: ' + xes);
	    console.log('O: ' + os);
	    console.log('Tie: ' + ties);
	}
	if (!(decideWinner.includes(-1))){
		gameIsOver = true;
		for (var i = 0; i < decideWinner.length; i++){
			if (decideWinner[i] == 0){
				xes++;
			} else if (decideWinner[i] == 1){
				os++;
			} else {
				ties++;
			}
		}
		if (xes > os){
			msg.textContent = 'X wins!';
			print();
			return;
		} else if (os > xes){
			msg.textContent = 'O wins!';
			print();
			return;
		} else {
			msg.textContent = 'Tie!';
			print();
			return;
		}
	}
}


// RUN EVERYTHING
function runEverything(id, boardNum, over) {
let canvas = document.getElementById(id),
    ctx = canvas.getContext('2d'),
    cellSize = 50,
    map = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
    ],
    winPatterns = [
        0b111000000, 0b000111000, 0b000000111, // Rows
        0b100100100, 0b010010010, 0b001001001, // Columns
        0b100010001, 0b001010100, // Diagonals
    ],
    mouse = {
        x: -1,
        y: -1,
    };


canvas.width = canvas.height = 3 * cellSize;

canvas.addEventListener('mouseout', function () {
    mouse.x = mouse.y = -1;
});

canvas.addEventListener('mousemove', function (e) {
    let x = e.pageX - canvas.offsetLeft,
        y = e.pageY - canvas.offsetTop;

    mouse.x = x;
    mouse.y = y;
});

canvas.addEventListener('click', function (e) {
    play(getCellByCoords(mouse.x, mouse.y));
});

displayTurn();


function play (cell) {
    if (over) return;

    //if (map[cell] != BLANK) {
    //    msg.textContent = 'Position taken.';
    //    return;
    //}

    map[cell] = currentPlayer;

    let winCheck = checkWin(currentPlayer);

    if (winCheck != 0) {
        over = true;
        if (currentPlayer == X) {
        	decideWinner[boardNum] = 0;
        } else {
        	decideWinner[boardNum] = 1;
        }
        console.log(decideWinner);
        determineWinner();
        if (gameIsOver == true){ return; }
        currentPlayer *= -1;
        return;
    } else if (map.indexOf(BLANK) == -1) {
        over = true;
        decideWinner[boardNum] = 2;
        console.log(decideWinner);
        determineWinner();
        if (gameIsOver == true){ return; }
        currentPlayer *= -1;
        return;
    }

    currentPlayer *= -1;
    

    displayTurn();
}

function checkWin (player) {
    let playerMapBitMask = 0;
    for (let i = 0; i < map.length; i++) {
        playerMapBitMask <<= 1;
        if (map[i] == player)
            playerMapBitMask += 1;
    }

    for (let i = 0; i < winPatterns.length; i++) {
        if ((playerMapBitMask & winPatterns[i]) == winPatterns[i]) {
            return winPatterns[i];
        }
    }

    return 0;
}

function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    fillBoard();

    function drawBoard () {
        ctx.strokeStyle = '#686868';
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(cellSize, 0);
        ctx.lineTo(cellSize, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cellSize * 2, 0);
        ctx.lineTo(cellSize * 2, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, cellSize);
        ctx.lineTo(canvas.width, cellSize);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, cellSize * 2);
        ctx.lineTo(canvas.width, cellSize * 2);
        ctx.stroke();
    }

    function fillBoard () {
        ctx.strokeStyle = '#686868';
        ctx.lineWidth = 5;
        for (let i = 0; i < map.length; i++) {
            let coords = getCellCoords(i);

            ctx.save();
            ctx.translate(coords.x + cellSize / 2, coords.y + cellSize / 2);
            if (map[i] == X) {
                drawX();
            } else if (map[i] == O) {
                drawO();
            }
            ctx.restore();
        }
    }

    function drawX () {
        ctx.beginPath();
        ctx.moveTo(-cellSize / 3, -cellSize / 3);
        ctx.lineTo(cellSize / 3, cellSize / 3);
        ctx.moveTo(cellSize / 3, -cellSize / 3);
        ctx.lineTo(-cellSize / 3, cellSize / 3);
        ctx.stroke();
    }

    function drawO () {
        ctx.beginPath();
        ctx.arc(0, 0, cellSize / 3, 0, Math.PI * 2);
        ctx.stroke();
    }

    requestAnimationFrame(draw);
}

function getCellCoords (cell) {
    let x = (cell % 3) * cellSize,
        y = Math.floor(cell / 3) * cellSize;

    return {
        'x': x,
        'y': y,
    };
}

function getCellByCoords (x, y) {
    return (Math.floor(x / cellSize) % 3) + Math.floor(y / cellSize) * 3;
}

draw();

} // end RUN EVERYTHING

runEverything('ttt', 0, gameOver);
runEverything('ttt1', 1, gameOver1);
runEverything('ttt2', 2, gameOver2);
runEverything('ttt3', 3, gameOver3);
runEverything('ttt4', 4, gameOver4);
runEverything('ttt5', 5, gameOver5);
runEverything('ttt6', 6, gameOver6);
runEverything('ttt7', 7, gameOver7);
runEverything('ttt8', 8, gameOver8);

// while (!(gameOver && gameOver1 && gameOver2 && gameOver3 && gameOver4 && gameOver5 && gameOver6 && gameOver7 && gameOver8)){
// 	displayTurn();
	
// }

// if (gameOver && gameOver1 && gameOver2 && gameOver3 && gameOver4 && gameOver5 && gameOver6 && gameOver7 && gameOver8){
// 	msg.textContent = ((currentPlayer == X)? 'O': 'X') + '\' wins!';
// 	console.log(((currentPlayer == X)? 'O': 'X') + '\' wins!');
// }

// function determineWinner() {
// 	var xes = 0;
// 	var os = 0;
// 	var ties = 0;
// 	if (!(decideWinner.includes(-1))){
// 		for (var i = 0; i < decideWinner.length; i++){
// 			if (decideWinner[i] == 0){
// 				xes++;
// 			} else if (decideWinner[i] == 1){
// 				os++;
// 			} else {
// 				ties++;
// 			}
// 		}
// 	}
// 	if (xes > os){
// 		msg.textContent = 'X wins!';
// 	} else if (os > xes){
// 		msg.textContent = 'O wins!';
// 	} else {
// 		msg.textContent = 'Tie!';
// 	}
// }