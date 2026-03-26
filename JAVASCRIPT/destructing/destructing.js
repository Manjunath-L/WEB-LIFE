// object destructuring is a powerful feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way.
let userData = {
  user_name: "Likhi",
  user_age: 24,
  flag: false,
};

let { user_name: u_n, user_age: u_a, flag: f } = userData;

console.log(u_n); //& Likhi
console.log(u_a); //& 24
console.log(f); //& false

// Array destructuring is a similar concept that allows you to extract values from arrays and assign them to variables in a more concise way.
let array = ["Red", "Green", "Blue", "White"];
// console.log(array[2]); //Blue

let [r, g, b, w] = array;
console.log(r); //Red
console.log(w); //White
