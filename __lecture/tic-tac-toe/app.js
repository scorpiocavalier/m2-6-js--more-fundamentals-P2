// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector('#board');
const player1 = document.querySelector('.js-player-1');
const player2 = document.querySelector('.js-player-2');
const endMessageDiv = document.querySelector('.js-end-message');
const restartBtn = document.querySelector('.restart');

// this array tracks the state of the game board.
let game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Game Settings
const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';
let MOVES = 9;
let GAMEOVER = false;
let DRAW = false;

// game starts with player 1
let currentPlayer = '1';
player1.classList.add('active');

const handleRestart = () => {
  // Disable restart button
  toggleRestartBtn();

  // Reset players
  currentPlayer = '1';
  player1.classList = 'player js-player-1 active';
  player2.classList = 'player js-player-2';

  // Reset game board
  game = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  [...board.children].forEach(cell => cell.innerText = '');

  // Reset Game Settings
  MOVES = 9;
  GAMEOVER = false;
  DRAW = false;
  endMessageDiv.innerHTML = '';

  // Add event listener to the board
  board.addEventListener('click', handleClick);
};

const toggleRestartBtn = () => restartBtn.disabled = !restartBtn.disabled;

const win = () => {
  // stop board from being clickable
  board.removeEventListener('click', handleClick);

  // print the winner to the screen
  endMessageDiv.innerHTML = DRAW ? `IT'S A DRAW!` : `WINNER: PLAYER ${currentPlayer}!`;

  // activate the restart btn
  toggleRestartBtn();

  // set status of gameover to true
  GAMEOVER = true;
};

const verifyWin = () => {
  // DRAW if no more moves & it's not game over
  if(MOVES == 0 && !GAMEOVER) {
    DRAW = true;
    win();
  } else {
    // Use the game array to determine the winner.
    if (game[0] === game[1] && game[1] === game[2]) win();
    if (game[3] === game[4] && game[4] === game[5]) win();
    if (game[6] === game[7] && game[7] === game[8]) win();
    // COLUMNS
    if (game[0] === game[3] && game[3] === game[6]) win();
    if (game[1] === game[4] && game[4] === game[7]) win();
    if (game[2] === game[5] && game[5] === game[8]) win();
    // DIAGONALS
    if (game[0] === game[4] && game[4] === game[8]) win();
    if (game[2] === game[4] && game[4] === game[6]) win();
  }

};

const getCurrentPlayerDOM = () => document.querySelector(`.js-player-${currentPlayer}`);

const togglePlayer = () => {
  // use .active to show active player visually...
  getCurrentPlayerDOM().classList.remove('active');
  currentPlayer = currentPlayer === '1' ? '2' : '1';
  getCurrentPlayerDOM().classList.add('active');
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;
  
  if (typeof game[cellId] === 'number') {
    game[cellId] = icon;
    currentCellDiv.innerText = icon;
    MOVES--;
    verifyWin();
    !GAMEOVER && togglePlayer();
  }
};

restartBtn.addEventListener('click', handleRestart);
board.addEventListener('click', handleClick);