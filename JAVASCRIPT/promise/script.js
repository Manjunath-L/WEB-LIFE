// let data = fetch("https://api.github.com/users")
// console.log(data);

// let finaldata = data.then((response) => {
//     return response.json();
// })

// finaldata.then((resp) => {
//     console.log(resp);
// })

//& Promises methods --> promise.then(), promise.catch() and promise.finally()

// let data = fetch("https://api.github.com/users").then(resp => resp.json()).then(resp => console.log(resp)).catch((err) =>{
//     console.log("Error Came 😈");
//     console.log(err.message);
// }).finally(() => {
//     console.log("This will run always 💯")
// })

// let data = fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json()).then(resp => {
//     let name = resp.map(item => item.name)
//     console.log(name);

// })

//& Async and Await

async function fetchData() {
  try {
    let data = await fetch("https://api.github.com/users");
    let finaldata = await data.json();
    console.log(finaldata);
  } catch (error) {
    console.log("Error Came 😈");
    console.log(error.message);
  }
}

fetchData();

//& How to create a own custom promise

// let promise = new Promise((resolve, reject) => {
//     let data = true
//     if (data) {
//         resolve("We got the Data 💯🔥")
//     }
//     else {
//         reject("Failed to Fetch ❌😈")
//     }
// })

// console.log(promise);

//& ex 2

// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//         if(num > 10) {
//             resolve("Number is greater than 10.")
//         }
//         else {
//             reject("Number is smaller")
//         }
//     })

// }
// // checkNumber(20)
// checkNumber(20).then((resp) => console.log(resp)).catch((err) => console.log(err));

//Callback Hell

// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 Completed 🔥");
//         callback()
//     }, 2000)
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 Completed 🔥");
//         callback()
//     }, 5000)
// }

// function task3(anything) {
//     setTimeout(() => {
//         console.log("Task 3 Completed 🔥");
//         anything()
//     }, 3000)
// }
// //& callback hell
// task1(function () {
//     task2(function () {
//         task3(function (){
//             console.log("💯🔥");
//         })
//     })
// })

// //& To Handle callback hell using Promises
// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 1 Completed 🔥");
//       resolve();
//     }, 2000);
//   });
// }

// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 2 Completed 🔥");
//       resolve();
//     }, 5000);
//   });
// }

// function task3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 3 Completed 🔥");
//       resolve();
//     }, 3000);
//   });
// }
// // task1().then(() => task2().then(() => task3().then()))
// async function task() {
//   await task1();
//   await task2();
//   await task3();
// }
// task();

// create one restaurant application which consist 4 functions --> 1st function greet customer, 2nd function taking the order, 3rd function prepare a food and 4th function your order is ready. Each function will take some time to complete. Handle this using promises.

// function greetCustomer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Welcome to our Restaurant!");
//       resolve();
//     }, 1000);
//   });
// }

// function takeOrder() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Your order is taken.");
//       resolve("Panner Butter Masala");
//     }, 2000);
//   });
// }

// function prepareFood(order) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(order + " is being prepared...");
//       resolve(order);
//     }, 3000);
//   });
// }

// function orderReady(order) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(order + " is ready! Please collect your order 😋.");
//       resolve();
//     }, 1000);
//   });
// }

// // greetCustomer()
// //   .then(takeOrder)
// //   .then(prepareFood)
// //   .then(orderReady)
// //   .then(() => {
// //     console.log("Thank you! Visit Again.");
// //   })
// //   .catch((error) => {
// //     console.log("Error:", error);
// //   });

// async function restaurantFlow() {
//   try {
//     await greetCustomer();
//     const order = await takeOrder();
//     const preparedOrder = await prepareFood(order);
//     await orderReady(preparedOrder);
//     console.log("Thank you! Visit Again.");
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// restaurantFlow();
