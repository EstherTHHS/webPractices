let word = "";
let show = "";
let maxChar = 122;
let minChar = 97;
var slength;
document.getElementById("randomChar").innerHTML = "";
// const random_char = [];
// const typed_char = [];
var type_data;
var insert;

function random() {
    for (let index = 0; index <= 2; index++) {
        word = Math.floor(Math.random() * (maxChar - minChar + 1) + minChar);
        show += String.fromCharCode(word);
        // random_char.push(show);
        // console.log(random_char);
    }
    document.getElementById("randomChar").innerHTML = show;

    slength = show.length;
    console.log("Show Length" + slength);
    console.log(typeof slength);
}

var total_typed = 0;
//keyup ==keypress can use which you like
window.addEventListener("keyup", function(e) {
    type_data = document.getElementById("key1");
    type_data.innerHTML += e.key;

    document.getElementById("key1").style.display = "block";
    insert = type_data.innerHTML.toString();
    total_typed++;
    // console.log(typed_char.push(key1));

    console.log("total typed  is" + total_typed);
    console.log(typeof total_typed);
    checkAll();
});

function checkAll() {
    if (total_typed === 3) {
        if (total_typed === slength && show === insert) {
            document.getElementById("checkTypeChar").innerHTML = "CORRECT!";

            callrandom();
        } else {
            document.getElementById("checkTypeChar").innerHTML = "WRONG!";
            document.getElementById("key1").style.display = "none";
            document.getElementById("key1").innerHTML = "";
            total_typed = "";
        }
    }
}

function callrandom() {
    document.getElementById("key1").innerHTML = "";
    document.getElementById("key1").style.display = "none";

    word = "";
    show = "";
    total_typed = "";
    // random_char = [];
    // // typed_char = [];
    random();
}