// let b = false;

// function aname(x) {
//     if (x == 10) {
//         b = true;
//         return [1, 2, 3, 4, 5];
//     } else {
//         return "Error";
//     }
// }

// let y = aname(5);
// if (b) {
//     console.log(y.pop());
// } else {
//     console.log(y);
// }

//promise then catch
//resolve and reject parameter include

// new Promise((resolve, reject) => {});

// function p(x) {
//     return new Promise((resolve, reject) => {
//         //resolve
//         resolve(result);
//         //reject
//         reject(result);
//     });
// }

// let p = (x) =>
//     new Promise((resolve, reject) => {
//         if (x == 10) {
//             let array = [1, 2, 3, 4, 5];
//             //resolve, true state
//             resolve(array);
//         } else {
//             //reject ,false state
//             reject("Error");
//         }
//     });

// p(10)
//     .then((res) => {
//         console.log(res.pop());
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Final");
//     });
//++++++++++++++++++++++???////

//.race() .all()

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Process1");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Process2");
//     }, 2000);
// });

// Promise.race([p1, p2]).then((val) => {
//     console.log(val);
// });

// Promise.all([p1, p2]).then((val) => {
//     console.log(val);
// });

//example code

let exam = (mark) =>
    new Promise((resolve, reject) => {
        var result;
        if (mark >= 100) {
            result = {
                price: "$100",
                level: "2",
            };
            resolve(result);
        } else {
            result = {
                fail: "Try again!",
            };
            reject(result);
        }
    });

exam(20)
    .then((message) => {
        console.log("Your resolve:" + message.price);
    })
    .catch((error) => {
        console.log("Your reject:" + error.fail);
    })
    .finally(() => {
        console.log("exam finish");
    });