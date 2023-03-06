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
  winningConditions: {
    //Line 15 comes back as false
    topRow: this.spot1 === this.spot2 && this.spot1 === this.spot3,
    middleRow: this.spot4 === this.spot5 && this.spot4 === this.spot6,
    bottomRow: this.spot7 === this.spot8 && this.spot7 === this.spot9,
    leftColumn: this.spot1 === this.spot4 && this.spot1 === this.spot7,
    middleColumn: this.spot2 === this.spot5 && this.spot2 === this.spot8,
    rightColumn: this.spot3 === this.spot6 && this.spot3 === this.spot9,
    diagonal1: this.spot1 === this.spot5 && this.spot1 === this.spot9,
    diagonal2: this.spot7 === this.spot5 && this.spot7 === this.spot3,
  },
  checkForWinner: function () {
    ///Line 26 comes back as true
    console.log(this.spot1 === this.spot2 && this.spot1 === this.spot3);
    for (condition in this.winningConditions) {
      if (this.winningConditions[condition] === true) {
        alert('Winner');
      }
    }
  },
};

//Setting variables for different game phases
let preGame = true;
let blueTurn = false;
let redTurn = false;
let gameNumber = 1;

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

function markBoard(clickedBox) {
  let mark = clickedBox.id;
  if (redTurn) {
    clickedBox.classList.add('red-x');
    document.getElementById(clickedBox.id).textContent = 'X';
    playingBoard[mark] = 'X';
    console.log(playingBoard);
    playingBoard.checkForWinner();
    isBlueTurn();
  } else {
    clickedBox.classList.add('blue-o');
    document.getElementById(clickedBox.id).textContent = 'O';
    playingBoard[mark] = 'O';
    console.log(playingBoard);
    playingBoard.checkForWinner();
    isRedTurn();
  }
}

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
