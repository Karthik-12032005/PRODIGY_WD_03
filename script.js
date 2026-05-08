let currentPlayer = "X";

let gameBoard = ["","","","","","","","",""];

let gameActive = true;

const statusText =
    document.getElementById("status");

const winningConditions = [

    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]

];

function makeMove(cell,index){

    if(gameBoard[index] != "" || !gameActive){
        return;
    }

    gameBoard[index] = currentPlayer;

    cell.innerHTML = currentPlayer;

    checkWinner();

}

function checkWinner(){

    let roundWon = false;

    for(let i=0; i<winningConditions.length; i++){

        let condition = winningConditions[i];

        let a = gameBoard[condition[0]];
        let b = gameBoard[condition[1]];
        let c = gameBoard[condition[2]];

        if(a == "" || b == "" || c == ""){
            continue;
        }

        if(a == b && b == c){

            roundWon = true;
            break;
        }
    }

    if(roundWon){

        statusText.innerHTML =
            `🎉 Player ${currentPlayer} Wins!`;

        gameActive = false;

        return;
    }

    if(!gameBoard.includes("")){

        statusText.innerHTML =
            "🤝 Match Draw!";

        gameActive = false;

        return;
    }

    currentPlayer =
        currentPlayer == "X" ? "O" : "X";

    statusText.innerHTML =
        `Player ${currentPlayer} Turn`;

}

function restartGame(){

    currentPlayer = "X";

    gameBoard =
        ["","","","","","","","",""];

    gameActive = true;

    statusText.innerHTML =
        "Player X Turn";

    document.querySelectorAll(".cell")
        .forEach(cell => cell.innerHTML = "");

}