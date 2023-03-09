//Setting global variables for different game phases
let preGame = true;
let blueTurn = false;
let redTurn = false;
let gameNumber = 1;

//Grabbing game area from DOM
const gameArea = document.getElementById('tic-tac-toe-board');

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
};

//Setting event listener on game area to listen for a click
gameArea.addEventListener('click', (event) => {
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
});

//Function run on each click to mark X or O and check for winner
function markBoard(clickedBox) {
  //Targets child element.id
  if (clickedBox.textContent !== '') {
    alert('This spot has already been played. Choose another spot');
  } else {
    let mark = clickedBox.id;
    if (redTurn) {
      //Adds X and proper color class, according to the id of the target that was clicked
      clickedBox.classList.add('red-x');
      document.getElementById(clickedBox.id).textContent = 'X';
      //Updates playing board key with proper value
      playingBoard[mark] = 'X';
      if (playingBoard.checkForWinner()) {
        setTimeout(() => {
          alert('Red Team Wins!');
        }, 0);
      }
      isBlueTurn();
    } else {
      clickedBox.classList.add('blue-o');
      document.getElementById(clickedBox.id).textContent = 'O';
      playingBoard[mark] = 'O';
      if (playingBoard.checkForWinner()) {
        setTimeout(() => {
          alert('Blue Team Wins!');
        }, 0);
      }
      isRedTurn();
    }
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
