function firmaConNumero(inputname, inputposition, inputtel) {
  return (
    [`<table style="max-height: 180px">
      <tbody>
        <tr>
          <td style="padding: 0px; vertical-align: middle">
            <img
              src="https://i.postimg.cc/SQ3vB6nj/logo-blanco-small.png"
              alt="img"
              id="imageSelected0"
              width="150"
              style="max-width: initial; width: 150px"
            />
          </td>
          <td style="padding: 5px; vertical-align: middle">
            <p
              style="
                font-family: Tahoma;
                font-size: 16px;
                font-weight: 700;
                color: #1c396b;
                margin: 3px 0;
              "
            >
            ${inputname}
            </p>
            <p
              style="
              font-family: Tahoma;
                font-size: 12px;
                font-weight: 500;
                color: #365a8e;
                margin: 3px 0;
              "
            >
            ${inputposition}
            </p>
            
            <p
              style="
              font-family: Tahoma;
                font-size: 10px;
                font-weight: 500;
                color: #2e74b5;
                margin: 0 3px 0 0;
              "
            >
            <img
              src="https://i.postimg.cc/8zFj4Y1c/telephone.png"
              alt="img"
              id="imageSelected0"
              width="14"
              style="max-width: initial; width: 14px; vertical-align: middle"
            />
            (601) 4387000
            </p>
            <p
              style="
              font-family: Tahoma;
                font-size: 10px;
                font-weight: 500;
                color: #2e74b5;
                margin: 3px 0;
                vertical-align: middle;
              "
            >
            <img
              src="https://i.postimg.cc/mrzCcDcd/cellphone.png"
              alt="img"
              id="imageSelected0"
              width="14"
              style="max-width: initial; width: 14px; vertical-align: middle"
            />
            ${inputtel}
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
            width: 185px;
            font-family: Tahoma;
            font-size: 7px;
            font-weight: 500;
            color: #2e74b5;
            margin: 3px 0;
          ">Los correos recibidos no implican respuesta inmediata si son
          enviados fuera de la jornada laboral, en cumplimiento con la
          Ley 2191 de desconexión laboral</p>
          </td>
        </tr>
      </tbody>
    </table>
  `]
  )
}
export { firmaConNumero }