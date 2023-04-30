let r1 = [0, 0, 0, 0];
let r2 = [0, 0, 0, 0];
let r3 = [0, 0, 0, 0];
let r4 = [0, 0, 0, 0];

var firstPlayer = 1;
var secondPlayer = 2;
var current = firstPlayer;
var valid = true;
var finished = false;

function flip(obj) {
    if (finished == false) {
        let temp = obj.id.split(",");
        let row = Number(temp[0]);
        let column = Number(temp[1] - 1);
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
            //flip transform
            obj.style.transform = "scaleY(-1)";

            //change player
            if (current == firstPlayer) {
                current = secondPlayer;
                document.getElementById("turn").innerHTML = "Player 2 turn";
                document.getElementById("turn").style.color = "teal";
                obj.style.background = "tomato";
            } else {
                current = firstPlayer;
                document.getElementById("turn").innerHTML = "Player 1 turn";
                document.getElementById("turn").style.color = "tomato";
                obj.style.background = "teal";
            }
            chekWinner();
            // if (!finished) {
            //     draw();
            // }
        }
    }
}

function chekWinner() {
    //for vertical check

    if (vertical(firstPlayer) == true) {
        document.getElementById("winner").innerHTML = "Player 1 win!";
        finished = true;
    } else if (vertical(secondPlayer)) {
        //same if(vertical(secondPlayer==true))
        document.getElementById("winner").innerHTML = "Player 2 win!";
        finished = true;
    }

    //for horizontal check
    if (horizontal(firstPlayer) == true) {
        document.getElementById("winner").innerHTML = "Player 1 win!";
        finished = true;
    } else if (horizontal(secondPlayer)) {
        document.getElementById("winner").innerHTML = "Player 2 win!";
        finished = true;
    }

    //for diagonal check
    if (diagonal(firstPlayer)) {
        document.getElementById("winner").innerHTML = "Player 1 win!";
        finished = true;
    } else if (diagonal(secondPlayer)) {
        document.getElementById("winner").innerHTML = "Player 2 win!";
        finished = true;
    }

    if (isdraw() == false) {
        document.getElementById("winner").innerHTML = "Draw!";
        finished = true;
    }
}

function vertical(currentPlayer) {
    //    if(r1[0]==1 && r2[0]==1 && r3[0]==1 & r4[0]==1)verticle
    for (let index = 0; index < 4; index++) {
        if (
            r1[index] == currentPlayer &&
            r2[index] == currentPlayer &&
            r3[index] == currentPlayer &&
            r4[index] == currentPlayer
        ) {
            return true;
        }
    }

    return false;
}

function horizontal(currentPlayer) {
    if (
        (r1[0] == currentPlayer &&
            r1[1] == currentPlayer &&
            r1[2] == currentPlayer &&
            r1[3] == currentPlayer) ||
        (r2[0] == currentPlayer &&
            r2[1] == currentPlayer &&
            r2[2] == currentPlayer &&
            r2[3] == currentPlayer) ||
        (r3[0] == currentPlayer &&
            r3[1] == currentPlayer &&
            r3[2] == currentPlayer &&
            r3[3] == currentPlayer) ||
        (r4[0] == currentPlayer &&
            r4[1] == currentPlayer &&
            r4[2] == currentPlayer &&
            r4[3] == currentPlayer)
    ) {
        return true;
    }
    return false;
}

function diagonal(currentPlayer) {
    if (
        (r1[0] == currentPlayer &&
            r2[1] == currentPlayer &&
            r3[2] == currentPlayer &&
            r4[3] == currentPlayer) ||
        (r4[0] == currentPlayer &&
            r3[1] == currentPlayer &&
            r2[2] == currentPlayer &&
            r1[3] == currentPlayer)
    ) {
        return true;
    }
    return false;
}

// function isdraw() {
//     if (
//         r1[0] != 0 &&
//         r1[1] != 0 &&
//         r1[2] != 0 &&
//         r1[3] != 0 &&
//         r2[0] != 0 &&
//         r2[1] != 0 &&
//         r2[2] != 0 &&
//         r2[3] != 0 &&
//         r3[0] != 0 &&
//         r3[1] != 0 &&
//         r3[2] != 0 &&
//         r3[3] != 0 &&
//         r4[0] != 0 &&
//         r4[1] != 0 &&
//         r4[2] != 0 &&
//         r4[3] != 0
//     ) {
//         document.getElementById("winner").innerHTML = "Draw";
//     }
// }

function isdraw() {
    if (r1.includes(0) || r2.includes(0) || r3.includes(0) || r4.includes(0)) {
        return true;
    }
    return false;
}

function draw() {
    let r5 = r1.concat(r2).concat(r3).concat(r4);
    console.log(r5);
    if (!r5.includes(0)) {
        document.getElementById("winner").innerHTML = "draw";
        finished = true;
    }
}