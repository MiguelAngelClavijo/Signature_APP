import React, { useEffect } from "react";
import { labelPropInfo } from "@data/data";
import "@styles/Preview.css";

const Preview = ({ textProp }) => {
  var pTextProp = textProp;
  const pGeneration = pTextProp.map((i, index) => {
    return (
      <p key={labelPropInfo[index].id}>
        {i || labelPropInfo[index].placeholder}
      </p>
    );
  });

  return (
    <section className="content-titlep">
      {pGeneration}
      <p>PBX: (601) 438 7000</p>
      <a href="https://www.colvatel.com" target="_blank">
        <img class="icon-tel" src="./assets/Recurso 1web.svg" />
      </a>
      <a href="https://www.linkedin.com/company/colvatel/" target="_blank">
        <img class="icon-linkedin" src="./assets/Recurso 2linkedin.svg" />
      </a>
      <p>Comprometidos brindando servicios de alta calidad</p>
    </section>
  );
};

export { Preview };
