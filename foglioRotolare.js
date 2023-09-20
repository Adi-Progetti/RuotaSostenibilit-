// funzione per far girare la ruota

function spinWheel() {
  if (!spinning) {
    spinning = true;
    imageButtonsContainer.classList.add('disabled');

    const additionalRotation = Math.floor(Math.random() * 721) + 720;
    currentRotation += additionalRotation;

    const finalRotation = `rotate(${currentRotation}deg)`;

    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = finalRotation;

    const audio = new Audio("spin.mp3");
    audio.play();
  }
}

// Event listener per il click bottone  se fai click sul bottone attiva spinwheel
//Il png della ruota rimane un quadrato quindi devo fare in modo che le dimensioni nascoste della ruota non si sovrappongano al bottone
const startButton = document.getElementById('start-btn');
startButton?.addEventListener('click', spinWheel);