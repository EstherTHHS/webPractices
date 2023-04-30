//Question 1 .(103+2) is
var first_int = 103;
var sec_int = 2;
var result1 = first_int + sec_int;
document.getElementById("a1").innerHTML = result1;
document.getElementById("a1").setAttribute("class", "p1change");

//Question 2 .(34-2) is
var dig1 = 34;
var dig2 = 2;
var result2 = dig1 - dig2;
document.getElementById("a2").innerHTML = result2;
document.getElementById("a2").setAttribute("class", "p1change");

//Question 3 .(2*2) is

var value = 2;
var result3 = value * value;
document.getElementById("a3").innerHTML = result3;
document.getElementById("a3").setAttribute("class", "p1change");

//Question 4 .(3/4) is
var dig3 = 3;
var dig4 = 4;
var result4 = dig3 / dig4;
document.getElementById("a4").innerHTML = result4;
document.getElementById("a4").setAttribute("class", "p1change");

//Question 5 .(1++) is
var x = 1;
var y = x++;
document.getElementById("a5").innerHTML = y;
document.getElementById("a5").setAttribute("class", "p1change");

//Question 6 .(--2) is
var num = 3;
num -= 2;
document.getElementById("a6").innerHTML = num;
document.getElementById("a6").setAttribute("class", "p1change");

// Question 7. <span id="x">7</span> -<span id="y">5</span></p>

var num1 = document.getElementById("x").innerHTML;
//console.log(num1);
var num2 = document.getElementById("y").innerHTML;
//console.log(num2);
var result7 = num1 - num2;
console.log(result7);
document.getElementById("a7").innerHTML = result7;
document.getElementById("a7").setAttribute("class", "p1change");