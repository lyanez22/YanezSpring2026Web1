//movement with jQuery 

// initial positions (mew and son)

// Change these values to set where they spawn.
let mewX = 100;
let mewY = 100;

let sonY = 200;
let sonX = 200;

let speed = 10;
let following = false;

// call from console or other code to set spawn positions at runtime

// this part was soooo tedius to implement with the HTML structure I had,
// so I made this function to easily set spawn positions without 
// having to change the HTML or CSS directly

function setSpawn(newMewX, newMewY, newSonX, newSonY) {

  if (typeof newMewX === 'number') mewX = newMewX;
  if (typeof newMewY === 'number') mewY = newMewY;

  if (typeof newSonX === 'number') sonX = newSonX;
  if (typeof newSonY === 'number') sonY = newSonY;

  $("#mew-container").css({
    left: mewX + "px",
    top: mewY + "px"
  });

  $("#son-container").css({
    left: sonX + "px",
    top: sonY + "px"
  });
}


$(document).ready(function () {

setSpawn(650, 520, 900, 520);

  // click son to activate follow
  $("#son-container").click(function () {
    following = true;
    $("#son-container p").css("opacity", "0");
  });

  // arrow keys for mew movement
  $(document).keydown(function (e) {

 // hide demo text on first movement
    if (e.key === "ArrowLeft" || e.key === "ArrowRight" ){
      $("#demo").css("opacity", "0");
    }
// move mew left and right
    if (e.key === "ArrowLeft") {
      mewX -= speed;
    }

    if (e.key === "ArrowRight") {
      mewX += speed;
    }

// update mew position
    $("#mew-container").css({
      left: mewX + "px",
      top: mewY + "px",
    });
// condition: if son is set following,
// update son position to follow mew

    if (following) {

      sonX += (mewX - sonX) * 0.05; // son walking smooooooth
      // also smoothly follow vertically
      sonY += (mewY - sonY) * 0.05;

      $("#son-container").css({ // update son position
        left: sonX + "px",
        top: sonY + "px",
      });
    }

  });

});
