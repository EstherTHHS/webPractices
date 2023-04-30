var bubble = document.getElementsByClassName("bubble");
var typeKey = "";

function random() {
    bubble.innerHTML = "";
    for (let index = 0; index < bubble.length; index++) {
        bubble[index].innerHTML = String.fromCharCode(
            Math.floor(Math.random() * (122 - 97 + 1) + 97)
        );
        // console.log(bubble[index].innerHTML);
    }
}

window.addEventListener("keypress", (e) => {
    typeKey = e.key;
    if (press == " ") location.reload();

    console.log("typeKey is " + typeKey);
    for (let index = 0; index < bubble.length; index++) {
        console.log(bubble[index].innerHTML);
        if (typeKey == bubble[index].innerHTML) {
            bubble[index].classList.add("pressed");
            setTimeout(() => {
                document.getElementsByClassName("bubble")[index].style.display = "none";
            }, 100);
        }
    }
});

// var character = document.getElementsByClassName("bubble");
// let load = () => {
//     for (let index = 0; index < character.length; index++)
//         character[index].innerHTML = String.fromCharCode(
//             Math.floor(Math.random() * (90 - 65 + 1) + 65)
//         );
// };
// window.addEventListener("keypress", (event) => {
//     var press = event.key.toUpperCase();
//     if (press == " ") location.reload();
//     for (let index = 0; index < character.length; index++)
//         if (character[index].innerHTML == press)
//             character[index].style.display = "none";
// });