// function add(x, y) {
//     return x + y;
// }
//multiple parameters
// let sum = (x, y) => x + y;
// console.log(sum(5, 12));

//one parameter
// let sum = (x) => x * 2;
// console.log(sum(10));

//no parameter arrow function
// let put = () => "HEllo";
// console.log(put());
// setTimeout(() => {
//     randomNumber();
// }, 2000);
// let a = setInterval(() => {
//     randomNumber();
// }, 1000);

// let b = setInterval(() => {
//     console.log("HEllo world");
// }, 1500);

// setTimeout(() => {
//     clearInterval(a);
// }, 3000);

// let randomNumber = () => console.log(Math.floor(Math.random() * 100));

//Number to string random generator

let randomAlphabet = () => {
    let num = Math.floor(Math.random() * (90 - 65 + 1) + 65);
    console.log(String.fromCharCode(num));
};

let alpha = setInterval(() => {
    randomAlphabet();
}, 1000);

let alphastop = setTimeout(() => {
    clearInterval(alpha);
}, 11000);