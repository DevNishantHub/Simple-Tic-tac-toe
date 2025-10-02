playerO = true; 
isWinner = false
if(!localStorage){
localStorage.setItem("X",0);
localStorage.setItem("O",0);
}
const winningCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6], 
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

let board = [
    "","","",
    "","","",
    "","",""
];
displayScore();
function shape(id){
    
    if(playerO && !isWinner){
        document.getElementById(id).textContent = "o";
        index = parseInt(id.replace('cell-id-',''));
        board[index-1] = "o";
        playerO = false;
        getWinner();
        displayScore();
    }
    else if(!isWinner){
        document.getElementById(id).textContent = "x";
        index = parseInt(id.replace('cell-id-',''));
        board[index-1] = "x";
        playerO = true;
        getWinner();
        displayScore();
    }
}

function getWinner(){
    for (let combo of winningCombos){
        let a = combo[0];
        let b = combo[1];
        let c = combo[2];
        if(board[a] != "" && board[a]==board[b] && board[b]==board[c]){
            isWinner = true;
            document.getElementById("Win-msg").textContent = board[a] + " Is winner";
            if(board[a]=="x"){
                let score = parseInt(localStorage.getItem("X"));
                localStorage.setItem("X",score+1)
            }
            else if (board[a]=="o"){
                let score = parseInt(localStorage.getItem("O"));
                localStorage.setItem("O",score+1)
            }
            displayScore();
            return;
        }
    }
    if (board.every(cell => cell !== "")) {
        document.getElementById("Win-msg").textContent = "Draw";
    }
    return null;
};
function reset(){
    for(let i = 1;i<=9;i++){
        document.getElementById('cell-id-'+i).textContent = "";
        board[i-1] = "";
    }
    isWinner = false

}

function resetGame(){
    localStorage.setItem("X",0);
    localStorage.setItem("O",0);
    reset();
    displayScore();
}
function displayScore(){
    document.getElementById("Score").textContent = "Scores";
    document.getElementById("ScoreForX").textContent = "Score Of X: "+ localStorage.getItem("X");
    document.getElementById("ScoreForO").textContent = "Score Of O: "+ localStorage.getItem("O");
}
