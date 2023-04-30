// let img;
// let colors;
// getData();
// // document.querySelectorAll(".box1").style.backgroundColor = "red";
// // document.getElementById("box1").style.backgroundColor = "skyblue";
// async function getData() {
//   await fetch("http://localhost:3001/hiUser/")
//     .then((res) => res.json())
//     .then((data) => {
//       for (const iterator of data.studentReview) {
//         if (iterator.gender === "F") {
//           img = iterator.profile;

//           //   $("div .boxes").css("background", "color");
//         } else {
//           img = iterator.profile;

//           $("div .boxes").css("background", "color");
//         }
//         colors = iterator.hex;
//         // let rating = iterator.rate;
//         // for (let index = 0; index < rating.length; index++) {
//         // document.getElementById("rate").innerHTML =""

//         document.getElementById("box").innerHTML += `
//             <div style="background-color:${colors};" class="col-md-3  m-5 box1" >
//                 <img src="${img}" alt="girl" class="girlfloat  me-2">
//                <p>${iterator.firstName}<span>${iterator.lastName}</span><span>(${iterator.age})</span></p>
//                <p>${iterator.job}</p>
//                <p id="rate">${iterator.rate}<span><img src="fillstar.png"></span></p>
//                <p class="m-3"> "${iterator.review}"</p>

//             </div>

//      `;
//       }
//     })
//     .catch((error) => console.log(error));
// }

function f(x) {
  x++;
  (x = x - 3) && ++x;
  return x--;
}

console.log(f(2));

// let x = [1, 2];
// add(x, 3);
// console.log(`x = ${x}`);
// function add(array, element) {
//   array = [element];
//   console.log(array);
// }

// console.log(add(x, 3));
