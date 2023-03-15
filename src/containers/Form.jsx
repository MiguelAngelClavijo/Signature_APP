import React, { useState, useEffect } from "react";
import { Inputfragment } from "@components/Inputfragment";
import "@styles/Form.css";
import { labelPropInfo } from "@data/data";

const Form = ({ CTM }) => {
  var Num = [];
  const [textPreview, setTextPreview] = useState(Num);

  function textChange(index, t) {
    const nextCount = textPreview.map((c, i) => {
      if (i == index) {
        c = t;
        return c;
      } else {
        return c;
      }
    });
    setTextPreview(nextCount);
    CTM(nextCount);
  }

  const inputGeneration = labelPropInfo.map((i, index) => {
    Num.push("");
    return (
      <Inputfragment
        indexProp={index}
        Preview={function (position, t) {
          textChange(position, t);
        }}
        key={i.id}
        labelProp={i}
      />
    );
  });

  return (
    <div className="form-contain">
      <form>{inputGeneration}</form>
    </div>
  );
};

export { Form };
