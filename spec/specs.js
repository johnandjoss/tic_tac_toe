describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayerX = new Player("X", true);
      expect(testPlayerX.mark).to.equal("X");
      expect(testPlayerX.active).to.equal(true);
      var testPlayerO = new Player("O", false);
      expect(testPlayerO.mark).to.equal("O");
      expect(testPlayerO.active).to.equal(false);
   });

   it("has toggle turn function to switch active player", function() {
     var playerX = new Player("X", true);
     var playerO = new Player("O", false);
     playerX.toggleTurn();
     playerO.toggleTurn();
     expect(playerX.active).to.equal(false);
     expect(playerO.active).to.equal(true);
   })
});

describe('Board', function() {
  it("is initialized with nine spaces", function() {
    var board = new Board(3);
    expect(board.spaces()).to.equal(9);
  });

  it("will mark a space on the board with an X or O", function() {
    var board = new Board(3);
    board.mark(1, 2, "X")
    expect(board.isMarked(1, 2)).to.equal("X")
  });

  it("will tell if a player has marked space on board", function() {
    var board = new Board(3);
    board.mark(1, 2, "X")
    expect(board.isMarked(1, 2)).to.equal("X")
  });

});
