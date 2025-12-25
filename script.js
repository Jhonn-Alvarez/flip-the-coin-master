//This is where the logic will go

const GameArea = document.getElementById('game-area');

//Heads image
const resultImage = document.createElement('img');
GameArea.appendChild(resultImage);
resultImage.src = '/resources/heads.png';

//shadow image
const shadowImage = document.createElement('img');
GameArea.appendChild(shadowImage);
shadowImage.src = '/resources/shadow.svg';

//result display
const resultDisplay = document.createElement('p');
resultDisplay.innerText = 'Heads';
GameArea.appendChild(resultDisplay);

//Button
const flipButton = document.createElement('button');
flipButton.innerText = 'Flip Coin';
GameArea.appendChild(flipButton);

//Flip function
flipButton.addEventListener('click', function (e) {
  const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
  if (result == 'Heads') {
    console.log('Heads');
    resultImage.src = '/resources/heads.svg';
    resultDisplay.innerText = result; 
  } else {
    console.log('Tails');
    resultImage.src = '/resources/tails.svg';
    resultDisplay.innerText = result;
  }
});
