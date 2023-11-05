function calculateWinner(playerChoice, computerChoice){
    const winnerMatrix = [
        /*
        0 = draw, 1 = player, 2 = computer
        y-axis (down) for player choice in order of rock-paper-scissor
        x-axis (across) for computer choice in order of rock-paper-scissor
        */
        [0, 2, 1],
        [1, 0, 2],
        [2, 1, 0]
    ];
    return (winnerMatrix[playerChoice][computerChoice]);
}

function numToChoice(num){
    switch (num){
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

function play(choice) {
    let NPC = Math.floor(Math.random() * 3 )
    let result = calculateWinner(choice, NPC);
    gameInfo[0] += 1;
    switch (Number(result)) {
        case 0:
            gameInfo[3] += 1; // DRAW
            resultInfo.firstChild.textContent = "IT WAS A DRAW!";
            break;
        case 1:
            gameInfo[1] += 1; // WIN
            resultInfo.firstChild.textContent = "YOU WON!";
            break;
        case 2:
            gameInfo[2] += 1; // LOSE
            resultInfo.firstChild.textContent = "YOU LOST";
            break;
    }
    refreshCounters()
    resultInfo.lastChild.textContent = `You played ${numToChoice(choice)} and the computer played ${numToChoice(NPC)}`;
}

function resetGameInfo (){
    for (let i = 0; i < 4; i++){
        gameInfo[i] = 0;
    }
    resultInfo.textContent = '';
    refreshCounters();
}

function refreshCounters(){
    playedInfo.textContent = `Games Played: ${gameInfo[0]}`;
    winInfo.textContent = `Games Won: ${gameInfo[1]}`;
    drawInfo.textContent = ` Games Drawn: ${gameInfo[3]}`;
    loseInfo.textContent = `Games Lost: ${gameInfo[2]}`;
}

let gameInfo = [0,0,0,0] // [0] games played - [1] games won - [2] games lost - [3] games drawn
const buttons = document.querySelectorAll('.playerOptions > button');
const resetButton = document.getElementById('resetButton');
const resultInfo = document.querySelector('.resultInfo')
const playedInfo = document.getElementById('playedInfo');
const winInfo = document.getElementById('winInfo');
const drawInfo = document.getElementById('drawInfo');
const loseInfo = document.getElementById('loseInfo');

buttons.forEach((node, index)=>{
    node.addEventListener('click', () => play(index)) //index just happens to work here. change index to button.value to make more robust
});
resetButton.addEventListener('click', () => resetGameInfo())

refreshCounters();