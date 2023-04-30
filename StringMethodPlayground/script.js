var typing = "";
var i = 0;
function caps_Lock() {
  i += 1;
  if (i % 2 != 0) {
    document.getElementById("caps_lock").style.backgroundColor = "black";
    document.getElementById("checkbox").checked = true;
    for (let index = 0; index < 26; index++) {
      document
        .getElementsByClassName("alphabet")
        [index].setAttribute("class", "alphabet alphabet_uppercase");
    }
  } else {
    document.getElementById("checkbox").checked = false;
    document.getElementById("caps_lock").style.backgroundColor = "";
    for (let index = 0; index < 26; index++) {
      document
        .getElementsByClassName("alphabet")
        [index].setAttribute("class", "alphabet");
    }
  }
}
function alphabet(obj) {
  if (i % 2 != 0) {
    typing += obj.id;
  } else {
    typing += obj.innerHTML;
  }
  document.getElementById("type_input").innerHTML = typing;
}
function number(obj) {
  typing += obj.id;
  document.getElementById("type_input").innerHTML = typing;
}
function space() {
  typing += "\xa0";
  document.getElementById("type_input").innerHTML = typing;
}
function Clear() {
  typing = "";
  document.getElementById("type_input").innerHTML = typing;
  document.getElementById("answer_box").innerHTML = "";
}
function to_UpperCase() {
  document.getElementById("answer_box").innerHTML = typing.toUpperCase();
}
function to_LowerCase() {
  document.getElementById("answer_box").innerHTML = typing.toLowerCase();
}
var data;
var type_input_none;
var data_none;
function char_At() {
  type_input_none = document.getElementById("type_input").innerHTML;
  data_none = document.getElementById("data").value;
  if (type_input_none == "") {
    window.alert("Type Something In Input Box");
  } else if (data_none == "") {
    window.alert("Type Something In Input Box");
  } else {
    data = document.getElementById("data").value;
    document.getElementById("answer_box").innerHTML = typing.charAt(data);
  }
  // window.alert(typing.charAt(data));
}
function char_Code_At() {
  type_input_none = document.getElementById("type_input").innerHTML;
  data_none = document.getElementById("data").value;
  if (type_input_none == "") {
    window.alert("Type Something In Input Box");
  } else if (data_none == "") {
    window.alert("Type Something In Input Box");
  } else {
    data = document.getElementById("data").value;
    document.getElementById("answer_box").innerHTML = typing.charCodeAt(data);
  }
}
function Trim() {
    data = document.getElementById("data").value;
    document.getElementById("answer_box").innerHTML = typing.trim(data);
}
function Includes() {
  type_input_none = document.getElementById("type_input").innerHTML;
  data_none = document.getElementById("data").value;
  if (type_input_none == "") {
    window.alert("Type Something In Input Box");
  } else if (data_none == "") {
    window.alert("Type Something In Input Box");
  } else {
    data = document.getElementById("data").value;
    document.getElementById("answer_box").innerHTML = typing.includes(data);
  }
}
function index_Of() {
  type_input_none = document.getElementById("type_input").innerHTML;
  data_none = document.getElementById("data").value;
  if (type_input_none == "") {
    window.alert("Type Something In Input Box");
  } else if (data_none == "") {
    window.alert("Type Something In Input Box");
  } else {
    data = document.getElementById("data").value;
    document.getElementById("answer_box").innerHTML = typing.indexOf(data);
  }
}
function last_index_Of() {
  type_input_none = document.getElementById("type_input").innerHTML;
  data_none = document.getElementById("data").value;
  if (type_input_none == "") {
    window.alert("Type Something In Input Box");
  } else if (data_none == "") {
    window.alert("Type Something In Input Box");
  } else {
    data = document.getElementById("data").value;
    document.getElementById("answer_box").innerHTML = typing.lastIndexOf(data);
  }
}
function starts_With() {
  type_input_none = document.getElementById("type_input").innerHTML;
  data_none = document.getElementById("data").value;
  if (type_input_none == "") {
    window.alert("Type Something In Input Box");
  } else if (data_none == "") {
    window.alert("Type Something In Input Box");
  } else {
    data = document.getElementById("data").value;
    document.getElementById("answer_box").innerHTML = typing.startsWith(data);
  }
}
function ends_With() {
  type_input_none = document.getElementById("type_input").innerHTML;
  data_none = document.getElementById("data").value;
  if (type_input_none == "") {
    window.alert("Type Something In Input Box");
  } else if (data_none == "") {
    window.alert("Type Something In Input Box");
  } else {
    data = document.getElementById("data").value;
    document.getElementById("answer_box").innerHTML = typing.endsWith(data);
  }
}
