var memory_array = [
  'A', 'A',
  'B', 'B',
  'C', 'C',
  'D', 'D',
  'E', 'E',
  'F', 'F',
  'G', 'G',
  'H', 'H',
  'I', 'I',
  'J', 'J',
  'K', 'K',
  'L', 'L'
];

var memoryValues = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

Array.prototype.memory_tile_shuffle = function() {     
  var i = this.length, j, temp;                       
                                                      
  while (--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
};  // functions declared in this way should end with a semi-colon.

function newBoard() {
  var output = '';
  tiles_flipped = 0;

  memory_array.memory_tile_shuffle();

  for (var i = 0; i < memory_array.length; i++) {
    output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
  }

  document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile, val) {
  if (tile.innerHTML == '' && memoryValues.length < 2) {
    tile.style.background = '#FFF';
    tile.innerHTML = val;

    if (memoryValues.length == 0) {
      memoryValues.push(val);
      memory_tile_ids.push(tile.id);
    } else if (memoryValues.length == 1) {
      memoryValues.push(val);
      memory_tile_ids.push(tile.id);

      if (memoryValues[0] == memoryValues[1]) {
        tiles_flipped += 2;

        // clear both arrays
        memoryValues = [];
        memory_tile_ids = [];

        // check to see if the whole board is cleared
        if (tiles_flipped == memory_array.length) {
        	
          alert('Board cleared... generating new board');

          document.getElementById('memory_board').innerHTML = '';
          newBoard();
        }
      } else {
        var flipBack = function() {   // in-line function declarations should be declared like this
          var tile1 = document.getElementById(memory_tile_ids[0]);
          var tile2 = document.getElementById(memory_tile_ids[1]);

          tile1.style.background = 'url(\'../images+more/blackWhite.jpg\') 30px 30px';
          tile1.innerHTML = '';
          tile2.style.background = 'url(\'../images+more/blackWhite.jpg\') 30px 30px';
          tile2.innerHTML = '';

          // clear both arrays
          memoryValues = [];
          memory_tile_ids = [];
        };  // and again we end this type of function declaration with a semi-colon

        setTimeout(flipBack, 700);
      }
    }
  }
}