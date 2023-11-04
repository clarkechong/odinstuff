function calculateWinner(playerChoice, computerChoice){
    const winnerMatrix = [ //0 = draw, 1 = player, 2 = computer
        [0, 2, 1],
        [1, 0, 2],
        [2, 1, 0]
    ];
    return (winnerMatrix[playerChoice][computerChoice]);
}

function generateComputerChoice() {
    return Math.floor(Math.random() * 2 );
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

function convertNumToChoice(num){
    switch(num){
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
        default:
            debugger;
    }
}

//MAIN

let NPC = generateComputerChoice();
let result = calculateWinner(answer, NPC);