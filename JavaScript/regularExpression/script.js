//syntax

// let reg = /hi/;
// let reg1 = new RegExp(`hi`);

// let reg = /hi john/;
// let result = reg.test(`hi john`);
// console.log(result);

//
// let txt = `Is this a
// ll there Is`;
// let pattern = /Is/im;
// let test = txt.match(pattern);
// console.log(test);

// let str = "09odef37689uukWefewrhncni386901kkl&&&&9000HHHHUUUyyyww";
// // let result = str.match(/\d/g);
// let word = str.match(/\w/g);
// let notdigit = str.match(/\D/g);
// let noalpha = str.match(/\W/g);
// console.log(noalpha);
// console.log(result);
// let str = "ABBIiiigeko;ljienceoeE";
// let res = str.match(/[A-E]/g);
// console.log(res);

// var string_date = Date.parse("May 11,2001");
// const date = new Date(string_date);
// console.log(date);

let tday = new Date();
console.log("full year is " + tday.getFullYear());
console.log("Date is " + tday.getMonth() + 1);
console.log("Day is " + tday.getDay());
console.log("Date is " + tday.getDate());
console.log("Hours  is " + tday.getHours());
console.log("Minutes is  " + tday.getMinutes());
console.log(
    "GEt Time is from  1900 jun 1 and still counting " + tday.getTime()
);