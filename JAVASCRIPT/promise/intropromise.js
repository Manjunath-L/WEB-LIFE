// let data = fetch("https://api.github.com/users");

// console.log(data);

// let final_data = data.then((res) => {
//   //   console.log(res.json());
//   return res.json();
// });

// final_data.then((res) => console.log(res));

console.log("start");

setTimeout(() => {
  console.log("1 second Completed");
}, 1000);

setTimeout(() => {
  console.log("0 second Completed");
}, 0);

let promise = new Promise((resolve, reject) => {
  resolve("Promise Resolved"); // microtask quee
});

promise.then((res) => console.log(res));
console.log("end");

