import Dummy from "./Dummy";

function Propschildren({ children }) {
  return (
    <>
      <h1>{children}</h1>
      <Dummy></Dummy>
      <h1 style={{ backgroundColor: "chocolate" }}>
        Hello form iam prop children
      </h1>
    </>
  );
}

export default Propschildren;
