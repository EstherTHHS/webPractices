var answer;

function start() {
    document.getElementById("btnstart").setAttribute("class", "btnstart inactivestart");
    document.getElementById("btnstart").disabled = true;
    document.getElementById("btnstop").disabled = false;
    document.getElementById("btnstop").setAttribute("class", "btnstop activestop ");
    document.getElementById("answerbox").disabled = false;
    document.getElementById("okbtn").disabled = false;
    quiz();
}

function stop() {
    document.getElementById("btnstop").setAttribute("class", "btnstop inactivestop");
    document.getElementById("btnstart").disabled = false;
    document.getElementById("btnstop").disabled = true;
    document.getElementById("btnstart").setAttribute("class", "btnstart activestart");
    document.getElementById("answerbox").disabled = true;
    document.getElementById("okbtn").disabled = true;
    document.getElementById("answerbox").value = "";
    document.getElementById("list").innerHTML = "";
    document.getElementById("q1").innerHTML = "";

}

function quiz() {
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    answer = num1 + num2;
    document.getElementById("q1").innerHTML = num1 + "+" + num2;
}

function checkanswer() {
    var userinput = document.getElementById("answerbox").value;
    if (answer == userinput) {
        document.getElementById("list").innerHTML += "<li>Correct</li>";
    } else {
        document.getElementById("list").innerHTML += "<li>Wrong</li>";
    }
    document.getElementById("answerbox").value = "";
    quiz();

}