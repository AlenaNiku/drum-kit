window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // stop the function from running all together
    // console.log(audio)
    if(!audio) return;
    audio.play()
})

// we add an event listener to the whole window and the event we're listening for is 'keydown'

// we add a data attribute to each audio (data-key) and make it equal to the keyCode of that letter (key)