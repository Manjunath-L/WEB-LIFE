// function res_operation1(...data) {
//   console.log(data);
//   console.log(data.reduce((acc, val) => acc + val, 0));
// }
// res_operation1(10, 20, 30, 40, 50);

// function res_operation(name, ...data) {
//   console.log("Data:", data);
//   console.log("Name:", name);
// }

// res_operation("Manjunath", 10, 20, 30, 40, 50);

// function argument(){
//     console.log(arguments);
// }
// argument(1,2,3,5,5,6,7,8,9,90,0,12,1,2);

//$ spread operator
// function res_operation1(a, b, c, d, e) {
//   console.log(a + b + c + d + e);
// }
// let arr = [10, 20, 30, 40, 50];
// res_operation1(...arr);

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [10, 20, 30, 40, 50, 60, 70];

let res = [...arr1, ...arr2];

console.log(res);
 

let userData = {
    name: "Manjunath",
    age: 22,
    flage: true,
    location: "Birur",
}

console.log(userData);

let updatedData = {
    ...userData,
    location:"Bangalore",
    profession: "Web Developer"
}

console.log(updatedData);
