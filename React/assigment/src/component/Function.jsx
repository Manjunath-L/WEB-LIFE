import React from "react";

const Function = ({ functio }) => {
  console.log(functio);

  return <>{functio()}</>;
};

export default Function;
