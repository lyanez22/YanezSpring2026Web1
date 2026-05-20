let zapSound;
let clicked = false;

function preload() {
  zapSound = loadSound('music/zap.mp3');
}

function setup() {
  noCanvas();

  let lotus = document.getElementById("lotus");
  let message = document.getElementById("message");

  lotus.addEventListener("click", function () {

    if (clicked) return; 
    clicked = true;

    userStartAudio();
    zapSound.setVolume(0.5);
    zapSound.play();

    message.innerText = "ouch";

    lotus.style.transform = "scale(1.1)";
    setTimeout(() => {
      lotus.style.transform = "scale(1)";
    }, 150);
  });
}