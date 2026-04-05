// console.log(this);

// console.log(globalThis);

// function myFunction() {
//   console.log(this);
// }
// myFunction();

let userData = {
  name: "Manjunath",
  age: 22,
  fun: function () {
    // console.log(this);
    // const inner = () => {
    //   console.log(this);
    // };
    // inner();
    setTimeout(() => {
      console.log(this);
    }, 100000);
  },
  //   fun:() => {
  //     console.log(this);
  //   },
  flage: true,
};

// console.log(userData.fun());
userData.fun();

