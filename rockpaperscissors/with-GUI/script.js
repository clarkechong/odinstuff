function calculateWinner(playerChoice, computerChoice){
    const winnerMatrix = [
        /*
        0 = draw, 1 = player, 2 = computer
        y-axis for player choice in order of rock-paper-scissor
        x-axis for computer choice in order of rock-paper-scissor
        */
        [0, 2, 1],
        [1, 0, 2],
        [2, 1, 0]
    ];
    return (winnerMatrix[playerChoice][computerChoice]);
}

function generateComputerChoice() {
    return Math.floor(Math.random() * 3 );
}

function onGamePlayed(){
    // call functions here like events
    refreshCounters();
}

function refreshCounters(){
    playedInfo.textContent = `Games Played:  ${thisGame.gamesPlayed}`;
    winInfo.textContent = `Games Won: ${thisGame.gamesWon}`;
    drawInfo.textContent = ` Games Drawn: ${thisGame.gamesDrawn}`;
    loseInfo.textContent = `Games Lost: ${thisGame.gamesLost}`;
}


class game {
    gamesPlayed;
    gamesWon;
    gamesLost;
    gamesDrawn;
    constructor(){
        this.gamesPlayed= 0;
        this.gamesWon = 0;
        this.gamesLost = 0;
        this.gamesDrawn = 0;
    }

    play(choice) {
        let NPC = generateComputerChoice();
        let result = calculateWinner(choice, NPC);
        this.gamesPlayed += 1;
        switch (Number(result)) {
            case 0:
                this.gamesDrawn += 1;
                break;
            case 1:
                this.gamesWon += 1;
                break;
            case 2:
                this.gamesLost += 1;
                break;
        }
        onGamePlayed();
    }

    reset(){
        this.gamesPlayed= 0;
        this.gamesWon = 0;
        this.gamesLost = 0;
        this.gamesDrawn = 0;
        //onReset();
    }
}

//MAIN
const buttons = document.querySelectorAll('.playerOptions > button');
const playedInfo = document.getElementById('playedInfo');
const winInfo = document.getElementById('winInfo');
const drawInfo = document.getElementById('drawInfo');
const loseInfo = document.getElementById('loseInfo');
var thisGame = new game;

buttons.forEach((node, index)=>{
    node.addEventListener('click', () => thisGame.play(index)) //index just happens to work here. change index to button.value to make more robust
});

refreshCounters();