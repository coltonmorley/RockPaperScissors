userScore = 0;
compScore = 0;


function playRound(player){
    computer = getRand();
    playClipart(player, computer);
    pWin = winner(player, computer);
    winLossBG(pWin);
    if(pWin == 1) {userScore++};
    if(pWin == 0) {compScore++};
    //Prevent button spam
    disableButtons();
    setTimeout(() => {  nextRound(); }, 3000);
    if(gameOver()){
        setTimeout(() => {  endGame(pWin); }, 3000);
    }
}


function getRand(){
    return Math.floor(Math.random() * 3 );
}


//Returns 1 if user wins round, 0 if computer wins round, and -1 if tie
function winner(u, c) {
    if (u==c){return -1;} 
    else if (u == 0){
        if(c == 2) {return 1;}
        else {return 0;};
    }
    else if (u == 1) {
        if (c == 0) {return 1;}
        else {return 0;};
    }
    else if (u == 2){
        if (c == 1) {return 1;}
        else {return 0;};
    }
    //Something must've gone wrong if we get here
    else {return 200;};

}


function playClipart(player, computer) {
    us = document.getElementById('userScore');
    cs = document.getElementById('compScore');
    if(player == 0){
        us.innerHTML = '<img class = clipartSB src =\'./images/rock.png\' alt = "Rock clipart"></img>';
    }
    else if (player == 1){
        us.innerHTML = '<img class = clipartSB src =\'./images/paper.png\' alt = "Paper clipart"></img>';
    }
    else if (player == 2){
        us.innerHTML = '<img class = clipartSB src =\'./images/scissors.png\' alt = "Scissors clipart"></img>';
    }
    //Set Computer scoreboard clipart
    if(computer == 0){
        cs.innerHTML = '<img class = clipartSB src =\'./images/rock.png\' alt = "Rock clipart"></img>';
    }
    else if (computer == 1){
        cs.innerHTML = '<img class = clipartSB src =\'./images/paper.png\' alt = "Paper clipart"></img>';
    }
    else if (computer == 2){
        cs.innerHTML = '<img class = clipartSB src =\'./images/scissors.png\' alt = "Scissors clipart"></img>';
    }
}


//Highlight scoreboard based on who won, 1 = user win, 0 = comp win, -1 if tie
function winLossBG(playerWin){
    player = document.querySelector('.score');
    computer = document.querySelector('.score:nth-child(2)');
    if(playerWin == 1){
        player.classList.add('winner');
        computer.classList.add('loser');
    }
    else if(playerWin == 0){
        computer.classList.add('winner');
        player.classList.add('loser');
    }
    else {
        computer.classList.add('tie');
        player.classList.add('tie');
    }
}

function nextRound(){
    player = document.querySelector('.score');
    computer = document.querySelector('.score:nth-child(2)');

    player.classList.remove('loser');
    player.classList.remove('winner');
    player.classList.remove('tie');
    computer.classList.remove('loser');
    computer.classList.remove('winner');
    computer.classList.remove('tie');

    us = document.getElementById('userScore');
    cs = document.getElementById('compScore');

    us.textContent = userScore;
    cs.textContent = compScore;

    buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {button.disabled = false});
}


function gameOver(){
    if(userScore >= 5 || compScore >= 5) return 1;
    return 0;
}

function endGame(){
    disableButtons();
    container = document.querySelector('.scoreboard');
    container.classList.add('updateFlex');
    if(pWin){
        container.innerHTML= '<div class = \'score\'>You bested the computer! Refresh to see if you can do it again!</div>';
    }
    else{
        container.innerHTML= '<div class = \'score\'>You Lost! Refresh to try again!</div>';
    }


}


function disableButtons(){
    buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {button.disabled = true});
}

function refreshPage(){
    window.location.reload();
}
