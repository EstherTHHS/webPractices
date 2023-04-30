function calculate() {
    var num1 = document.getElementById("fnum").value;

    var num2 = document.getElementById("snum").value;
    var operator = document.getElementById("opt").value;
    console.log(num1);
    console.log(num2);
    console.log(operator);

    var total;

    switch (operator) {
        case "+":
            //Number() convert string to number if not string concatination will be so that first 
            //change string to Number
            total = Number(num1) + Number(num2);

            break;
        case "-":
            total = num1 - num2;
            break;
        case "*":
            total = num1 * num2;
            break;
        case "/":
            total = num1 / num2;
            break;
        case "%":
            total = num1 % num2;
            break;

    }

    document.getElementById("result").innerHTML = total;

}