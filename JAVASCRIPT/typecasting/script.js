//* Implicit Typecasting

// let a = "10"
// let b = 1
// console.log(typeof(a+b)); //& string
// console.log(typeof(a-b)); //& number

// console.log(1 + true); //& true is treated as 1, so the result is 2
// console.log(1 + false); //& false is treated as 0, so the result is 1

// console.log(true + '10'); //& true10

// console.log(null + 1); //& null is treated as 0, so the result is 1
// console.log(undefined + 1); //& undefined is treated as NaN, so the result is NaN

//* Explicit Typecasting
//& Number() --> Converts a value to a number
let a = Number("10");
let b = Number("10px");
console.log(b); //& This will return NaN because "10px" cannot be converted to a number.

//& parseInt() --> Parses a string and returns an integer
let c = parseInt("100px");
console.log(c);

//& unary plus operator (+) --> Converts a value to a number
let d = +"20";
console.log(d); //& This will return 20 as a number

//& String() --> Converts a value to a string
let e = 10;
console.log(String(e)); //& This will return "10" as a string
console.log(typeof String(e)); //& This will return "string"

let res = e.toString();
console.log(res);
console.log(typeof res);

//& Boolean() --> Converts a value to a boolean
let g = Boolean("Hello");
console.log(g); //& This will return true because a non-empty string is considered truthy in JavaScript.

let f = Boolean("");
console.log(f); //& This will return false because an empty string is considered falsy in JavaScript.
