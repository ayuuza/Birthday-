let brotherName = '';
let loveCount = 0;

function startGame() {
  brotherName = document.getElementById('name-input').value.trim();
  if (brotherName === '') {
    alert('Please enter your name!');
    return;
  }
  document.getElementById('enter-name').style.display = 'none';
  document.getElementById('game-section').style.display = '';
  // You can add balloon game logic here or use a library for a simple mini-game
}

function finishGame1() {
  document.getElementById('game-section').style.display = 'none';
  document.getElementById('love-game-section').style.display = '';
}

function increaseLove() {
  loveCount++;
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

  // Personalised birthday message
  document.getElementById('final-message').textContent =
    'Happy Birthday my dear lovely brother ' + brotherName + '!';
                          }
