let r1 = [0, 0, 0, 0];
let r2 = [0, 0, 0, 0];
let r3 = [0, 0, 0, 0];
let r4 = [0, 0, 0, 0];

let player_1 = 1;
let player_2 = 2;
current = player_1;
var finished = false;

var valid;
var row;
var column;

function flip(obj) {
  if (!finished) {
    var valid = true;
    var tmp = obj.id.split(",");
    var row = Number(tmp[0]);
    var column = Number(tmp[1] - 1);
    switch (row) {
      case 1:
        if (r1[column] != 0) {
          valid = false;
        } else {
          r1[column] = current;
        }
        break;
      case 2:
        if (r2[column] != 0) {
          valid = false;
        } else {
          r2[column] = current;
        }
        break;
      case 3:
        if (r3[column] != 0) {
          valid = false;
        } else {
          r3[column] = current;
        }
        break;
      case 4:
        if (r4[column] != 0) {
          valid = false;
        } else {
          r4[column] = current;
        }
        break;
    }
    if (valid) {
      obj.style.transform = "scaleY(-1)";
      if (!finished) {
        if (current == player_1) {
          obj.style.background = "tomato";
          document.getElementById("turn").innerHTML = "Player 2 turn";
          current = player_2;}
        // } else {
        //   obj.style.background = "teal";
        //   document.getElementById("turn").innerHTML = "Player 1 turn";
        //   current = player_1;
        // }
        setTimeout(player_2_1, 500);
        
      }
    }
    Check_Win();
  }
}
//     // Computer_Player

function player_2_1() {
  var valid = true;
  var row = Math.floor(Math.random() * 4 + 1);
  var column = Math.floor(Math.random() * 4 + 1) ;
  computer = row + "," + column ;
    switch (row) {
      case 1:
        if (r1[(column - 1 )] != 0) {
          valid = false;
        } else {
          r1[(column - 1 )] = current;
        }
        break;
      case 2:
        if (r2[(column - 1 )] != 0) {
          valid = false;
        } else {
          r2[(column - 1 )] = current;
        }
        break;
      case 3:
        if (r3[(column - 1 )] != 0) {
          valid = false;
        } else {
          r3[(column - 1 )] = current;
        }
        break;
      case 4:
        if (r4[(column - 1 )] != 0) {
          valid = false;
        } else {
          r4[(column - 1 )] = current;
        }
        break;
    }
    if (valid) {
      document.getElementById(computer).style.transform = "scaleY(-1)";
      if (!finished) {
        if (current == player_2) {
          document.getElementById(computer).style.background = "teal";
          document.getElementById("turn").innerHTML = "Player 1 turn";
          current = player_1;
        }
      }
    }else{
      player_2_1();
    }
  }
  clearTimeout(myTimeout);
function vertical(player) {
  for (let index = 0; index < 4; index++) {
    if (
      r1[index] == player &&
      r2[index] == player &&
      r3[index] == player &&
      r4[index] == player
    ) {
      return true;
    }
  }
  return false;
}
function horizontal(player) {
  if (
    (r1[0] == player &&
      r1[1] == player &&
      r1[2] == player &&
      r1[3] == player) ||
    (r2[0] == player &&
      r2[1] == player &&
      r2[2] == player &&
      r2[3] == player) ||
    (r3[0] == player &&
      r3[1] == player &&
      r3[2] == player &&
      r3[3] == player) ||
    (r4[0] == player && r4[1] == player && r4[2] == player && r4[3] == player)
  ) {
    return true;
  }
  return false;
}
function diagonal(player) {
  if (
    (r1[0] == player &&
      r2[1] == player &&
      r3[2] == player &&
      r4[3] == player) ||
    (r1[3] == player && r2[2] == player && r3[1] == player && r4[0] == player)
  ) {
    return true;
  }
  return false;
}
function Draw() {
  if (r1.includes(0) || r2.includes(0) || r3.includes(0) || r4.includes(0)) {
    return "include 0";
  }
  return "not include 0";
}
function Check_Win() {
  // Vertical Win
  if (vertical(player_1)) {
    document.getElementById("winner").innerHTML = "Player 1 Win !";
    finished = true;
  } else if (vertical(player_2)) {
    document.getElementById("winner").innerHTML = "Player 2 Win !";
    finished = true;
  }
  // Horizontal Win
  if (horizontal(player_1)) {
    document.getElementById("winner").innerHTML = "Player 1 Win !";
    finished = true;
  } else if (horizontal(player_2)) {
    document.getElementById("winner").innerHTML = "Player 2 Win !";
    finished = true;
  }
  // Diagonal Win
  if (diagonal(player_1)) {
    document.getElementById("winner").innerHTML = "Player 1 Win !";
    finished = true;
  } else if (diagonal(player_2)) {
    document.getElementById("winner").innerHTML = "Player 2 Win !";
    finished = true;
  }
  // Draw
  if (Draw() == "not include 0") {
    document.getElementById("winner").innerHTML = "Draw";
    finished = true;
  }
}
// Refresh
function restart() {
  location.reload(); 
}
