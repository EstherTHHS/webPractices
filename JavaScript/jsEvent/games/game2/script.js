var answer;
var score = 0;
var time = 0;

function start() {
    document
        .getElementById("btnstart")
        .setAttribute("class", "btnstart inactivestart");
    document.getElementById("btnstart").disabled = true;

    document.getElementById("btnstop").disabled = false;
    document
        .getElementById("btnstop")
        .setAttribute("class", "btnstop activestop ");

    document
        .getElementById("card1")
        .setAttribute("class", "card1 cardactivestart");
    document
        .getElementById("card2")
        .setAttribute("class", "card2 cardactivestart");
    document
        .getElementById("card3")
        .setAttribute("class", "card3 cardactivestart");

    document.getElementById("card1").disabled = false;
    document.getElementById("card2").disabled = false;
    document.getElementById("card3").disabled = false;
    document.getElementById("scoreans").innerHTML = "";
    document.getElementById("tAns").innerHTML = "";
    document.getElementById("list").innerHTML = "";
    score = 0;
    quiz();
}

function stop() {
    document
        .getElementById("btnstart")
        .setAttribute("class", "btnstart activestart");
    document.getElementById("btnstart").disabled = false;

    document.getElementById("btnstop").disabled = true;
    document
        .getElementById("btnstop")
        .setAttribute("class", "btnstop inactivestop");

    document
        .getElementById("card1")
        .setAttribute("class", "card1 cardinactivestop");
    document
        .getElementById("card2")
        .setAttribute("class", "card2 cardinactivestop");
    document
        .getElementById("card3")
        .setAttribute("class", "card3 cardinactivestop");

    document.getElementById("card1").disabled = true;
    document.getElementById("card2").disabled = true;
    document.getElementById("card3").disabled = true;
    document.getElementById("q1").innerHTML = "";
    document.getElementById("card1").innerHTML = "";
    document.getElementById("card2").innerHTML = "";
    document.getElementById("card3").innerHTML = "";
    document.getElementById("list").innerHTML = "Your Score is : " + score;
}

function quiz() {
    var num1 = Math.floor(Math.random() * 100 + 1);
    var num2 = Math.floor(Math.random() * 100 + 1);
    answer = num1 + num2;
    console.log(answer);
    document.getElementById("q1").innerHTML = num1 + "+" + num2;
    let position = Math.floor(Math.random() * 3 + 1);
    let num3 = Math.floor(Math.random() * 100 + 1);
    let num4 = Math.floor(Math.random() * 100 + 1);

    if (position == 1) {
        document.getElementById("card1").innerHTML = answer;
        document.getElementById("card2").innerHTML = num3;
        document.getElementById("card3").innerHTML = num4;
    } else if (position == 2) {
        document.getElementById("card1").innerHTML = num3;
        document.getElementById("card2").innerHTML = answer;
        document.getElementById("card3").innerHTML = num4;
    } else {
        document.getElementById("card1").innerHTML = num3;
        document.getElementById("card2").innerHTML = num4;
        document.getElementById("card3").innerHTML = answer;
    }
}

function card1() {
    console.log("cared1");
    console.log(answer);

    var userinput = document.getElementById("card1").innerHTML;
    console.log(userinput);

    if (answer == userinput) {
        score += 10;
        document.getElementById("scoreans").innerHTML = score;

    } else {
        score -= 10;
        document.getElementById("scoreans").innerHTML = score;
    }
    time += 1;
    document.getElementById("tAns").innerHTML = time;
    document.getElementById("card1").value = "";
    quiz();
}

function card2() {
    console.log("cared2");
    console.log(answer);


    var userinput = document.getElementById("card2").innerHTML;

    console.log(userinput);

    if (answer == userinput) {

        score += 10;
        document.getElementById("scoreans").innerHTML = score;

    } else {
        score -= 10;
        document.getElementById("scoreans").innerHTML = score;
    }
    time += 1;
    document.getElementById("tAns").innerHTML = time;
    document.getElementById("card2").value = "";
    quiz();
}

function card3() {
    console.log("cared3");
    console.log(answer);

    var userinput = document.getElementById("card3").innerHTML;

    console.log(userinput);

    if (answer == userinput) {

        score += 10;
        document.getElementById("scoreans").innerHTML = score;
    } else {
        score -= 10;
        document.getElementById("scoreans").innerHTML = score;
    }
    time += 1;
    document.getElementById("tAns").innerHTML = time;
    document.getElementById("card3").value = "";
    quiz();
}