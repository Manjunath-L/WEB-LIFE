import Array from "./component/Array.jsx";
import Bool from "./component/Bool.jsx";
import Button from "./component/Button.jsx";
import Children from "./component/Children.jsx";
import Deafult from "./component/Deafult.jsx";
import Function from "./component/Function.jsx";
import Number from "./component/Number.jsx";
import Object from "./component/Object.jsx";
import String from "./component/Strint.jsx";

let obj = {
  name: "Manju",
  age: 21,
  number: 1234456689,
};

function greet() {
  return <h1>I am function</h1>;
}
function App() {
  return (
    <>
      <h1>Assigment</h1>
      <String string="Hello, String!" />
      <Number number={25} />
      <Bool bool={true} />
      <Array array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <Object obj={obj} />
      <Function functio={greet} />
      <Children>
        <h1>Hello children</h1>
      </Children>
      <Deafult></Deafult>
      <Button>
        <button type="button">Click me</button>
      </Button>
    </>
  );
}

export default App;
