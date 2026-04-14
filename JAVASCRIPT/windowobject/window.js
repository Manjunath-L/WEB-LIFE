// console.log(window);
// console.log(window.document)

// window.alert("Hello World");

// window.confirm("Are you sure?");

// window.prompt("What is your name?");

// var x = window.innerWidth;

// var y = window.innerHeight;

// console.log("Width: " + x + ", Height: " + y);

// window.open("https://www.example.com", "_blank");

// window.close();

// var myWindow = window.open("", "myWindow", "width=200,height=100");
// myWindow.document.write("<p>This is a new window!</p>")

// let data = document.getElementById("main");
// console.log(data);

// let data1 = document.getElementsByClassName("main");
// console.log(data1[1]);

// let data = document.getElementsByTagName("div");
// console.log(data);

// let data2 = document.getElementsByTagName("html");
// console.log(data2);

// let data1 = document.querySelector(".main");
// console.log(data1);

// let data = document.querySelector("#id");
// console.log(data);

// let data = document.querySelectorAll(".main");
// console.log(data);

// let data = document.getElementById("id");

// data.innerHTML = "<h1>Hello</h1>";

// console.log(data.innerHTML);

// data.innerText = "<h1>hello</h1>";

// console.log(data.innerText);

// let data = document.getElementsByClassName("main")[0];

// console.log(data.innerHTML);

// console.log(data.innertext);

// data.textContent = '<h1>data from js</h1>';

// let data = document.getElementsByTagName("div")[0];
// let val = data.getAttribute("id");
// console.log(val);

// data.setAttribute("id", "manju");

// let main = document.getElementsByClassName("main")[0];
// main.removeAttribute("id");
// main.removeAttribute("main");

// let div = document.getElementsByTagName("div")[0];
// let res = div.hasAttribute("id");
// console.log(res);
// if (res) {
//   div.removeAttribute("id");
// } else {
//   div.setAttribute("id", "main");
// }

// let main = document.querySelector("div");
// main.style.backgroundColor = "red";
// main.setAttribute("id", "chocolate");
// main.setAttribute("id", "red");

// document.body.style.backgroundColor = 'red'

let div = document.createElement("div");

div.style.backgroundColor = "red";
div.innerHTML = "<h1> Hello </h1>";
div.style.width = "200px";
div.style.height = "200px";
document.body.append(div);

// div.remove();
// div.removeChild();


//! Event handling
