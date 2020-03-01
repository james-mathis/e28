// globals 
var gridx = 6;
var gridy = 7;

// create random position for battleship
var ship_posx = Math.floor(Math.random() * gridx);
var ship_posy = Math.floor(Math.random() * gridy);

// update html with grid size //
document.getElementById("width").innerHTML = gridx;
document.getElementById("height").innerHTML = gridy;


//
// check if battleship is hit!
//
function check_target() {

  // get x / y position entered //
  x = document.getElementById("inputx").value;
  y = document.getElementById("inputy").value;

  // check if battleship was hit //
  if(x == ship_posx && y == ship_posy) {

    // battleship was hit //
    document.getElementById("result").innerHTML = "hit!";

  // battleship was not hit //
  } else {

    // notify miss //
    document.getElementById("result").innerHTML = "miss!";
  }
}

