let gameArea = document.getElementById("tic-tac-toe-board");

//Setting variables for different game phases
let preGame = true;
let blueTurn = false;
let redTurn = false;

function checkForWinner() {
  let winConditions = [
    //top row
    spot1.innerText !== "" &&
      spot1.innerText === spot2.innerText &&
      spot1.innerText === spot3.innerText,
    //middle row
    spot4.innerText !== "" &&
      spot4.innerText === spot5.innerText &&
      spot4.innerText === spot6.innerText,
    //bottom row
    spot7.innerText !== "" &&
      spot7.innerText === spot8.innerText &&
      spot7.innerText === spot9.innerText,
    //left column
    spot1.innerText !== "" &&
      spot1.innerText === spot4.innerText &&
      spot1.innerText === spot7.innerText,
    //middle column
    spot2.innerText !== "" &&
      spot2.innerText === spot5.innerText &&
      spot2.innerText === spot8.innerText,
    //right column
    spot3.innerText !== "" &&
      spot3.innerText === spot6.innerText &&
      spot3.innerText === spot9.innerText,
    //diagonal top left to bottom right
    spot1.innerText !== "" &&
      spot1.innerText === spot5.innerText &&
      spot1.innerText === spot9.innerText,
    //diagonal bottom left to top right
    spot7.innerText !== "" &&
      spot7.innerText === spot5.innerText &&
      spot7.innerText === spot3.innerText,
  ];

  for (condition of winConditions) {
    if (condition === true) {
      if (playCounter % 2 === 1) {
        winAnnouncement.textContent = "Team allRed X won the game!!";
        winAnnouncement.classList.add("red-shadow");
      } else {
        winAnnouncement.textContent = "Team allBlue O won the game!!";
        winAnnouncement.classList.add("blue-shadow");
      }
      restartButton();
      return true;
    }
  }
}

let clickSpots = [
  "spot-1",
  "spot-2",
  "spot-3",
  "spot-4",
  "spot-5",
  "spot-6",
  "spot-7",
  "spot-8",
  "spot-9",
];

gameArea.addEventListener("click", function (selectSquare) {
  if (preGame === true) {
    //Event Listener Commands during pre game
    for (spot in clickSpots) {
      if (selectSquare.target.id === clickSpots[spot]) {
        console.log(`You have selected ${clickSpots[spot]}`);
      }
    }
  } else if (redTurn === true) {
    //Event Listener Commands during red turn
  } else if (blueTurn === true) {
    //Event Listener Commands during blue turn
  }
});
