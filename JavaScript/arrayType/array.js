//array spread
// let nums = [1, 2, 3];
// let alpha = ["a", "b", "c"];
// let result = [...nums, ...alpha];
//let four=[..nums,4]
//let zero=[0,...alpha]
// console.log(result);

//normal spread

// let nums = [1, 2, 3];
// let alpha = ["a", "b", "c"];
// let result = [nums, alpha];
// console.log(result);

// let result = [2, 3, 4, 5, 6].reduce((a, n) => a + n);
// let res = [2, 3, 4, 5, 6].reduce((b, n) => b - n);
// console.log(res);

//array destucturing
// let nums = [123, 456];
// let [a, b] = nums;
// console.log(a);
// console.log(b);

// function add([a, b]) {
//     return a * b;
// }
// let nums = [1, 3];
// var a = add(nums);

// console.log(a);

//array method

// let plants = ["bb", "aa", "ee", "eww", 13, "ool"];
// //not using ushift
// plants.reverse().push("QQQ");

// // plants.shift();
// console.log(plants.reverse());

//slice(parmeter1,parameter2)
// const data = ["a", "b", "e", "t", "r"];

// console.log(data.slice(1, -2));

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));

//sorting
// const alpha = ["a", "8", "2", "e", "r", "d", "@", "$", "N", "P", 222];
// //first special char,second string number,third integer,fourth A to Z ,five a to z
// let res = alpha.sort();
// console.log(res);

// const array = ["Item 1", "Item 2", "Item 3", 2223];
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;
// text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
//implict
// let result;
// result = "4" - "2" + 1;
// console.log(result); // 2
// result = "4" - 2;
// console.log(result);

//implict boolean number
// let res;
// //in this case true false is boolean type. Not string type
// res = true + true - 2 + false + true;
// console.log(res);

const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0