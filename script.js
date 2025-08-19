const bgMusic = document.getElementById('bg-music');

const nameInputSection = document.getElementById('name-input-section');
const nameInput = document.getElementById('name-input');
const nameSubmit = document.getElementById('name-submit');
const greeting = document.getElementById('greeting');
const nameDisplay = document.getElementById('name-display');
const balloonGame = document.getElementById('balloon-game');
const balloonsContainer = document.getElementById('balloons-container');
const popCountDisplay = document.getElementById('pop-count');
const wishInput = document.getElementById('wish-input');
const wishText = document.getElementById('wish-text');
const wishSubmit = document.getElementById('wish-submit');
const finalMessage = document.getElementById('final-message');
const wishDisplay = document.getElementById('wish-display');
const finalName = document.getElementById('final-name');

let balloonsPopped = 0;
let userName = '';

greeting.style.display = 'none';

nameSubmit.onclick = () => {
  const val = nameInput.value.trim();
  if(!val) {
    alert('Please enter your name');
    return;
  }
  userName = val;

  bgMusic.play().catch(() => {
    console.log('Playback prevented');
  });

  nameInputSection.style.display = 'none';
  greeting.style.display = 'block';
  nameDisplay.textContent = userName;

  setTimeout(() => {
    greeting.style.display = 'none';
    startBalloonGame();
  }, 2000);
};

function startBalloonGame() {
  balloonGame.style.display = 'block';
  balloonsContainer.innerHTML = '';
  balloonsPopped = 0;
  popCountDisplay.textContent = `Balloons popped: ${balloonsPopped} / 8`;

  for(let i=0; i<8; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.background = getRandomColor();
    balloon.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    balloon.style.top = `350px`;
    balloon.style.animationDuration = `${5 + Math.random() * 3}s`;
    balloon.style.animationName = 'floatUp';
    balloon.style.animationTimingFunction = 'linear';
    balloon.style.animationFillMode = 'forwards';

    balloon.onclick = () => {
      balloon.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      balloon.style.transform = 'scale(0)';
      balloon.style.opacity = '0';
      balloonsPopped++;
      popCountDisplay.textContent = `Balloons popped: ${balloonsPopped} / 8`;

      setTimeout(() => {
        if (balloon.parentNode) balloon.parentNode.removeChild(balloon);
        if(balloonsPopped === 8) {
          balloonGame.style.display = 'none';
          showWishInput();
        }
      }, 300);
    };
    balloonsContainer.appendChild(balloon);
  }
}

function getRandomColor() {
  const colors = ['#ff6f91','#ff9671','#ffc75f','#f9f871','#00b8a9','#70daf9','#d4a5a5','#f24c4c'];
  return colors[Math.floor(Math.random() * colors.length)];
}

wishSubmit.onclick = () => {
  if(!wishText.value.trim()) {
    alert('Please enter your wish');
    return;
  }
  wishInput.style.display = 'none';
  showFinalMessage();
};

function showWishInput() {
  wishInput.style.display = 'block';
}

function showFinalMessage() {
  finalMessage.style.display = 'block';
  wishDisplay.textContent = wishText.value.trim();
  finalName.textContent = userName;
  }
  
