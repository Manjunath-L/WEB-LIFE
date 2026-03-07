function greet1() {
  //? function def
  console.log("Welcom to js"); //! function body
}

greet1(); //? function calling

function greet(name) {
  //? function def
  console.log("Welcom to js " + name); //! function body
}

greet(); //? function calling
greet("manju"); //? function calling

function addnumber(a, b) {
  console.log(a + b);
}

addnumber(10, 20);

function add(a, b) {
  return a + b;
}

let res = add(10, 20);
console.log(res * 399);



let functionName = function () {
  console.log("hi"); // function expression
};
functionName();

const arrow = (a) => a + 10;
arrow(12);
console.log(arrow(12));

let result = (a) => a + 200;
console.log(result(200));

let arrowfun = (a, b) => a + b;
console.log(arrowfun(10, 20));

let arrowname = (a) => console.log(a);
arrowname("manju");
