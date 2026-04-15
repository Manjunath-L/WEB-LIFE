// export function Hello() {
//   return <h1>Hello form Hello.jsx</h1>;
// }

function Hello({ user = "Guest" }) {
  return (
    <>
      {/* {props()} */}
      <h1>{user}</h1>
      {/* {props.map((val) => <h1>{val}</h1> )} */}
      {/* {greet} */}
      {/* <h1 style={{ backgroundColor: "yellow" }}>
        Hello form Hello.jsx {name.name} {name.age} {name.gender}
      </h1> */}
    </>
  );
}
export default Hello;
