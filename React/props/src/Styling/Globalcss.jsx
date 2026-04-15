import React from "react";
import "../style.css";

const Globalcss = ({ children }) => {
  return (
    <div>
        <h1>{children
            }</h1>
      <h1 className="H1">Hello Globalcss</h1>
    </div>
  );
};

export default Globalcss;
