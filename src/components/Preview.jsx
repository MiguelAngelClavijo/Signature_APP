import React from "react";
import logoParalelogramo from "@assets/Recurso 3logo2023.svg";

const Preview = () => {
  return (
    <div class="content-titlep">
      <div className="paralelogramo">
        <img
          class="logo-colvatel"
          src={logoParalelogramo}
          alt="logo signature"
        />
      </div>

      <div class="text-container">
        <p>
          <span id="previewName"></span>
        </p>
        <p>
          <span id="previewPosition"></span>
        </p>
        <p>PBX: ( 601 ) 438 7000</p>
        <p class="container-tel firma1">
          Celular: <span id="previewTel"></span>
        </p>
        <div id="icon-container">
          <a href="https://www.colvatel.com" target="_blank">
            <img class="icon-tel" src="./assets/Recurso 1web.svg" />
          </a>
          <a href="https://www.linkedin.com/company/colvatel/" target="_blank">
            <img class="icon-linkedin" src="./assets/Recurso 2linkedin.svg" />
          </a>
          <p class="Frase">Comprometidos brindando servicios de alta calidad</p>
        </div>
      </div>
    </div>
  );
};

export { Preview };
