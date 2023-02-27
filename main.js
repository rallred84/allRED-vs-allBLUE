// grab all playing spots
let spot1 = document.getElementById("spot-1");
let spot2 = document.getElementById("spot-2");
let spot3 = document.getElementById("spot-3");
let spot4 = document.getElementById("spot-4");
let spot5 = document.getElementById("spot-5");
let spot6 = document.getElementById("spot-6");
let spot7 = document.getElementById("spot-7");
let spot8 = document.getElementById("spot-8");
let spot9 = document.getElementById("spot-9");

let winAnnouncement = document.getElementById("win-announcement");

let playAgain = "Play Somewhere Else";

let containerElement = document.querySelector("container");

let playCounter = 0;

backgroundColor();

//Plays made when playCounter is odd will be X
//Plays made when playCounter is even will be 0

function getSpotNum(num) {
  let spotName;
  let spotNum = num;
  if (spotNum === 1) {
    spotName = spot1;
  } else if (spotNum === 2) {
    spotName = spot2;
  } else if (spotNum === 3) {
    spotName = spot3;
  } else if (spotNum === 4) {
    spotName = spot4;
  } else if (spotNum === 5) {
    spotName = spot5;
  } else if (spotNum === 6) {
    spotName = spot6;
  } else if (spotNum === 7) {
    spotName = spot7;
  } else if (spotNum === 8) {
    spotName = spot8;
  } else if (spotNum === 9) {
    spotName = spot9;
  }
  return spotName;
}

function startGame() {
  playCounter = 1;
  spot5.innerText = "";
  spot5.classList.remove("starting-spot");
  backgroundColor();
}

function markSpot(num) {
  if (playCounter > 0) {
    let spotName = getSpotNum(num);
    if (
      winAnnouncement.textContent !== "" &&
      winAnnouncement.textContent !== playAgain
    ) {
      return;
    }
    winAnnouncement.textContent = "";
    if (spotName.textContent === "X" || spotName.textContent === "O") {
      winAnnouncement.textContent = playAgain;
      return "Play Somewhere Else";
    } else if (playCounter % 2 === 1) {
      spotName.classList.add("red-x");
      spotName.textContent = "X";
    } else {
      spotName.classList.add("blue-o");
      spotName.textContent = "O";
    }
    if (checkForWinner() === true) {
      return;
    }
    playCounter++;
    backgroundColor();
    if (playCounter === 10) {
      containerElement.classList.remove("red");
      containerElement.classList.remove("blue");
      restartButton();
      return (winAnnouncement.textContent =
        "Game has ended in a draw. Try again!!");
    }
    //else if function will start game
  } else if (num === 5) {
    startGame();
  }
}

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
spot1.addEventListener("click", () => {
  markSpot(1);
});
spot2.addEventListener("click", () => {
  markSpot(2);
});
spot3.addEventListener("click", () => {
  markSpot(3);
});
spot4.addEventListener("click", () => {
  markSpot(4);
});
spot5.addEventListener("click", () => {
  markSpot(5);
});
spot6.addEventListener("click", () => {
  markSpot(6);
});
spot7.addEventListener("click", () => {
  markSpot(7);
});
spot8.addEventListener("click", () => {
  markSpot(8);
});
spot9.addEventListener("click", () => {
  markSpot(9);
});

function backgroundColor() {
  if (playCounter > 0) {
    if (playCounter % 2 === 1) {
      containerElement.classList.remove("blue");
      containerElement.classList.add("red");
    } else {
      containerElement.classList.remove("red");
      containerElement.classList.add("blue");
    }
  } else {
    containerElement.classList.remove("blue");
    containerElement.classList.remove("red");
  }
}

let body = document.querySelector("body");
let restart;

function restartButton() {
  restart = document.createElement("button");
  restart.textContent = "Play again!";
  body.appendChild(restart);
  restart.addEventListener("click", resetBoard);
}

function resetBoard() {
  console.log("this works");
  playCounter = 0;
  winAnnouncement.classList.remove("red-shadow");
  winAnnouncement.classList.remove("blue-shadow");
  backgroundColor();
  spot1.classList.remove("red-x");
  spot1.classList.remove("blue-o");
  spot1.innerText = "";
  spot2.classList.remove("red-x");
  spot2.classList.remove("blue-o");
  spot2.innerText = "";
  spot3.classList.remove("red-x");
  spot3.classList.remove("blue-o");
  spot3.innerText = "";
  spot4.classList.remove("red-x");
  spot4.classList.remove("blue-o");
  spot4.innerText = "";
  spot5.classList.add("starting-spot");
  spot5.classList.remove("red-x");
  spot5.classList.remove("blue-o");
  spot5.innerText = "START";
  spot6.classList.remove("red-x");
  spot6.classList.remove("blue-o");
  spot6.innerText = "";
  spot7.classList.remove("red-x");
  spot7.classList.remove("blue-o");
  spot7.innerText = "";
  spot8.classList.remove("red-x");
  spot8.classList.remove("blue-o");
  spot8.innerText = "";
  spot9.classList.remove("red-x");
  spot9.classList.remove("blue-o");
  spot9.innerText = "";
  winAnnouncement.textContent = "";
  body.removeChild(restart);
}
