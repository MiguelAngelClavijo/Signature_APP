import React, { useEffect, useState } from "react";
import { labelPropInfo } from "@data/data";
import "@styles/Preview.css";
import logo from "@assets/logo_small.svg";
import web from "@assets/icon_web.svg";
import linkedin from "@assets/icon_linkedin.svg";
import phone from "@assets/icon_phone.svg";
import telephone from "@assets/icon_telephone.svg";

const nameTextParse = () => {
  let name = String(textProp[0]).toLowerCase();
  let names = name.split(" ");
  let upperChar = names.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  let fullname = "";
  for (var i = 0; i < upperChar.length; i++) {
    fullname = fullname + " " + upperChar[i];
  }
  return fullname;
};
var titleText = nameTextParse();

const RenderTel = function ({ seleccionarFirma, textProp }) {
  if (seleccionarFirma == true) {
    return (
      <p id="Tel">
        <img id="Phone" src={phone}></img>
        {textProp[2] || labelPropInfo[2].placeholder}
      </p>
    );
  } else {
    return <></>;
  }
};

const Preview = ({ textProp, seleccionarFirma }) => {
  var pTextProp = textProp;
  const pGeneration = pTextProp.map((i, index) => {
    return (
      <p key={labelPropInfo[index].id}>
        {i || labelPropInfo[index].placeholder}
      </p>
    );
  });

  return (
    <section className="preview">
      <div className="logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="text-container">
        <p id="Name">{titleText || labelPropInfo[0].placeholder}</p>
        <p id="Position">{textProp[1] || labelPropInfo[1].placeholder}</p>
        <RenderTel textProp={pTextProp} seleccionarFirma={seleccionarFirma} />
        <p id="PBX">
          <img id="Telephone" src={telephone}></img>
          (601) 438 7000
        </p>
        <div className="icon-container">
          <a href="https://www.colvatel.com" target="_blank">
            <img className="icon-tel" src={web} />
          </a>
          <a href="https://www.linkedin.com/company/colvatel/" target="_blank">
            <img className="icon-linkedin" src={linkedin} />
          </a>
        </div>
        <p id="Frase">
          Los correos recibidos no implican respuesta inmediata si son enviados
          fuera de la jornada laboral, en cumplimiento con la Ley 2191 de
          desconexión laboral
        </p>
      </div>
    </section>
  );
};

export { Preview };
