//Json syntax
//1. Key.value pairs {“name” : “John”}
// 2. Double quotes
// 3. Specified Data Types
// 4. File type must be “.json”
// let person = {
//   name: "Smith",
//   age: 28,
//   married: false,
//   own: ["car", "bike"],
//   firneds: [
//     { name: "john", age: 30 },

//     {
//       name: "mary",
//       age: 25,
//     },
//   ],
//   job: null,
// };

// console.log(person.own[0]);
// console.log(person.firneds[1].age);

// js object to json string
// let jsonString = JSON.stringify(person);

// console.log(person);
// console.log(jsonString.name);

// //json string to js object
// let jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);
// console.log(jsonObject.firneds[1].name);

fetch("./app.json")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
// document.getElementById(
//   "person"
// ).innerHTML = ` <div>Name : <span>${person.name}</span></div>
// <div>Age : <span>${person.age}</span></div>`;
