//Date

// let data = new Date()
// console.log(data);

// let data1 = new Date(2026,1,13)
// console.log(data1);

// getter Method

// let data = new Date()
// console.log(data);

// console.log(data.getDate());
// console.log(data.getMonth());
// console.log(data.getFullYear());
// console.log(data.getHours());
// console.log(data.getTime());
// console.log(data.getMinutes());
// console.log(data.getMilliseconds());
// console.log(data.getSeconds());
// console.log(data.getDay());
// console.log(data.getTimezoneOffset());
// console.log(data.getUTCDate());
// console.log(data.getUTCMonth());

// //! setter Method
// let data1 = new Date()
// let year = data1.setFullYear(2025)
// console.log(data1.getFullYear());
// console.log(data1.getMonth());
// console.log(data1.getDate());
// console.log(data1.getHours());
// console.log(data1.getMinutes());
// console.log(data1.getSeconds());
// console.log(data1.getMilliseconds());
// console.log(data1.getTime());
// console.log(data1.getDay());

// data1.setMonth(0)

// console.log(data1);

// create a age calculator using date method

let birthDate = new Date(2002, 10, 13);
let currDate = new Date();

let age = currDate.getFullYear() - birthDate.getFullYear();
console.log(age);

// get a greeting message based on the current time

let date = new Date();
let currHour = date.getHours();
if (currHour < 12) {
  console.log("Good Morning!");
} else if (currHour < 18) {
  console.log("Good Afternoon!");
} else if (currHour < 21) {
  console.log("Good Evening!");
} else {
  console.log("Good Night!");
}
