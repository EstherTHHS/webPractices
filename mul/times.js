function show() {
  var result = document.getElementById("result");

  result.innerHTML = "";
  var x = document.getElementById("multipy").value;
  var y = document.getElementById("times").value;
  for (let i = 1; i <= y; i++) {
    result.innerHTML += x + "x" + i + "=" + x * i + "<br>";
    // console.log(result);
  }
}

console.log(show());
