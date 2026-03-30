// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let res = arr.map((c_value, c_index, c_array) => {
// //   console.log(c_value, c_index, c_value);
// // });

// // arr.map((c_value, c_index, c_array) => {
// //   console.log(c_value, c_index, c_array);
// // });

// // arr.forEach((c_value, c_index, c_array) => {
// //   console.log(`${c_value} index ${c_index} in array ${c_array}`);
// // });
// // console.log(res);

// // let res = arr.map((c_value, c_index, c_array) => {
// //   if (c_value % 5 == 0) {
// //     return c_value;
// //   }
// // });

// // arr.map((c_value, c_index, c_array) => {
// //   if (c_value % 2 != 0) {
// //     console.log(c_value);
// //   }
// // });
// // console.log(res);

// // let data = arr.filter((val) => val > 3);
// // console.log(data);

// // let data1 = arr.filter((val) => val % 2 != 0);
// // console.log(data1);

// let resarr = [];
// let res = arr.map((val) => {
//   if (val % 2 != 0) {
//     // console.log(val * 2);
//     resarr.push(val * 2);
//   }
// });
// // console.log(resarr);

// // let data = arr.filter((val) => {
// //   if (val % 2 != 0) {
// //     return val * 2;
// //   }
// // });

// let data = arr.filter((val) => val % 2 !== 0).map((val) => val * 2);
// // console.log(data);

// let userData = [
//   { name: "Manjunath", age: 22, flage: true },
//   { name: "Toney", age: 25, flage: true },
//   { name: "Bruce", age: 60, flage: false },
//   { name: "Gita", age: 30, flage: true },
//   { name: "Ramesh", age: 58, flage: false },
// ];

// // userData.map((value) => console.log(value));

// // console.log("----using map----");

// // let age = userData.map((val) => {
// //   if (val.age > 50) {
// //     console.log(val.name);
// //   }
// // });
// // console.log("----using filter----");

// // let age_data = userData.filter((val) => {
// //   if (val.age > 50) {
// //     console.log(val.name);
// //   }
// // });

// userData.filter((val) => val.age > 50).map((val) => console.log(val.name));

// let sum = 0;
// arr.map((val) => {
//   return (sum = sum + val);
// });
// // console.log(sum);

// let data = arr.reduce((acc, c_v, c_i, c_a) => {
//   // console.log(c_i, c_a);
//   return acc + c_v;
// }, 100);
// // console.log(data);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = arr.reduce((acc, c_v, c_i, c_a) => c_v > acc ? c_v : acc, 0);
console.log(max);
