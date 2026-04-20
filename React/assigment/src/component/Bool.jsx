import React from "react";

const Bool = ({ bool }) => {
  return <>{bool ? <h1>True</h1> : <h1>False</h1>}</>;
};

export default Bool;
