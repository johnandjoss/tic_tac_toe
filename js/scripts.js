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

//Game constructor will create two players and a board.

function Game(boardSize) {
  var player1 = new Player("X", true);
  var player2 = new Player("O", false);
  var board = new Board(boardSize);
  this.player1 = player1
  this.player2 = player2
  this.board = board
};

//whoseTurn will return which player currently has an active turn

Game.prototype.whoseTurn = function () {
   if (this.player1.isActive){
     return this.player1
   } else {
     return this.player2
   }
};

//changeTurn will change toggle both player's active check

Game.prototype.changeTurn = function () {
  this.player1.toggleTurn();
  this.player2.toggleTurn();
};

//winner will return if there is a player who has won the game

Game.prototype.winner = function() {
  var gameBoard = this.board.board;
  var winner = false;
// loop to check for horizontal winner
  for (var y = 0; y < gameBoard.length; y++) {
    if (((gameBoard[0][y]) === (gameBoard[1][y])) && ((gameBoard[2][y]) === (gameBoard[0][y]))) {
      if (this.player1.mark === gameBoard[0][y]) {
        winner = this.player1;
      } else if (this.player2.mark === gameBoard[0][y]){
        winner = this.player2;
      }
    }
  }
// loop to check for vertical winner
  for (var x = 0; x < gameBoard.length; x++) {
    if (((gameBoard[x][0]) === (gameBoard[x][1])) && ((gameBoard[x][2]) === (gameBoard[x][0]))) {
      if (this.player1.mark === gameBoard[x][0]) {
        winner = this.player1;
      } else if (this.player2.mark === gameBoard[x][0]){
        winner = this.player2;
      }
    }
  }
// if statement to check for diagonal winner
  if ((((gameBoard[0][0]) === gameBoard[1][1]) && ((gameBoard[2][2])) === (gameBoard[0][0])) || (((gameBoard[0][2]) === gameBoard[1][1]) && ((gameBoard[2][0])) === (gameBoard[0][2]))) {
    if(this.player1.mark === gameBoard[1][1]) {
      winner = this.player1
    } else if (this.player2.mark === gameBoard[1][1]){
      winner = this.player2
    }
  }
// loop to check if draw has occurred
  if (winner === false) {
    for (var x = 0; x < gameBoard.length; x++) {
      for (var y = 0; y < gameBoard.length; y++) {
        if (gameBoard[x][y] === null) {
          break;
        } else {
          winner = "Draw"
        }
      }
    }
  }
  return winner;
}
