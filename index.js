var randomNumber1 = Math.floor((Math.random() * 6)) + 1;

var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

firstPlayersDice = document.querySelector('.img1');
firstPlayersDice.src = "images/dice" + randomNumber1 + ".png";
console.log(firstPlayersDice);

secondPlayersDice = document.querySelector('.img2');
secondPlayersDice.src = "images/dice" + randomNumber2 + ".png";
console.log(secondPlayersDice);

winner = randomNumber1 > randomNumber2 ? "Player 1 Wins!" : "Player 2 wins"
if(randomNumber1 === randomNumber2){
  winner = "It's a draw!"
}

document.querySelector("h1").innerText = winner;
