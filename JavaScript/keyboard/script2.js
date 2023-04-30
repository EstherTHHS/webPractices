function pressfun(obj) {
  var x = "";
  if (document.getElementById("check").checked) {
    x = obj.innerHTML.toUpperCase();
  } else {
    x = obj.innerHTML.toLowerCase();
  }
  document.getElementById("dataShowbox").innerHTML += x;
  console.log(document.getElementById("dataShowbox").innerHTML);
}

function charAt() {
  var x = document.getElementById("dataShowbox").innerHTML;

  var index = document.getElementById("enternumber").value;

  alert(x.charAt(index));
}

function charCodeAt() {
  var x = document.getElementById("dataShowbox").innerHTML;
  var index = document.getElementById("enternumber").value;
  alert(x.charCodeAt(index));
}

function toUpper() {
  var x = document.getElementById("dataShowbox").innerHTML;
  var result = x.toUpperCase();
  alert(result);
}

function toLower() {
  var txt = document.getElementById("dataShowbox").innerHTML;
  var result = txt.toLowerCase();
  alert(result);
}

function includes() {
  var x = document.getElementById("dataShowbox").innerHTML;
  var index = document.getElementById("enternumber").value;
  alert(x.includes(index));
}

function indexOf() {
  var x = document.getElementById("dataShowbox").innerHTML;
  var index = document.getElementById("enternumber").value;
  alert(x.indexOf(index));
}

function lastindexOf() {
  var x = document.getElementById("dataShowbox").innerHTML;
  var index = document.getElementById("enternumber").value;
  alert(x.lastIndexOf(index));
}

function startsWith() {
  var x = document.getElementById("dataShowbox").innerHTML;
  var index = document.getElementById("enternumber").value;
  alert(x.startsWith(index));
}

function endsWith() {
  var x = document.getElementById("dataShowbox").innerHTML;
  var index = document.getElementById("enternumber").value;
  alert(x.endsWith(index));
}

function trim() {
  var x = document.getElementById("dataShowbox").innerHTML;
  alert(x.trim());
}

function spaceBar() {
  document.getElementById("dataShowbox").innerHTML += "&nbsp";
}

function clearBtn() {
  document.getElementById("dataShowbox").innerHTML = null;
}
