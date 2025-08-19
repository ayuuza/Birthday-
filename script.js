let brotherName = '';
let balloonScore = 0;
let balloonGameInterval;
let balloonGameTime = 20; // seconds
let balloonTimerInterval;
let loveCount = 0;

function startGame() {
  brotherName = document.getElementById('name-input').value.trim();
  if (brotherName === '') {
    alert('Please enter your name!');
    return;
  }
  document.getElementById('enter-name').style.display = 'none';
  document.getElementById('game-section').style.display = '';

  balloonScore = 0;
  document.getElementById('balloon-score').textContent = balloonScore;

  balloonGameTime = 20;

  balloonGameInterval = setInterval(createBalloon, 700);

  balloonTimerInterval = setInterval(() => {
    balloonGameTime--;
    if (balloonGameTime <= 0) {
      endBalloonGame();
    }
  }, 1000);
}

function createBalloon() {
  const balloonContainer = document.getElementById('balloon-container');
  const balloon = document.createElement('div');
  balloon.textContent = '🎈';
  balloon.style.position = 'absolute';
  balloon.style.fontSize = '36px';
  balloon.style.left =
    Math.random() * (balloonContainer.clientWidth - 50) + 'px';
  balloon.style.top = balloonContainer.clientHeight + 'px';
  balloon.style.cursor = 'pointer';
  balloon.style.userSelect = 'none';

  balloon.addEventListener('click', () => {
    balloon.remove();
    balloonScore++;
    document.getElementById('balloon-score').textContent = balloonScore;
  });

  balloonContainer.appendChild(balloon);

  let topPos = balloonContainer.clientHeight;
  let moveUp = setInterval(() => {
    if (topPos <= -50) {
      balloon.remove();
      clearInterval(moveUp);
    } else {
      topPos -= 3;
      balloon.style.top = topPos + 'px';
    }
  }, 30);
}

function endBalloonGame() {
  clearInterval(balloonGameInterval);
  clearInterval(balloonTimerInterval);
  document.getElementById('game-section').style.display = 'none';
  document.getElementById('love-game-section').style.display = '';
}

function increaseLove(amount) {
  loveCount += amount;
  document.getElementById('love-count').textContent = loveCount;
}

function finishLoveGame() {
  document.getElementById('love-game-section').style.display = 'none';
  document.getElementById('wish-section').style.display = '';
}

function sendWish() {
  let wish = document.getElementById('wish-input').value.trim();
  if (wish === '') {
    alert('Please write your wish!');
    return;
  }
  document.getElementById('wish-section').style.display = 'none';
  document.getElementById('wish-reply-section').style.display = '';
}

function showFinal() {
  document.getElementById('wish-reply-section').style.display = 'none';
  document.getElementById('final-section').style.display = '';

  document.getElementById('final-message').textContent =
    'Happy Birthday my dear lovely brother ' + brotherName + '!';
}
