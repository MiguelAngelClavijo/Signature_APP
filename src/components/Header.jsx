import React from "react";
import "@styles/Header.css";
import logo from "@assets/Recurso 3logo2023V2.svg";

// const logo = "@assets/Recurso 3logo2023V2.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="icon" />
      <h1>
        Complete los datos a continuación y seleccione el estilo de la firma,
        para generarla presione <span>“Generar Firma”</span> y luego se
        habilitará el botón de <span>"Copiar Firma"</span>. para que pueda ser
        copiada y pegada en su correo. Si cuenta con número de celular
        corporativo seleccione <span>"Firma 1"</span> y si no cuenta con número
        de celular corporativo seleccione <span>"Firma 2"</span>
      </h1>
    </div>
  );
};

export { Header };
