$(document).ready(function () {
  let dark = false;
  if (localStorage.getItem("dark")) {
    dark = false;
    $("#body").addClass("body");
    $("h2").addClass("text");
    $("#user").addClass("text");
    $("#user1").addClass("text");
    $("span").addClass("text");
  } else {
    dark = true;
    $("#body").removeClass("body");
    $("h2").removeClass("text");
    $("#user").removeClass("text");
    $("#user1").removeClass("text");
    $("span").removeClass("text");
  }

  $("#mode").click(function () {
    dark = !dark;
    localStorage.setItem("dark", dark);
    $("#body").toggleClass("body");
    $("h2").toggleClass("text");
    $("#user").toggleClass("text");
    $("#user1").toggleClass("text");
    $("span").toggleClass("text");
  });

  if (localStorage.getItem("name")) {
    let finalname = localStorage.getItem("name");

    $("#name").val(finalname);
  }
  if (localStorage.getItem("email")) {
    let finalmail = localStorage.getItem("email");

    $("#email").val(finalmail);
  }
  $("#save").click(function () {
    let name = $("#name").val();
    let email = $("#email").val();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  });
});
