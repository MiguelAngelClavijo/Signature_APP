import React from "react";
import { Inputfragment } from "@components/Inputfragment";
import "@styles/Form.css";

const labelPropInfo = [
  {
    id: 1,
    text: "Nombre completo",
  },
  {
    id: 2,
    text: "Cargo",
  },
  {
    id: 3,
    text: "Número de celular",
  },
];

const inputPropInfo = [
  {
    idName: "GET-name",
    name: "name",
    placeholder: "Miguel Ángel Clavijo",
  },
  {
    idName: "GET-position",
    name: "position",
    placeholder: "Practicante Universitario",
  },
  {
    idName: "GET-tel",
    name: "tel",
    placeholder: "305 267 0670",
  },
];

const Form = () => {
  const inputGeneration = labelPropInfo.map((i, index) => {
    return (
      <Inputfragment
        key={i.id}
        labelProp={i}
        inputProp={inputPropInfo[index]}
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
