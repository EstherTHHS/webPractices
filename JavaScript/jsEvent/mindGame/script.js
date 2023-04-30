var mine;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var finished = false;
var userPress;
var count = 0;

mineBuild();

function mineBuild() {
    var row = Math.floor(Math.random() * 6 + 1);
    var col = Math.floor(Math.random() * 6 + 1);
    mine = row + "" + col;

    p1 = row - 1 + "" + (col - 1);
    p2 = row - 1 + "" + col;
    p3 = row - 1 + "" + (col + 1);
    p4 = row + "" + (col - 1);
    p5 = row + "" + (col + 1);
    p6 = row + 1 + "" + (col - 1);
    p7 = row + 1 + "" + col;
    p8 = row + 1 + "" + (col + 1);

    console.log(mine);
}

function press(obj) {
    if (finished == false) {
        userPress = Number(obj.id);
        obj.setAttribute("class", "cell clicked");

        if (userPress == mine) {
            gameOverDisplay();
            obj.style.backgroundColor = "#B20600";
            obj.innerHTML = "💣";
            gameOverSound();
        } else if (
            userPress == p1 ||
            userPress == p2 ||
            userPress == p3 ||
            userPress == p4 ||
            userPress == p5 ||
            userPress == p6 ||
            userPress == p7 ||
            userPress == p8
        ) {
            obj.style.backgroundColor = "#B20600";
            playClick();
        } else {
            obj.style.backgroundColor = "#019267";
            playClick();
        }
        checkWin();
    }
}

// function checkWin(obj) {
//     var match = 0;

//     for (let index = 0; index < userClick; index++) {
//         match++;
//         if (match != mine) {
//             gameWinDisplay();
//         }
//     }
// }

function checkWin() {
    if (document.getElementsByClassName("clicked").length == 35) {
        finished = true;
        for (let index = 0; index < 36; index++) {
            document.getElementsByClassName("cell")[index].style.backgroundColor =
                "#14C38E";
        }
        document.getElementById("32").innerHTML = "G";
        document.getElementById("33").innerHTML = "A";
        document.getElementById("34").innerHTML = "M";
        document.getElementById("35").innerHTML = "E";

        document.getElementById("42").innerHTML = "W";
        document.getElementById("43").innerHTML = "I";
        document.getElementById("44").innerHTML = "N";
        document.getElementById("45").innerHTML = "!";
    }
}

function playClick() {
    document.getElementById("clickCell").play();
}

function gameOverSound() {
    document.getElementById("gameOver").play();
}

function gameOverDisplay() {
    finished = true;
    for (let index = 0; index < 36; index++) {
        document.getElementsByClassName("cell")[index].style.backgroundColor =
            "#B20600";
    }

    document.getElementById("32").innerHTML = "G";
    document.getElementById("33").innerHTML = "A";
    document.getElementById("34").innerHTML = "M";
    document.getElementById("35").innerHTML = "E";

    document.getElementById("42").innerHTML = "O";
    document.getElementById("43").innerHTML = "V";
    document.getElementById("44").innerHTML = "E";
    document.getElementById("45").innerHTML = "R";
}