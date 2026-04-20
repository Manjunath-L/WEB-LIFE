import React from "react";

const Array = ({ array }) => {
  return (
    <>
      {array.map((item) => {
        return item % 2 === 0 ? (
          <h1 style={{ backgroundColor: "yellow" }}>{"even"}</h1>
        ) : (
          <h1 style={{ backgroundColor: "yellowgreen" }}>{"odd"}</h1>
        );
      })}
    </>
  );
};

export default Array;
