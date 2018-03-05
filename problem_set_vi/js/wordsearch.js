// word search game

var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var game = [];

game[0] = new Array ('b', 'a', 'l', 'l', 'g');

game[1] = new Array ('f', 'p', 'o', 'r', 's');

game[2] = new Array ('h', 'u', 'f', 'a', 'y');

game[3] = new Array ('g', 'f', 'n', 'h', 'g');

game[4] = new Array ('h', 'd', 'i', 'l', 'l');

//words = ball fun sand dill

var divWordGame = document.getElementById('puzzle');
divWordGame.innerHTML = game;

var divWordGamet = document.getElementById('words');
divWordGamet.innerHTML = '1. ball<br/>2. fun<br/>3.sand<br/>4.dill';