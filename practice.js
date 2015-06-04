var compuTurn = function() {
  var fake;
  var xGuess = Math.floor(Math.random() * 3);
  var yGuess = Math.floor(Math.random() * 3);



if(xGuess === 0 && yGuess === 0) {
fake = "#top-left";
}
if(xGuess === 1 && yGuess === 0) {
fake = "#mid-left";
}
if(xGuess === 2 && yGuess === 0) {
fake = "#bottom-left";
}
if(xGuess === 0 && yGuess === 1) {
fake = "#top-mid";
}
if(xGuess === 1 && yGuess === 1) {
fake = "#mid-mid";
}
if(xGuess === 2 && yGuess === 1) {
fake = "#bottom-mid";
}
if(xGuess === 0 && yGuess === 2) {
fake = "#top-right";
}
if(xGuess === 1 && yGuess === 2) {
fake = "#mid-right";
}
if(xGuess === 2 && yGuess === 2) {
fake = "#bottom-right";
}

if ((!(board.isMarked(xGuess, yGuess))) && (game.winner() === false)) {
  game.board.mark(xGuess, yGuess, game.whoseTurn().mark);
  $(fake).text(game.whoseTurn().mark);
  if ((game.winner()) === "Draw") {
    $("#results").slideDown("slow");
    $("#winner").text("It's a Draw!");
  } else if (game.winner()){
    $("#results").slideDown("slow");
    $("#winner").text("Player" + " " + game.whoseTurn().mark + " WINS!");
  }
game.changeTurn();
$("#players h1").text("Player" + " " + game.whoseTurn().mark + "'s Turn!");
$("body").removeClass();
$("body").toggleClass(game.whoseTurn().mark);
if (game.winner()) {
  $("#players").hide();

}
}

};
