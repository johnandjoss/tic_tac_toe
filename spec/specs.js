describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayerX = new Player("X", true);
      expect(testPlayerX.mark).to.equal("X");
      expect(testPlayerX.isActive).to.equal(true);
      var testPlayerO = new Player("O", false);
      expect(testPlayerO.mark).to.equal("O");
      expect(testPlayerO.isActive).to.equal(false);
   });

   it("has toggle turn function to switch active player", function() {
     var playerX = new Player("X", true);
     var playerO = new Player("O", false);
     playerX.toggleTurn();
     playerO.toggleTurn();
     expect(playerX.isActive).to.equal(false);
     expect(playerO.isActive).to.equal(true);
   })
});

describe('Board', function() {
  it("is initialized with nine spaces", function() {
    var board = new Board(3);
    expect(board.spaces()).to.equal(9);
  });

  it("will mark a space on the board with an X or O", function() {
    var board = new Board(3);
    board.mark(1, 2, "X");
    expect(board.isMarked(1, 2)).to.equal("X")
  });

  it("will tell if a player has marked space on board", function() {
    var board = new Board(3);
    board.mark(1, 2, "X");
    expect(board.isMarked(1, 2)).to.equal("X");
  });
});

describe("Game", function() {
  it("create a board and two players", function() {
    var game = new Game(3)
    var gameBoard = new Board(3);
    var player1 = new Player("X", true);
    var player2 = new Player("O", false);
    expect(game.board).to.eql(gameBoard);
    expect(game.player1).to.eql(player1);
    expect(game.player2).to.eql(player2);
  })

  it("has a function to tell whose turn it is", function() {
    var game = new Game(3);
    expect(game.whoseTurn()).to.eql(game.player1);
  });

  it("has a function to switch whose turn it is", function() {
    var game = new Game(3);
    game.changeTurn();
    expect(game.whoseTurn()).to.eql(game.player2);
  });

  it("has a function to check for winner horizontally", function() {
    var game = new Game(3);
    game.board.mark(0, 2, "X");
    game.board.mark(1, 2, "X");
    game.board.mark(2, 2, "X");
    expect(game.winner()).to.eql(game.player1)
  })
});
