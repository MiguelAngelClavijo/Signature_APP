import React, { useState } from "react";

const Inputfragment = ({ labelProp, Preview, indexProp }) => {
  return (
    <>
      <label>{labelProp.text}</label>
      <input
        type="text"
        id={labelProp.idName}
        name={labelProp.name}
        placeholder={labelProp.placeholder}
        onChange={function (e) {
          Preview(indexProp, e.target.value, labelProp.placeholder);
        }}
      />
    </>
  );
};

export { Inputfragment };
