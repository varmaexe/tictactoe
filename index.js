const boxes = document.querySelectorAll(".box")
const gameInfo = document.querySelector(".game-info")
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,3,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//creating a function to initialize game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    //update empty grid on UI
    boxes.forEach((box,index)=> {
        box.innerText = ""
        boxes[index].style.pointerEvents = "all";
        //missing something

    })
    newGameBtn.classList.remove("active")
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame()

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    //ui update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function handleClick(index){
    if(gameGrid[index] === ""){
        //update player for UI
        boxes[index].innerText = currentPlayer;
        //update player for js
        gameGrid[index]= currentPlayer;
        boxes[index].style.pointerEvents = "none";
        //swap the player now
        swapTurn();
        //check for game over
        checkGameOver()

    }
}

boxes.forEach((box, index) => {
    box.addEventListener('click', ()=> {
        handleClick(index);
    })
})

newGameBtn.addEventListener("click", initGame);