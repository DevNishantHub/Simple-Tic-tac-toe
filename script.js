playerO = true; 
isWinner = false
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

function shape(id){
    if(playerO && !isWinner){
        document.getElementById(id).textContent = "o";
        index = parseInt(id.replace('cell-id-','')) 
        board[index-1] = "o"
        playerO = false
        getWinner();
    }
    else if(!isWinner){
        document.getElementById(id).textContent = "x";
        index = parseInt(id.replace('cell-id-',''))
        board[index-1] = "x"
        playerO = true;
        getWinner();
    }
}

function getWinner(){
    for (let combo of winningCombos){
        a = combo[0]
        b = combo[1]
        c = combo[2]
        if(board[a] != "" && board[a]==board[b] && board[b]==board[c]){
            isWinner = true;
            document.getElementById("Win-msg").textContent = board[a] + " Is winner"
            return;
        }
    }
    if (board.every(cell => cell !== "")) {
        document.getElementById("Win-msg").textContent = "Draw"
    }
    return null;
};
function reset(){
    for(let i = 1;i<=9;i++){
        document.getElementById('cell-id-'+i).textContent = "";
        board[i-1] = ""
    }
}
