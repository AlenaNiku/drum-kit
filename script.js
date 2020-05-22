window.addEventListener('keydown', playSound);

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// we add an event listener to the whole window and the event we're listening for is 'keydown'

// we add a data attribute to each audio (data-key) and make it equal to the keyCode of that letter (key) => that's how we're able to pick it with querySelector. the specific keyCode is coming from each letters event - e.keyCode, and we're using a template literal with the data attribute to pick the specific audio

// we're changing the class of the key to 'playing' bc we're going to change how it looks with the help of css, consequently we're removing this class to return the look of the buttons back

// if (!audio) return; by this we're saying if the audio doesn't exist for a key - do nothing (so that nothing happens when we press a key with no associated audio) // stop the function from running all together

// console.log(key) - console.log along the way to make sure you're picking the right DOM element