let userData = {
  user_name: "Manjunath L",
  user_age: 22,
  flag: undefined,
};

//& JSON Methods
//! 1. Stringify()
let data = JSON.stringify(userData);
console.log(data);
console.log(typeof data);

//! 2. Parse()
let data1 = JSON.parse(data);
console.log(data1);
console.log(typeof data1);

function greet() {
  flag = undefined;
}
greet();
let d = JSON.stringify(greet);
console.log(d);