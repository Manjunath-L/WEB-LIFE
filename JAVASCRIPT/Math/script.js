// // 1. Math.pi: This property represents the ratio of the circumference of a circle to its diameter, which is approximately 3.14159. It is a constant value that is used in various mathematical calculations involving circles and trigonometry.

// let piValue = Math.PI;
// console.log(piValue); // Output: 3.141592653589793

// // 2. math.round(): This method rounds a number to the nearest integer. If the fractional part of the number is 0.5 or greater, it rounds up; otherwise, it rounds down.

// let num1 = 4.7;
// let num2 = 4.3;
// let roundedNum1 = Math.round(num1);
// let roundedNum2 = Math.round(num2);
// console.log(roundedNum1); // Output: 5
// console.log(roundedNum2); // Output: 4

// // 3. Math.ceil(): This method rounds a number up to the nearest integer. It always rounds up, regardless of the fractional part of the number.
// let num3 = 4.1;
// let ceilNum3 = Math.ceil(num3);
// console.log(ceilNum3); // Output: 5

// // 4. Math.floor(): This method rounds a number down to the nearest integer. It always rounds down, regardless of the fractional part of the number.
// let num4 = 4.9;
// let floorNum4 = Math.floor(num4);
// console.log(floorNum4); // Output: 4

// let num5 = 4.5;
// let roundown = Math.floor(num5);
// console.log(roundown); // Output: 4

// // Math.trunc(): This method truncates a number by removing its fractional part and returning the integer part. It does not perform any rounding; it simply discards the decimal portion of the number.
// let num6 = 4.9;
// let truncatedNum6 = Math.trunc(num6);
// console.log(truncatedNum6); // Output: 4

// // 5. Math.pow(): This method takes two arguments, a base and an exponent, and returns the result of raising the base to the power of the exponent.
// let base = 2;
// let exponent = 3;
// let powerResult = Math.pow(base, exponent);
// console.log(powerResult); // Output: 8 (2 raised to the power of 3 is 8)

// // 6. Math.sqrt(): This method takes a single argument and returns the square root of that number.
// let num7 = 16;
// let sqrtNum7 = Math.sqrt(num7);
// console.log(sqrtNum7); // Output: 4 (the square root of 16 is 4)

// // 7. Math.cbrt(): This method takes a single argument and returns the cube root of that number.
// let num8 = 27;
// let cbrtNum8 = Math.cbrt(num8);
// console.log(cbrtNum8); // Output: 3 (the cube root of 27 is 3)

// // 8. Math.min(): This method takes any number of arguments and returns the smallest value among them.
// let minValue = Math.min(5, 10, 3, 8);
// console.log(minValue); // Output: 3 (the smallest value among the arguments is 3)

// // 9. Math.max(): This method takes any number of arguments and returns the largest value among them.
// let maxValue = Math.max(5, 10, 3, 8);//
// console.log(maxValue); // Output: 10 (the largest value among the arguments is 10)

// // 10. Math.abs(): This method takes a single argument and returns the absolute value of that number, which is the non-negative value of the number without regard to its sign.
// let num9 = -5;
// let absNum9 = Math.abs(num9);
// console.log(absNum9); // Output: 5 (the absolute value of -5 is 5)

// let randomNum = Math.random() * 10  + 1; // 1 to 10 random number
// console.log(randomNum); // Output: A random number between 1 (inclusive) and 11 (exclusive)

// let randomNum1 = Math.random() * 100  + 100; // 100 to 200 random number
// console.log(randomNum1); // Output: A random number between 100 (inclusive) and 200 (exclusive)

// findout the area of circle

// let rad = 5;
// let area = Math.PI * Math.pow(rad, 2);
// console.log(area); // Output: 78.53981633974483 (the area of a circle with radius 5 is approximately 78.54)

// create one dice game

// let diceRoll = Math.floor(Math.random() * 6) + 1;//
// console.log(diceRoll); // Output: A random number between 1 (inclusive) and 7 (exclusive)

// create a four digit otp generator diff numbers

let otp = Math.floor(Math.random() * 900000) + 100000;
console.log(otp); // Output: A random four-digit number between 1000 (inclusive) and 10000 (exclusive)

// trancte the value without using math.trunc() method

let num10 = 4.9;
let truncatedNum10 = num10 - (num10 % 1);
console.log(truncatedNum10); // Output: 4 (the truncated value of 4.9 is 4)

// get the random given range 5 to 25
let min = 5;
let max = 25;
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange); // Output: A random number between 5 (inclusive) and 25 (inclusive)
