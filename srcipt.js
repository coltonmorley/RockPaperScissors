console.log("Test that mufffalkkek")

let gameComplete = false;

let test = 0;
test = getRNG();


console.log(test)

console.log("Welcome to Rock Paper Scissors Simulator");
console.log("\nThis will be a best of five battle!\n\n");
console.log("Type either Rock, Paper, or Scissors here:");



while(gameComplete){
    let userScore = 0;
    let compScore = 0;
    console.log("fucked");
}



function getRNG() {
    return Math.floor(Math.random() * 3 );
}

//U represents User and C represents computer
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

let roundCnt = 0;
let uScore = 0;
let cScore = 0;

function getPick () {
    document.getElementById("winLoss").innerHTML = ``;
    let x = document.getElementById("userIn").value;
    
    console.log(x.toUpperCase())
    document.getElementById("meta").innerHTML =  `You chose ${x}`;
    userChoice = convertToInt(x.toUpperCase());
    if (userChoice == -1){
        console.log("Invalid, please enter rock paper or scissors");
        return -1;
    }
    compChoice = getRNG();
    result = winner(userChoice, compChoice);
    //console.log(`User: ${userChoice}, Comp: ${compChoice}, winner: ${result}`);
    if(result == -1){
        document.getElementById("battleResult").innerHTML =  `You both had ${convertToChar(compChoice)} its a draw! `;
        console.log(`You both had ${convertToChar(compChoice)} its a draw! `)
    }
    else if (result){
        document.getElementById("battleResult").innerHTML =`Round Won! ${convertToChar(userChoice)} beats ${convertToChar(compChoice)}!`;
        console.log(`Round Won! ${convertToChar(userChoice)} beats ${convertToChar(compChoice)}!`);
        uScore++;
    }
    else {
        document.getElementById("battleResult").innerHTML = `Round Lost! ${convertToChar(userChoice)} does not beat ${convertToChar(compChoice)}!`
        console.log(`Round Lost! ${convertToChar(userChoice)} does not beat ${convertToChar(compChoice)}!`);
        cScore++;
    }
    roundCnt++;
    updateHTML(uScore, cScore, roundCnt);

    if(uScore == 5) {
        document.getElementById("winLoss").innerHTML = `You WIN! Enter a new value and submit to start a new game`;
        roundCnt = 0;
        uScore = 0;
        cScore = 0;
    } 
    else if (cScore == 5){
        document.getElementById("winLoss").innerHTML = `You lost, enter a value and submit to try again!`;
        roundCnt = 0;
        uScore = 0;
        cScore = 0;
    }
}   



function convertToInt (str) {
    if(str == "ROCK"){
        return 0;
    } else if (str == "PAPER"){
        return 1;
    } else if (str == "SCISSORS"){
        return 2;
    }else {return -1;}
    }

function convertToChar (int) {
    if(int == 0){
        return "Rock";
    } else if (int == 1){            
        return "Paper";
    } else if (int = 2){
        return "Scissors";        
    }else {
        console.log(`WE GOT AN ERRRRRRRORRRRRRR ${int}`)
        return -1;}
    }

function updateHTML (u, c, r){
    document.getElementById("round").innerHTML = `After round ${r}`;
    document.getElementById("uScore").innerHTML = `You have ${u} wins!`;
    document.getElementById("cScore").innerHTML = `The computer has ${c} wins!`;

}