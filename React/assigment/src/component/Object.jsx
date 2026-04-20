import React from "react";

const Object = ({ obj }) => {
  console.log(obj);

  return (
    <>
      <h1>
        {obj.name} {obj.age} {obj.number}
      </h1>
    </>
  );
};

export default Object;
