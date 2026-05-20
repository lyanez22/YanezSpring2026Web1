//Sound doesn't play when you open a file directly in your browser 
//(file://) but works on a local server (http://) because of browser security restrictions

//please note sound will play on live server but the website runs smoother on local server 

// music integration: 20191229 by Mac DeMarco
// reasoning for music choice: I feel like it goes well with the vibe of the game
// like sense of discovery and little bit of melancholy since the player is kinda alone

//p5.js for music: https://p5js.org/reference/#/libraries/p5.sound (reference for me)

let song;

// song loads from music folder
function preload() {
  song = loadSound('music/20191229.mp3');
}

// browser blocks autoplay, therefore this function is needed
function mousePressed() {
  userStartAudio();

// if song is not already playing, play it in loop and set volume 
// (sets up the music for the game)

  if (!song.isPlaying()) {
    song.loop();
    song.setVolume(0.2);
  }
}

// this is to eliminate the canvas that p5.js creates by default, since we are using jQuery for the UI
function setup() {
  noCanvas();
}
