let score = JSON.parse(localStorage.getItem('score'));

if (!score){
  score = {
    wins: 0,
    losses: 0,
    draws: 0
  };
}



updateScoreElement();



function playGame(playerMove) {
pickComputerMove();

let result = '';

if (playerMove === 'scissors'){

  if(computerMove === ('rock')){
  result = ('You lose');
} else if (computerMove === ('paper')){
  result = ('You win');
} else if (computerMove === ('scissors')){
  result = ('You draw');
}

} else if(playerMove === 'paper'){
  if(computerMove === ('rock')){
  result = ('You win');
} else if (computerMove === ('paper')){
  result = ('You draw');
} else if (computerMove === ('scissors')){
  result = ('You lose');
}

} else if(playerMove === 'rock'){
  if(computerMove === ('rock')){
  result = ('You draw');
} else if (computerMove === ('paper')){
  result = ('You lose');
} else if (computerMove === ('scissors')){
  result = ('You win');
}
}


if(result === 'You win'){
  score.wins += 1;
} else if (result === 'You lose'){
  score.losses += 1;
} else if (result === 'You draw'){
  score.draws +=1
}


localStorage.setItem('score', JSON.stringify(score));



updateScoreElement ();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You
<img src="${playerMove}-emoji.png" class="image">
<img src="${computerMove}-emoji.png" class="image">
Computer`;

  console.log(result); 

}


function updateScoreElement (){
  document.querySelector('.js-score').innerHTML =  `wins: ${score.wins}, losses: ${score.losses}, draws: ${score.draws}`;
}

 let computerMove = '';


function pickComputerMove () {
  const randomNumber = Math.random();

if (randomNumber >=0 && randomNumber < 1/3) {
  computerMove = ('rock');
} else if (randomNumber >=1/3 && randomNumber < 2/3){
  computerMove = ('paper');
} else if (randomNumber >=2/3 && randomNumber < 1){
  computerMove = ('scissors');
}
}