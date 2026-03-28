// for of used to iterate over the elements of an array or other iterable objects. It provides a simpler and more readable syntax compared to traditional for loops when working with arrays.
// syntax
// for (variable of iterable) {
//   // code to be executed
// }
// let array = ["Red", "Green", "Blue", "White"];
// for (let color of array) {
//   console.log(color);
// }
// console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

// for (let [index, color] of array.entries()) {
//   console.log(index,  color);
// }

// let info = {
//   name: "Manjunath L",
//   age: 22,
//   city: "Bangalore",
//   graduation: "BCA",
//   cgpa: 8.5,
// };

// for (let value of info) {
//     console.log(key, value);
// }

// for (let key of Object.keys(info)){
//     console.log(key);
// }

// for (let key of Object.values(info)){
//     console.log(key);
// }

let str = "Manjunth";

// for (let i of str){
//     console.log(i);
// }

// for in --> object keys
// console.log("////////index arr ///////////////");
// for(let i in array){
//     console.log("   "+i);
// }
// console.log("/////////index str ////////////////");
// for(let i in str){
//     console.log("   "+i);
// }
// console.log("///////objects keys/////////");
// for(let j in info){
//     console.log("   "+j);
// }

// let bool = false;
// for(let i in bool){
//     console.log(i);

// }
// for(let i of bool){
//     console.log(i);
// }

// for each return undefine
// let array1 = [10,20,30,40,50,60,70];
// array1.forEach((value,index,array)=>{
//     console.log(value,index,array);
// })

// let array1 = [10, 20, 30, 40, 50, 60, 70];
// let sum = 0
// array1.forEach((value,index,array)=>{
//     sum += value
// })

// console.log(sum);

// let array1 = [10, 20, 30, 23, 40, 50, 60, 70, 25, 67, 79];
// let count = 0;
// let arr = [];
// array1.forEach((value) => {
//   if (value % 2 == 0) {
//     count += 1;
//   }
// });
// arr.push(count);

// console.log(arr);

// // for each  10*element
// console.log(array1);

// let arr_product = [];
// array1.forEach((val) => {
//   arr_product.push(10 * val);
// });
// console.log(arr_product);

// let info = {
//   name: "Manjunath L",
//   age: 22,
//   city: "Bangalore",
//   graduation: "BCA",
//   cgpa: 8.5,
// };

// let array = ["Red", "Green", "Blue", "White"];

// for (let i of Object.values(info)) {
//   console.log(i);
// }

// let array1 = [10, 20, 30, 40, 50, 60, 70];
// let res = array1.forEach((value,index,array)=>{
//     return value*10;
// })

// console.log(res);