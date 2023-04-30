//web teacher's code for reference
let r1 = [0, 0, 0, 0];
let r2 = [0, 0, 0, 0];
let r3 = [0, 0, 0, 0];
let r4 = [0, 0, 0, 0];

var first = 1;
var second = 2;
var start = first;
var current = start;
var finished = false;
bot();

function flip(obj) {
    if (finished == false) {
        var valid = true;
        let tmp = obj.id.split(",");

        let clickRow = Number(tmp[0]);
        let clickColumn = Number(tmp[1] - 1);

        switch (clickRow) {
            case 1:
                if (r1[clickColumn] != 0) {
                    valid = false;
                    break;
                }
                r1[clickColumn] = current;
                break;
            case 2:
                if (r2[clickColumn] != 0) {
                    valid = false;
                    break;
                }
                r2[clickColumn] = current;
                break;
            case 3:
                if (r3[clickColumn] != 0) {
                    valid = false;
                    break;
                }
                r3[clickColumn] = current;
                break;
            case 4:
                if (r4[clickColumn] != 0) {
                    valid = false;
                    break;
                }
                r4[clickColumn] = current;
                break;
        }

        if (valid) {
            obj.style.transform = "scaleY(-1)";
            // change color
            if (current == start) {
                obj.style.background = "tomato";
            } else {
                obj.style.background = "teal";
            }

            // position change
            if (current == first) {
                current = second;
                document.getElementById("turn").innerHTML = "Player 2 Turn!";
                document.getElementById("turn").style.color = "teal";
            } else {
                current = first;
                document.getElementById("turn").innerHTML = "Player 1 Turn!";
                document.getElementById("turn").style.color = "tomato";

                setTimeout(() => {
                    bot();
                }, 500);
            }
            checkWhoWin();
            if (!finished) {
                draw();
            }
        }
    }
}

function checkWhoWin() {
    // horizontal check
    if (horizontal(first)) {
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win!";
    } else if (horizontal(second)) {
        finished = true;
        document.getElementById("winner").innerHTML = "Player 2 win!";
    }

    //vertical check
    if (vertical(first)) {
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win!";
    } else if (vertical(second)) {
        finished = true;
        document.getElementById("winner").innerHTML = "Player 2 win!";
    }

    //diagonal
    if (diagonal1(first)) {
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win!";
    } else if (diagonal1(second)) {
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win!";
    } else if (diagonal2(first)) {
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win!";
    } else if (diagonal2(second)) {
        finished = true;
        document.getElementById("winner").innerHTML = "Player 2 win!";
    }
}

function horizontal(player) {
    if (hrowCheck(r1, player)) {
        return true;
    } else if (hrowCheck(r2, player)) {
        return true;
    } else if (hrowCheck(r3, player)) {
        return true;
    } else if (hrowCheck(r4, player)) {
        return true;
    } else {
        return false;
    }
}

// player 1 or 2
function hrowCheck(array, player) {
    var count = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] == player) {
            count++;
        }
    }
    if (count == 4) {
        return true;
    }
    return false;
}

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

function diagonal1(player) {
    if (
        r1[0] == player &&
        r2[1] == player &&
        r3[2] == player &&
        r4[3] == player
    ) {
        return true;
    }
    return false;
}

function diagonal2(player) {
    if (
        r1[3] == player &&
        r2[2] == player &&
        r3[1] == player &&
        r4[0] == player
    ) {
        return true;
    }
    return false;
}

function draw() {
    if (!r1.concat(r2, r3, r4).includes(0)) {
        finished = true;
        document.getElementById("winner").innerHTML = "Draw!";
        document.getElementById("winner").style.color = "red";
    }
}

function bot() {
    let row = Math.floor(Math.random() * 4 + 1);
    let col = Math.floor(Math.random() * 4 + 1);
    switch (row) {
        case 1:
            if (r1[col - 1] != 0) bot();
            break;
        case 2:
            if (r2[col - 1] != 0) bot();
            break;
        case 3:
            if (r3[col - 1] != 0) bot();
            break;
        case 4:
            if (r4[col - 1] != 0) bot();
            break;
    }
    document.getElementById(row + "," + col).click();
}