import React, { useState } from "react";
import { Preview } from "./Preview";
import { Form } from "@containers/Form";
import { labelPropInfo } from "@data/data";

const Utilities = () => {
  const initial = labelPropInfo.map((i) => {
    return i.placeholder;
  });
  const [textPreview, setTextPreview] = useState(initial);

  return (
    <section className="contain">
      <Form
        CTM={(t) => {
          setTextPreview(t);
        }}
      />
      <Preview textProp={textPreview} />
    </section>
  );
};

export { Utilities };
