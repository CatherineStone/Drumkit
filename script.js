window.addEventListener("keydown", (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return; // Stops function from running alltogether.
    audio.currentTime = 0; // Rewinds to the start.
    audio.play();
    key.classList.add('playing');
});


    function removeTransition(event) {
    if(event.propertyName !== "transform") return; //It'll skip it if it's not a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));