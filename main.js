let gameArea = document.getElementById("tic-tac-toe-board");

//Setting variables for different game phases
let preGame = true;
let blueTurn = false;
let redTurn = false;

gameArea.addEventListener("click", function (selectSquare) {
  if (selectSquare.target.matches("#spot-5")) {
    console.log("this is 5");
  }
});
