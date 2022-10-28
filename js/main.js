console.log("Game started!");
const thisNummer = 0;
let y = 10;
let computerDice = 0;
let playerDice = 0;
let playerScore = 0;
let computerScore = 0;
let computerWins = 0;
let playerWins = 0;
let playerCredit = prompt ("hoeveel credits wil je", 5);
let myMusic = document.getElementById("myAudio");
myMusic.volume = 0.050;

let higher = document.querySelector('.higher');
let lower = document.querySelector('.lower');

const computerBtn = document.body.querySelector('.computer-button')
const playerBtn = document.body.querySelector('.player-button');
const submit = document.body.querySelector('.submit');
const playerName = prompt ("Wat is je username?.", 'Sweaty');
const ageRestriction= prompt ("Hoe oud ben je?", 18);
Agecheck();

document.querySelector('.player-button').disabled = true;
document.querySelector(".player-Score").innerText = (`${playerName} score  = ${playerScore}`);
document.querySelector(".computer-Score").innerHTML = (`Computer Score = ${computerScore}`);
document.getElementById("demo").innerHTML = `${playerName} gooien`;
document.getElementById("demo1").innerHTML = playerName;
document.querySelector('.playerCredits').innerHTML = `${playerName} credits zijn ${playerCredit}`


if (playerBtn) {
  playerBtn.addEventListener('click', playerButtonAction);
}

if (computerBtn) {
  computerBtn.addEventListener('click', computerButtonAction);
}

function Agecheck () {

  if (ageRestriction > 0 && ageRestriction < 18) {
    alert(`Je bent onder de 18. Jij bent ${ageRestriction} jaar oud.`);
    window.location.href = "tooYoung.html";
  } else if (ageRestriction > "a" && ageRestriction < "z") {
    window.location.href = "fout.html";
    alert('Er is een fout opgetreden. Type alleen nummers (bijv. 18).');
  } else if (ageRestriction > "A" && ageRestriction < "Z") {
    alert('Er is een fout opgetreden. Type alleen nummers (bijv. 18).');
    window.location.href = "fout.html";
  } else {
    alert(`Je bent ${ageRestriction} jaar oud.`);
  }
}

function computerButtonAction() {

  let audio = new Audio('media/mouseclick2.mp3');
  audio.play();
  computerRandomDice1 = Math.floor(Math.random() * 6);
  computerRandomDice1++;
  computerRandomDice2 = Math.floor(Math.random() * 6);
  computerRandomDice2++;
  computerDice = computerRandomDice1 + computerRandomDice2
  
  let computerDiceImg1 = 'images/dice' + computerRandomDice1 + '.png'
  document.querySelectorAll ('img')[0].setAttribute('src', computerDiceImg1);

  let computerDiceImg2 = 'images/dice' + computerRandomDice2 + '.png'
  document.querySelectorAll ('img')[1].setAttribute('src', computerDiceImg2);

  console.log(`Computer gooit ${computerDice}`);
  document.getElementById("computer").innerHTML = computerDice;
  document.querySelector('.computer-button').disabled = true;
  document.querySelector('.player-button').disabled = false;
}

function playerButtonAction() {
  
  let audio = new Audio('media/mouseclick2.mp3');
  audio.play();
  playerRandomDice1 = Math.floor(Math.random() * 6);
  playerRandomDice1++;
  playerRandomDice2 = Math.floor(Math.random() * 6);
  playerRandomDice2++;
  playerDice = playerRandomDice1 + playerRandomDice2

  let playerDiceImg1 = 'images/dice' + playerRandomDice1 + '.png'
  document.querySelectorAll ('img')[2].setAttribute('src', playerDiceImg1);
  
  let playerDiceImg2 = 'images/dice' + playerRandomDice2 + '.png'
  document.querySelectorAll ('img')[3].setAttribute('src', playerDiceImg2);

  console.log(`Speler gooit ${playerDice}`);
  document.getElementById("player").innerHTML = playerDice;
  document.querySelector('.player-button').disabled = true;
  document.querySelector('.computer-button').disabled = false;
  
  if (higher.checked) {
    checkHigher()

  } 
  
  else if (lower.checked) {
    checkLower()

  } else {
    document.querySelector('.displayGame').innerHTML = "Kies hoger of lager!!"
  }

  scoreReset()
  creditsResetGame()
}

function checkHigher() {
  
    lower.checked = false;

  if (computerDice < playerDice) {
    console.log('Je hebt Gewonnen')
    playerScore = playerScore + 1;
    document.querySelector(".displayGame").innerHTML = (`${playerName} heeft gewonnen.`)
    document.querySelector(".player-Score").innerText = (`${playerName} score  = ${playerScore}`);
    
  } else if (playerDice < computerDice) {
    console.log('Je hebt verloren!') 
    computerScore = computerScore + 1;
    document.querySelector(".displayGame").innerHTML = (`De computer heeft gewonnen.`)
    document.querySelector(".computer-Score").innerHTML = (`Computer Score = ${computerScore}`);
    
  } else {
    console.log('Draw')
    document.querySelector(".displayGame").innerHTML = (`Draw`)
  }
}

function checkLower() {

  higher.checked = false;

  if (computerDice > playerDice) {
    console.log('Je hebt gewonnen')
    playerScore = playerScore + 1;
    document.querySelector(".player-Score").innerText = (`${playerName} score  = ${playerScore}`);
    document.querySelector(".displayGame").innerHTML = (`${playerName} heeft gewonnen.`)

  } else if (playerDice > computerDice) {
    console.log('Je hebt verloren')
    computerScore = computerScore + 1;
    document.querySelector(".displayGame").innerHTML = (`De computer heeft gewonnen.`)
    document.querySelector(".computer-Score").innerHTML = (`Computer Score = ${computerScore}`);

  } else {
    console.log('Draw')
    document.querySelector(".displayGame").innerHTML = (`Draw`)
  }
}

function scoreReset() {

  if (playerScore == y) {
    const audio = new Audio('media/victory.mp3');
    audio.play();
    playerScore = playerScore - y;
    playerCredit++;
    console.log(playerCredit)
    document.querySelector('.playerCredits').innerHTML = `${playerName} credits zijn ${playerCredit}`
    document.querySelector(".player-Score").innerText = (`${playerName} score  = ${playerScore}`);
    computerScore = 0;
    document.querySelector(".computer-Score").innerText = (`Computer Score = ${computerScore}`);
    alert(`${playerName} heeft gewonnen!!!. Scores worden gereset.`)
    playerWins++;
    document.querySelector(".player-Wins").innerText = (`${playerName} wins : ${playerWins}`);
  }

  if (computerScore == y) {
    const audio = new Audio('media/victory.mp3');
    audio.play();
    computerScore = computerScore - y;
    playerCredit = playerCredit - 2;
    document.querySelector('.playerCredits').innerHTML = `${playerName} credits zijn ${playerCredit}`
    document.querySelector(".computer-Score").innerText = (`Computer Score = ${computerScore}`)
    playerScore = 0;
    document.querySelector(".player-Score").innerText = (`${playerName} score  = ${playerScore}`);
    alert(`Computer heeft gewonnen!!!. Scores worden gereset.`)
    computerWins++;
    document.querySelector(".computer-Wins").innerText = (`Computer wins : ${computerWins}`)
  }
}

function creditsResetGame() {
  while ( playerCredit < 1 ) {
    playerCredit = prompt (`Je hebt ${playerCredit} credits. Voeg meer als je weer spelen.`)
    document.querySelector('.playerCredits').innerHTML = `${playerName} credits zijn ${playerCredit}`
  }
}


  






