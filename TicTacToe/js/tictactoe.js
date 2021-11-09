const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')

const previousMove = document.querySelector("#previousMove");
const nextMove = document.querySelector("#nextMove");
const reset2 = document.querySelector("#restart2");
const checkMoves = document.querySelector("#checkMoves");
const xScore = document.querySelector("#xScore");
const oScore = document.querySelector("#oScore");
const navigation = document.querySelector(".navigation");
const reset = document.querySelector("#restartButton");
const xClass = "x";
const oClass = "circle";

let scoreX = 0;
let scoreO = 0;
let move = "";
let history = [];

let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }  
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}


// History

/* --CHECK MOVES BUTTON START-- */
checkMoves.addEventListener("click", () => {
    winningMessage.classList.remove("show");
    navigation.classList.add("show");
    nextMove.disabled = true;
    previousMove.disabled = false;
    for (cell of cellElements) {
      cell.removeEventListener("click", handleClick);
    }
  
    if (nextMove.disabled === true) {
      nextMove.style.cursor = "not-allowed";
    }
});

/* --CHECK MOVES BUTTON END-- */

/* --PREVIOUS MOVE-- */
previousMove.addEventListener("click", () => {
    nextMove.disabled = false;
    nextMove.style.cursor = "pointer";
    move = move - 1;
    updateBoardOnClick();
    console.log(history[move]);
    console.log(`number of move: ${move + 1}`);
    if (move < 1) {
      previousMove.disabled = true;
      previousMove.style.cursor = "not-allowed";
    }
});
/* --PREVIOUS MOVE END-- */
  
/* --NEXT MOVE-- */
nextMove.addEventListener("click", () => {
    previousMove.disabled = false;
    previousMove.style.cursor = "pointer";
    move = move + 1;
    updateBoardOnClick();
    console.log(history[move]);
    console.log(`number of move: ${move + 1}`);
    if (move === history.length - 1) {
      nextMove.disabled = true;
      nextMove.style.cursor = "not-allowed";
    }
});
/* --NEXT MOVE END-- */

/* --updateBoard function for previous & next move buttons-- */
const updateBoardOnClick = () => {
    board.innerHTML = "";
    console.log(history[move]);
    for (let i = 0; i < history[move].length; i++) {
      for (let j = 0; j < history[move][i].length; j++) {
        console.log(history[move][i][j]);
        let div = document.createElement("div");
        div.classList.add("cell");
  
        if (history[move][i][j] === "x") {
          div.classList.add("x");
        } else if (history[move][i][j] === "o") {
          div.classList.add("circle");
        }
        board.append(div);
      }
    }
};