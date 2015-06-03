//Player contructor creates the player with a set mark ("X" or "O") and active state (true or false)

function Player(mark, active) {
  this.mark = mark
  this.active = active
};

//toggleTurn will switch a player's active state to the opposite of its current

Player.prototype.toggleTurn = function() {
  if (this.active === false) {
    this.active = true
  } else {
    this.active = false
  }
};

//Board constructor will create a 2D array with each space being filled with null. It will always create a square and the size is determined by the argument sideLength. 3 is the standard sideLength for tic-tac-toe.

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

//spaces will return the total number of spaces on the board.

Board.prototype.spaces = function() {
  var totalSpaces = null;
  this.board.forEach(function(space) {
    totalSpaces += space.length;
  });
  return totalSpaces;
};

//mark will mark a (x, y) coord with the passed in character ("X" or "O")

Board.prototype.mark = function (xcoord, ycoord, mark) {
  if (!(this.isMarked(xcoord, ycoord))) {
    this.board[xcoord][ycoord] = mark
  }
};

//isMarked will return the current mark of a space. If space is not marked it will return false.

Board.prototype.isMarked = function (xcoord, ycoord) {
  if (this.board[xcoord][ycoord] !== null) {
    return (this.board[xcoord][ycoord])
  } else {
    return false;
  }
};
