function makeClick() {
    document.getElementsByTagName("div")[0].innerHTML = "OnClick can Use every Elements not only in button!";
    document.getElementsByTagName("div")[0].style.color = "gold";
    document.getElementsByTagName("div")[0].style.backgroundColor = "#ae6ee3"
}



function clickMe() {
    document.getElementById("text").innerHTML = "Hello world";
    document.getElementById("text").style.color = "blue";
}

function Remove() {
    document.getElementById("text").innerHTML = "Remove";
    document.getElementById("text").style.color = "green";
}