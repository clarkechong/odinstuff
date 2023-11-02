function calculateWinner(playerChoice, computerChoice, matrix){
    return (matrix[playerChoice][computerChoice]);
}

function generateChoice() {
    return Math.floor(Math.random() * 2 );
}

function getAns(){
    let ans = prompt("Enter your choice: \"ROCK/r\", \"PAPER/p\", \"SCISSORS/s\"");
    ans = ans.charAt(0);
    switch (ans.toLowerCase()) {
        case 'r':
            return 0;
        case 'p':
            return 1;
        case 's':
            return 2;
        default:
            console.log("invalid input");
            return getAns();
    };
}

function convertToResult(num){
    switch (num) {
        case 0:
            return "DRAW";
        case 1:
            return "YOU WIN";
        case 2:
            return "COMPUTER WINS";
        default:
            debugger; //should not be able to occur
    };
}

//MAIN
const winnerMatrix = [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0]
];
let answer = getAns();
let NPC = generateChoice();
let result = convertToResult(calculateWinner(answer, NPC, winnerMatrix));
console.log(result);
console.log("you played ", answer, " and computer played ", NPC);