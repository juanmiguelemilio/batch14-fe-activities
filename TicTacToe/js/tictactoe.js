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
const surrender = document.getElementById('reset3')

const previousMove = document.querySelector("#previousMove");
const nextMove = document.querySelector("#nextMove");
const reset2 = document.querySelector("#restart2");
const checkMoves = document.querySelector("#checkMoves");
const xScore = document.querySelector("#xScore");
const oScore = document.querySelector("#oScore");
const navigation = document.querySelector(".navigation");
const xClass = "x";
const oClass = "circle";

let scoreX = 0;
let scoreO = 0;
let move = "";
let history = [];

let circleTurn

startGame()

const restartFunction = () => {
    location.reload();
};

restartButton.addEventListener('click', startGame)
reset2.addEventListener('click', restartFunction)
surrender.addEventListener('click', restartFunction)

// Start game
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

// Handleclick
function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
        updatedBoardStatus()
        updateMoves()
    } else if (isDraw()) {
        endGame(true)
    } else {
        updatedBoardStatus()
        updateMoves()
        swapTurns()
        setBoardHoverClass()
    }  
}

// End game
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

// Draw
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

// Placing XO
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

// Automatic swap turns
function swapTurns() {
    circleTurn = !circleTurn
}

// Hover
function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

// Winning commbinations
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

// Move History
for (cell of cellElements) {
    cell.addEventListener("click", handleClick, { once: true });
}
  
// Board status
const updatedBoardStatus = () => {
    let row1 = [];
    let row2 = [];
    let row3 = [];
    let mark = "";
  
for (let i = 0; i < cellElements.length; i++) {
    if (cellElements[i].classList.contains("x")) {
        mark = "x";
    } else if (cellElements[i].classList.contains("circle")) {
        mark = "o";
    } else {
        mark = "";
    }
  
    if (i <= 2) {
        row1.push(mark);
    } else if (i > 2 && i < 6) {
        row2.push(mark);
    } else {
        row3.push(mark);
    }
}
  
    history.push([row1, row2, row3]);
    console.table([history]);
};

// Number of moves
const updateMoves = () => {
    move = history.length - 1;
    console.log(`number of move: ${move}`);
};

// Check moves
checkMoves.addEventListener("click", () => {
    winningMessage.classList.remove("show");
    navigation.classList.add("show");
    nextMove.disabled = true;
    previousMove.disabled = false;
    surrender.classList.add("hide")
    for (cell of cellElements) {
      cell.removeEventListener("click", handleClick);
    }
  
    if (nextMove.disabled === true) {
      nextMove.style.cursor = "not-allowed";
    }
});

// Previous move
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
  
// Next move
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

// Update function for previous and next move
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