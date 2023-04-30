// function bmiCalculator(weight, height) {
//     var bmi = Math.round(weight / Math.pow(height, 2));

//     var interpretation;

//     if (bmi < 18.5) {
//         interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
//     } else if (bmi >= 25) {
//         interpretation = "Your BMI is " + bmi + ", so you are overweight.";
//     }

//     return interpretation;
// }
// bmiCalculator(60, 1.8);
// console.log(interpretation);

function isLeap(year) {
    /**************Don't change the code above****************/

    //Write your code here.
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap Year.";
            } else {
                return "Not Leap Year.";
            }
        } else {
            return "Leap Year.";
        }
    } else {
        return "Not Leap Year.";
    }

    /**************Don't change the code below****************/
}
isLeap(1968);