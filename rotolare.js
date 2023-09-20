


const wheel = document.getElementById('wheel');
const imageButtonsContainer = document.getElementById('image-buttons');
let spinning = false;
let currentRotation = 0;

imageButtonsContainer.addEventListener('click', (event) => {
    const imageButton = event.target;
    if (imageButton.classList.contains('image-button')) {
        if (!spinning) {
            spinning = true;
            imageButtonsContainer.classList.add('disabled');

            const additionalRotation = Math.floor(Math.random() * 721) + 720;
            currentRotation += additionalRotation;

            const finalRotation = `rotate(${currentRotation}deg)`;

            wheel.style.transition = 'transform 5s ease-out';
            wheel.style.transform = finalRotation;
        }
    }
});

wheel.addEventListener('transitionend', () => {
    wheel.style.transition = 'none';
    spinning = false;
    imageButtonsContainer.classList.remove('disabled');
});
