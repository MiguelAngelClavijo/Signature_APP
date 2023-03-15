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
          var value = e.target.value;
          if (Number.isInteger(Number(value))) {
            if (Number(value) == 0) {
              Preview(indexProp, value, labelProp.placeholder);
            } else {
              var firsttel =
                value.charAt(0) + value.charAt(1) + value.charAt(2);
              var secondtel =
                value.charAt(3) + value.charAt(4) + value.charAt(5);
              var thirdtel =
                value.charAt(6) +
                value.charAt(7) +
                value.charAt(8) +
                value.charAt(9);
              var telglobal = firsttel + " " + secondtel + " " + thirdtel;
              Preview(indexProp, telglobal, labelProp.placeholder);
            }
          } else {
            Preview(indexProp, value, labelProp.placeholder);
          }
        }}
      />
    </>
  );
};

export { Inputfragment };
