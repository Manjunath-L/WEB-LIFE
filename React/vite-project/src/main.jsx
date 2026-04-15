// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// // )
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
// import { Hello } from "./Hello.jsx";
import Hello from "./Hello.jsx";

// let header = React.createElement("h1", {}, "Hello Word");
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

// let heading = <h1>Hello World</h1>;
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// let p = (
//   <p>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dicta
//     animi enim saepe doloribus porro expedita blanditiis architecto cum, quis
//     unde placeat distinctio ullam officia magni iusto hic, aut fugit.
//   </p>
// );
// root.render(p);

// function greet() {
//   console.log("Veerander sing");
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  // <div style={{backgroundColor:'red'}} className="">
  //   <p>
  //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam
  //     tempore excepturi maiores sequi repudiandae voluptatum enim libero, alias
  //     debitis architecto, dolor provident temporibus commodi quia minus quidem
  //     praesentium minima?
  //   </p>
  //   <h1>Hello World</h1>
  //   <h1>{prompt("enter a numer")}</h1>
  // </div>

  <>
    {/* <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam
      tempore excepturi maiores sequi repudiandae voluptatum enim libero, alias
      debitis architecto, dolor provident temporibus commodi quia minus quidem
      praesentium minima?
      </p>
      <h1>Hello World</h1>
      {/* <h1>{prompt("enter a numer")}</h1> */}
    {/* {App()} */}
    {/* <Hello props="Manju" /> */}
    {/* <Hello name="Veerander sing patil" age="21" gender="male" /> */}
    {/* <Hello props={{ name: "veerander", age: 21, gender: "male" }} /> */}
    {/* <Hello props={["red", "blue", "black", "yellow"]} /> */}
    {/* <Hello props={greet} /> */}
    <Hello user={"Manju"} />
  </>,
);

//! create a calcuter using component base approch
