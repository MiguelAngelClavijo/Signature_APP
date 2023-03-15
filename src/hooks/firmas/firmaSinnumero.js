function firmaSinNumero(inputname, inputposition) {
  return (
    [`<table style="max-height: 180px">
      <tbody>
        <tr>
          <td style="padding: 0px; vertical-align: middle">
            <img
            src="https://i.postimg.cc/SQ3vB6nj/logo-blanco-small.png"
              alt="img"
              id="imageSelected0"
              width="170"
              style="max-width: initial; width: 170px"
            />
          </td>
          <td style="padding: 5px; vertical-align: middle;">
            <p
              style="
              width: 190px;
              font-family: Tahoma;
                font-size: 14px;
                font-weight: 700;
                color: #1c396b;
                margin: 3px 0;
                vertical-align: middle;
              "
            >
            ${inputname}
            </p>
            <p
              style="
              width: 190px;
              font-family: Tahoma;
                font-size: 12px;
                font-weight: 500;
                color: #365a8e;
                margin: 3px 0;
                vertical-align: middle;
              "
            >
            ${inputposition}
            </p>
            <p
              style="
              width: 190px;
              font-family: Tahoma;
                font-size: 10px;
                font-weight: 500;
                color: #2e74b5;
                margin: 4px 0;
                vertical-align: middle;
              "
            >
            <img
              src="https://i.postimg.cc/637rgtbK/Mesa-de-trabajo-10-copia-2.png"
              alt="img"
              id="imageSelected0"
              width="10"
              style="max-width: initial; width: 10px; vertical-align: middle"
            />
            (601) 438 7000
            </p>
            <a
              href="https://www.colvatel.com/"
              target="_blank"
              style="margin-right: 0px"
              border: 1pt;
            >
              <img
                src="https://i.postimg.cc/9MFMm8pL/logo-web.png"
                alt="icon-web"
                width="20"
                height="20"
                style="max-width: initial; width: 20px; height: 20px" /></a
            >
            <a
              href="https://www.msdevcol.com/"
              target="_blank"
              style="margin-right: 0px"
              border: 1pt;
              cursor:none;
            >
              <img
                src="https://i.postimg.cc/y8vC286p/Recurso-7loggoblancoconderechos.png"
                alt="icon-web"
                width="3"
                height="3"
                style="max-width: initial; width: 3px; height: 3px" /></a
            >
            <a 
              href="https://www.linkedin.com/company/colvatel/"
              target="_blank"
              style="margin-right: 0px"
              border: 1pt;
              ><img
                src="https://i.postimg.cc/0NZkBGsD/logo-linkedin.png"
                alt="icon-linkedin"
                width="20"
                height="20"
                style="max-width: initial; width: 20px; height: 20px"
              />
            </a>
            <p style="
            width: 190px;
            font-family: Tahoma;
            font-size: 7px;
            font-weight: 500;
            color: #2e74b5;
            margin: 0;
          ">Los correos recibidos no implican respuesta</p>

          <p style="
          width: 190px;
            font-family: Tahoma;
            font-size: 7px;
            font-weight: 500;
            color: #2e74b5;
            margin: 0;
          ">inmediata si son enviados fuera de la jornada</p>

          <p style="
          width: 190px;
            font-family: Tahoma;
            font-size: 7px;
            font-weight: 500;
            color: #2e74b5;
            margin: 0;
          ">laboral (Ley 2191 de desconexión laboral)</p>
          </td>
        </tr>
      </tbody>
    </table>
    `]
  )
}

export { firmaSinNumero }