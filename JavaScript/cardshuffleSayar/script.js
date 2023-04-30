// window.addEventListener("keypress", function(e) {
//     // console.log(e);
//     if (e.key == "a") {
//         console.log("move left");
//     } else if (e.key == "s") {
//         console.log("move right");
//     } else if (e.key == "d") {
//         console.log("move up");
//     } else if (e.key == "f") {
//         console.log("move down");
//     }
// });
//star random card game
let card = [
  "#990000",
  "#00FFAB",
  "blue",
  "black",
  "#84577C",
  "tomato",
  "#990000",
  "#00FFAB",
  "blue",
  "black",
  "#84577C",
  "tomato",
];

let randomCardlist = [];
let firstClick = "";
let secondClick = "";
let firstId = "";
let secondId = "";

function initial() {
  random();
  for (let index = 0; index < randomCardlist.length; index++) {
    document.getElementsByClassName("cards")[index].style.background =
      randomCardlist[index];
  }
}

let i = 0;
let random = () => {
  while (i < 12) {
    let key = Math.floor(Math.random() * (card.length - 1));
    if (checkTwice(card[key])) {
      random();
    } else {
      randomCardlist.push(card[key]);
      i++;
    }
  }
};

let checkTwice = (value) => {
  let count = 0;
  for (let index = 0; index < randomCardlist.length; index++) {
    if (randomCardlist[index] == value) {
      count++;
    }
  }

  if (count == 2) return true;
  else return false;
};

function ckick_color(obj) {
  if (firstClick == "") {
    firstClick = obj.style.background;
    firstId = obj.id;
  } else {
    secondClick = obj.style.background;
    secondId = obj.id;

    if (firstClick == secondClick && firstId != secondId) {
      document.getElementById(`${firstId}`).style.display = "none";
      document.getElementById(`${secondId}`).style.display = "none";
    }

    firstClick = "";
    secondClick = "";
    firstId = "";
    secondId = "";
  }
  console.log(`first=${firstId}`);
  console.log(`second=${secondId}`);
}
