import React from "react";

const Inputfragment = ({ labelProp, inputProp }) => {
  return (
    <>
      <label>{labelProp.text}</label>
      <input
        type="text"
        id={inputProp.idName}
        name={inputProp.name}
        placeholder={inputProp.placeholder}
      />
    </>
  );
};

export { Inputfragment };
