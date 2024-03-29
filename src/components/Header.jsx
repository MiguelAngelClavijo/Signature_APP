import React from "react";
import "@styles/Header.css";
import logo from "@assets/Recurso 3logo2023V2.svg";

// const logo = "@assets/Recurso 3logo2023V2.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="icon" />
      <h1>
        Complete los datos a continuación para previsualizar su firma digital.
        Para copiarla y usarla en su correo corporativo haga clic en el botón{" "}
        <span>"Copiar Firma"</span>. Luego puede insertarla en su correo. Si
        cuenta con número de celular corporativo seleccione{" "}
        <span>"Firma 1"</span> y si no seleccione <span>"Firma 2"</span>
      </h1>
    </div>
  );
};

export { Header };
