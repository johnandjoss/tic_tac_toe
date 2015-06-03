function Player(mark, active) {
  this.mark = mark
  this.active = active
};

Player.prototype.toggleTurn = function() {
  if (this.active === false) {
    this.active = true
  } else {
    this.active = false
  }
};

function Board(sideLength) {
  this.sideLength = sideLength;
  var board = [];
  for (var x = 0; x < sideLength; x++) {
    board.push([])
    for (var y = 0; y < sideLength; y++) {
      board[x].push(null)
    }
  }
  this.board = board
};

Board.prototype.spaces = function() {
  var totalSpaces = null;
  this.board.forEach(function(space) {
    totalSpaces += space.length;
  });
  return totalSpaces;
};
