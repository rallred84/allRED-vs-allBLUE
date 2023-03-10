//Setting global variables for different game phases
let preGame = true;
let blueTurn = false;
let redTurn = false;
let gameNumber = 1;
let playCounter = 0;

//Grabbing game area from DOM
const gameArea = document.getElementById('tic-tac-toe-board');
//Grabbing body area from DOM (to later append button to)
const body = document.querySelector('body');
//Grabbing outcome announcement from DOM
const outcome = document.querySelector('#outcome-announcement');

const playingBoard = {
  spot1: '1',
  spot2: '2',
  spot3: '3',
  spot4: '4',
  spot5: '5',
  spot6: '6',
  spot7: '7',
  spot8: '8',
  spot9: '9',
  winningConditions: [
    //Tic Tac Toe board laid out as follows:
    // 1 2 3
    // 4 5 6
    // 7 8 9

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
  ],
  checkForWinner: function () {
    for (condition of this.winningConditions) {
      //For each winning condition, will set the three positions as arguments to be compared to each other. If all three match, we have a Tic Tac Toe!
      let arg1 = this['spot' + condition[0]];
      let arg2 = this['spot' + condition[1]];
      let arg3 = this['spot' + condition[2]];
      if (arg1 === arg2 && arg1 === arg3) {
        return true;
      }
    }
  },
  resetBoard: function () {
    for (let i = 1; i < 10; i++) {
      this['spot' + i] = i;
    }
  },
};

//Setting event listener on game area to listen for a click
gameArea.addEventListener('click', clickBox);

function clickBox(event) {
  const clickedBox = event.target;
  if (preGame === true) {
    if (clickedBox.id === 'spot5') {
      clickedBox.classList.remove('starting-spot');
      clickedBox.textContent = '';
      startGame();
    }
  } else {
    markBoard(clickedBox);
  }
}

//Function run on each click to mark X or O and check for winner
function markBoard(clickedBox) {
  //Targets child element.id
  if (clickedBox.textContent !== '') {
    //Displays error message if player attempts to play a spot that has already been played
    outcome.textContent = 'Play Somewhere Else';
    return;
  } else {
    //Clears an error message if exists
    outcome.textContent = '';
    let mark = clickedBox.id;
    if (redTurn) {
      //Adds X and proper color class, according to the id of the target that was clicked
      clickedBox.classList.add('red-x');
      document.getElementById(clickedBox.id).textContent = 'X';
      //Updates playing board key with proper value
      playingBoard[mark] = 'X';
      if (playingBoard.checkForWinner()) {
        return someoneWon(`The Red X's have won the game!!`, 'red-shadow');
      }
    } else {
      clickedBox.classList.add('blue-o');
      document.getElementById(clickedBox.id).textContent = 'O';
      playingBoard[mark] = 'O';
      if (playingBoard.checkForWinner()) {
        return someoneWon(`The Blue O's have won the game!!`, 'blue-shadow');
      }
    }
  }
  nextTurn();
}

function nextTurn() {
  //Check our play counter. If all plays have been made and there is no winner, display message of tie game and add end of game code.
  playCounter++;
  if (playCounter === 9) {
    outcome.textContent = 'Tie Game!!';
    //Set color back to neutral
    gameArea.classList.remove('red');
    gameArea.classList.remove('blue');
    endGame();
  } else if (redTurn) {
    isBlueTurn();
  } else if (blueTurn) {
    isRedTurn();
  }
}

function isRedTurn() {
  blueTurn = false;
  redTurn = true;
  gameArea.classList.remove('blue');
  gameArea.classList.add('red');
}

function isBlueTurn() {
  redTurn = false;
  blueTurn = true;
  gameArea.classList.remove('red');
  gameArea.classList.add('blue');
}

function startGame() {
  if (gameNumber % 2 === 1) {
    isRedTurn();
  } else {
    isBlueTurn();
  }
  preGame = false;
}

function someoneWon(message, classSelect) {
  //Alert which team has won
  outcome.textContent = message;
  outcome.className = classSelect;
  endGame();
}

function endGame() {
  //Disable any more clicks
  gameArea.removeEventListener('click', clickBox);
  //Make a button appear in body
  let playAgainButton = document.createElement('button');
  body.appendChild(playAgainButton);
  playAgainButton.textContent = 'Play Again';
  playAgainButton.addEventListener('click', resetGame);
  playCounter = 0;
}

function resetGame() {
  //Reset values of Playing Board Object
  playingBoard.resetBoard();
  //Set color back to neutral
  gameArea.classList.remove('red');
  gameArea.classList.remove('blue');
  //Erase All Xs and Os, and set color back to black
  for (let i = 1; i < 10; i++) {
    let square = document.getElementById('spot' + i);
    square.textContent = '';
    square.classList.remove('red-x');
    square.classList.remove('blue-o');
  }
  //Return starting button
  let startButton = document.querySelector('#spot5');
  startButton.classList.add('starting-spot');
  startButton.textContent = 'START';
  //Erase Outcome Message
  outcome.textContent = '';
  outcome.className = '';
  //Remove Button
  let playAgainButton = document.querySelector('button');
  playAgainButton.remove();
  //re-add event listener
  gameArea.addEventListener('click', clickBox);
  preGame = true;
}
