function Show() {
    var num = document.getElementById("num").value;
    var time = document.getElementById("multiply_num").value;
    console.log(num);
    console.log(time);

    document.getElementById("ans").innerHTML = "";

    for (let index = 1; index <= time; index++) {

        var result;
        result = num * index;
        console.log(result);

        document.getElementById("ans").innerHTML += "<p>" + num + "x" + index + "=" + result + "</p>";

    }


}