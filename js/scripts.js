//Player contructor creates the player with a set mark ("X" or "O") and active state (true or false)

function Player(mark, active) {
  this.mark = mark
  this.isActive = active
};

//toggleTurn will switch a player's active state to the opposite of its current

Player.prototype.toggleTurn = function() {
  if (this.isActive === false) {
    this.isActive = true
  } else {
    this.isActive = false
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

//

function Game(boardSize) {
  var player1 = new Player("X", true);
  var player2 = new Player("O", false);
  var board = new Board(boardSize);
  this.player1 = player1
  this.player2 = player2
  this.board = board
};

Game.prototype.whoseTurn = function () {
   if (this.player1.isActive){
     return this.player1
   } else {
     return this.player2
   }
};

Game.prototype.changeTurn = function () {
  this.player1.toggleTurn();
  this.player2.toggleTurn();
};

Game.prototype.winner = function() {
  var board = this.board.board
  var winner = false
  if (((board[0][0]) === board[1][0]) && ((board[2][0])) === (board[0][0])) {
    if (this.player1.mark === board[0][0]) {
      winner = this.player1
    } else if (this.player2.mark === board[0][0]){
      winner = this.player2
    }
  }
  if (((board[0][1]) === board[1][1]) && ((board[2][1])) === (board[0][1])) {
    if(this.player1.mark === board[0][1]) {
      winner = this.player1
    } else if (this.player2.mark === board[0][1]){
      winner = this.player2
    }
  }
  if (((board[0][2]) === board[1][2]) && ((board[2][2])) === (board[0][2])) {
    if(this.player1.mark === board[0][2]) {
      winner = this.player1
    } else if (this.player2.mark === board[0][2]){
      winner = this.player2
    }
  }
  return winner
}
