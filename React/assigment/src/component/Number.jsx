import React from "react";

const Number = ({ number }) => {
  console.log(number);

  return (
    <>
      <h1 style={{ backgroundColor: "green" }}>{number}</h1>
    </>
  );
};

export default Number;
