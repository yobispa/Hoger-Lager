console.log("Game started!");
const thisNummer = 0;
let y = 10;
let computerDice = 0;
let playerDice = 0;
let playerScore = 0;
let computerScore = 0;
let computerWins = 0;
let playerWins = 0;
let playerCredit = 5;

const computerBtn = document.body.querySelector('.computer-button');
const playerBtn = document.body.querySelector('.player-button');
const submit = document.body.querySelector('.submit');

const playerName = prompt ("Wat is je username?. (Minstens 6 letters of nummers)", 'Sweaty');

document.getElementById("demo").innerHTML = playerName;
document.getElementById("demo1").innerHTML = playerName;

const ageRestriction= prompt ("Hoe oud ben je?", 18);

if (ageRestriction > 0 && ageRestriction < 18) {
  alert(`Je bent onder de 18. Jij bent ${ageRestriction} jaar oud.`);
  window.location.href = "tooYoung.html";
} else if (ageRestriction > "a" && ageRestriction < "z") {
  window.location.href = "fout.html";
  alert('Er is een fout opgetreden. Type alleen nummers (bijv. 18).');
} else if (ageRestriction > "A" && ageRestriction < "Z") {
  alert('Er is een fout opgetreden. Type alleen nummers (bijv. 18).');
  window.location.href = "fout.html";
} else{
  alert(`Je bent ${ageRestriction} jaar oud.`);
}

function toggleClass() {
  this.classList.toggle('active');
} function addClass() {
  this.classList.add('finished');
}

if (computerBtn) {
  computerBtn.addEventListener('click', function (click) {
    let audio = new Audio('media/mouseclick2.mp3');
      audio.play();
    computerDice = Math.floor(Math.random() * 5);
    computerDice++;
    console.log(`Computer gooit ${computerDice}`);
    document.getElementById("computer").innerHTML = computerDice;
  });
} else {
  console.log("Computer button not found!");
}

playerBtn.addEventListener("click", function (click) {
  let audio = new Audio('media/mouseclick2.mp3');
    audio.play();
  playerDice = Math.floor(Math.random() * 5);
  playerDice++;
  console.log(`Speler gooit ${playerDice}`);
  document.getElementById("player").innerHTML = playerDice;

  checkWinner();
});

function checkWinner(){
 if (playerDice > computerDice) {
  document.getElementById("demo2").innerText = (`${playerName} gooit hoger. ${playerName} gooit ${playerDice - computerDice} meer hoger dan de computer.`)
  console.log(`${playerName} gooit hoger. ${playerName} gooit ${playerDice}.`);
  playerScore = playerScore + 1;
  document.querySelector(".player-Score").innerText = (`${playerName} score  = ${playerScore}`);
  
  if (playerScore >= y){
    playerScore = playerScore - y;
    const audio = new Audio('media/victory.mp3');
    audio.play();
    console.log(playerScore)
    document.querySelector(".player-Score").innerText = (`${playerName} score  = ${playerScore}`);
    computerScore = 0;
    document.querySelector(".computer-Score").innerText = (`Computer Score = ${computerScore}`);
    alert(`${playerName} heeft gewonnen!!!. Scores worden gereset.`)
    playerWins++;
    document.querySelector(".player-Wins").innerText = (`${playerName} wins : ${playerWins}`);
  }
  
 } else if (computerDice > playerDice) {
  document.getElementById("demo2").innerText = (`De computer gooit hoger. Computer gooit ${computerDice - playerDice} meer hoger dan ${playerName}.`)
  console.log(`De computer gooit hoger. De computer gooit ${computerDice}. ${playerName} heeft ${playerDice} gegooit.`);
  computerScore = computerScore +  1;
  document.querySelector(".computer-Score").innerText = (`Computer Score = ${computerScore}`);
 
  if (computerScore >= y){
    const audio = new Audio('media/victory.mp3');
    audio.play();
    computerScore = computerScore - y;
    console.log(computerScore)
    document.querySelector(".computer-Score").innerText = (`Computer Score = ${computerScore}`)
    playerScore = 0;
    document.querySelector(".player-Score").innerText = (`${playerName} score  = ${playerScore}`);
    alert(`Computer heeft gewonnen!!!. Scores worden gereset.`)
    computerWins++;
    document.querySelector(".computer-Wins").innerText = (`Computer wins : ${computerWins}`)
    playerCredit = playerCredit - 1; 
    console.log(`credit is ${playerCredit}`)
   };
} else{
  document.getElementById("demo2").innerText = ("Draw")
  console.log("Draw");
}};
// }};
// while (playerCredit == thisNummer){
//   alert("Game over.")
// }
