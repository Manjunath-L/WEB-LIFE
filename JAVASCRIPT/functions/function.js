// function greet1() {
//   //? function def
//   console.log("Welcom to js"); //! function body
// }

// greet1(); //? function calling

// function greet(name) {
//   //? function def
//   console.log("Welcom to js " + name); //! function body
// }

// greet(); //? function calling
// greet("manju"); //? function calling

// //
// function addnumber(a, b) {
//   console.log(a + b);
// }

// addnumber(10, 20);

// function add(a, b) {
//   return a + b;
// }

// let res = add(10, 20);
// console.log(res * 399);

// let functionName = function () {
//   console.log("hi"); // function expression
// };
// functionName();

// const arrow = (a) => a + 10;
// arrow(12);
// console.log(arrow(12));

// let result = (a) => a + 200;
// console.log(result(200));

// let arrowfun = (a, b) => a + b;
// console.log(arrowfun(10, 20));

// let arrowname = (a) => console.log(a);
// arrowname("manju");

// function greet(fun) {
//   console.log("hello");
//   // console.log(fun);
//   fun();
// }

// greet(function task() {
//   console.log("bay");
// });

// console.log("High order function");

// function greet(fun) {
//   console.log("hello");
//   // console.log(fun);
//   fun();
// }

// greet(task);

// function task() {
//   console.log("bay");
// }

// console.log("High order function");

// function greet() {
//   console.log("hello");
//   return function () {
//     console.log("bay");
//   };
// }

// // greet()();

// let result = greet();
// result();

// function orderFood(call_back, name, takeaway) {
//   console.log("////////////////////Welcome to star food////////////////////");
//   console.log("choose your order");
//   call_back(name);
//   takeaway();
// }

// function vegSpical(name) {
//   console.log("Your Panner friderice is ready !!!!!!!!!");
//   console.log(name + " Bill 125 Rs/-");
// }

// function nonvegSpical(name) {
//   console.log("Your chicken friderice is ready !!!!!!!!!");
//   console.log(name + " Bill 255 Rs/-");
// }

// function takeaway() {
//   console.log("plase collect the order on next gate");
// }

// orderFood(vegSpical, "Manju", takeaway);
// orderFood(nonvegSpical, "Varun", takeaway);

function add() {
  let num = 1;
  console.log(num);
}
// console.log(num);

add();

// {let num = 10};
// console.log(num);

function add() {
  let b = 20;
  function add_two() {
    let a = 10;
    return (a, b);
  }
  add_two();
}
console.log(add());
