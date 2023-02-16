// Declaracion de variables de elementos del DOM
const name = document.getElementById("GET-name");
const position = document.getElementById("GET-position");
const tel = document.getElementById("GET-tel");
const pname = document.getElementById("previewName");
const pposition = document.getElementById("previewPosition");
const ptel = document.getElementById("previewTel");
const generate = document.querySelector(".Primary-button");
const pcode = document.querySelector("#pcode");
const copy = document.querySelector(".Secondary-button");
const sig1 = document.querySelector(".btn-signature1");
const sig2 = document.querySelector(".btn-signature2");
const previewsvg = document.querySelector(".container-deg");
const copymsg = document.querySelector(".copy-msg");

// Variable global de para crear objeto ClipBoard
var data;

// Establecer la función `preview` para ejecutarse cuando se cargue la página
window.onload = function () {
  preview();
};

// La función `preview` actualiza la sección de vista previa de la página
// con los valores ingresados en los campos del formulario
function preview() {
  // Actualiza el texto del elemento `pname` con el valor del campo `name`,
  // o con su valor placeholder si el campo está vacío

  pname.innerText = name.value || name.placeholder;

  // Actualiza el texto del elemento `pposition` con el valor del campo `position`,
  // o con su valor placeholder si el campo está vacío
  pposition.innerText = position.value || position.placeholder;

  // Actualiza el texto del elemento `ptel` con el valor del campo `tel`,
  // o con su valor placeholder si el campo está vacío
  ptel.innerText = tel.value || tel.placeholder;
}

// Función para prevenir el refresco de la página

function norefresh(event) {

  // Prevenir el comportamiento por defecto del evento
  event.preventDefault();
}

function generatecode(event) {
  // Prevenir el comportamiento por defecto del evento
  event.preventDefault();

  // Obtener los valores de los elementos de entrada de nombre, posición y teléfono
  let inputname = name.value;
  let inputposition = position.value;
  let inputtel = tel.value;

  // Verificar si la clase "firma2" se encuentra en la lista de clases de previewsvg
  if (previewsvg.classList.contains('firma2')) {
    // Si la clase se encuentra, generar código HTML 
    let code = [`<table style="max-height: 200px">
    <tbody>
      <tr>
        <td style="padding: 20px">
          <img
            src="https://i.postimg.cc/T3PbKJ0g/Logo-blanco-1-232-x-195.png"
            alt="img"
            id="imageSelected0"
            width="222"
            height="200"
            style="max-width: initial; width: 222px; height: 200px"
          />
        </td>
        <td style="padding: 20px">
          <p
            style="
              font-size: 28px;
              font-weight: 500;
              color: #1c396b;
              margin: 10px 0;
            "
          >
          ${inputname}
          </p>
          <p
            style="
              font-size: 18px;
              font-weight: 500;
              color: #365a8e;
              margin: 10px 0;
            "
          >
          ${inputposition}
          </p>
          <p
            style="
              font-size: 14px;
              font-weight: 500;
              color: #2e74b5;
              margin: 10px 0;
            "
          >
            PBX: (601) 4387000
          </p>
          <p
            style="
              font-size: 14px;
              font-weight: 500;
              color: #2e74b5;
              margin: 10px 0;
            "
          >
            Celular: ${inputtel}
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
              width="30"
              height="31"
              style="max-width: initial; width: 30px; height: 31px" /></a
          >
          <a
            href="https://www.colvatel.com/"
            target="_blank"
            style="margin-right: 0px"
            border: 1pt;
          >
            <img
              src="https://i.postimg.cc/y8vC286p/Recurso-7loggoblancoconderechos.png"
              alt="icon-web"
              width="30"
              height="31"
              style="max-width: initial; width: 30px; height: 31px" /></a
          >
          <a 
            href="https://www.linkedin.com/company/colvatel/"
            target="_blank"
            style="margin-right: 0px"
            border: 1pt;
            ><img
              src="https://i.postimg.cc/0NZkBGsD/logo-linkedin.png"
              alt="icon-linkedin"
              width="30"
              height="31"
              style="max-width: initial; width: 30px; height: 31px"
            />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  `]

    // Guarda el HTML generado en la variable global data
    data = code;
  } else {
    // Si la clase "firma2" no se encuentra en la lista de clases de previewsvg genera código HTML
    let code = [`<table style="max-height: 200px">
    <tbody>
      <tr>
        <td style="padding: 20px">
          <img
            src="https://i.postimg.cc/wBqJNvvT/Recurso-1imgcolvatel.png"
            alt="img"
            id="imageSelected0"
            width="222"
            height="200"
            style="max-width: initial; width: 222px; height: 200px"
          />
        </td>
        <td style="padding: 20px">
          <p
            style="
              font-size: 28px;
              font-weight: 500;
              color: #1c396b;
              margin: 10px 0;
            "
          >
          ${inputname}
          </p>
          <p
            style="
              font-size: 18px;
              font-weight: 500;
              color: #365a8e;
              margin: 10px 0;
            "
          >
          ${inputposition}
          </p>
          <p
            style="
              font-size: 14px;
              font-weight: 500;
              color: #2e74b5;
              margin: 10px 0;
            "
          >
            PBX: (601) 4387000
          </p>
          <p
            style="
              font-size: 14px;
              font-weight: 500;
              color: #2e74b5;
              margin: 10px 0;
            "
          >
            Celular: ${inputtel}
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
              width="30"
              height="31"
              style="max-width: initial; width: 30px; height: 31px" /></a
          >
          <a
            href="https://www.colvatel.com/"
            target="_blank"
            style="margin-right: 0px"
            border: 1pt;
          >
            <img
              src="https://i.postimg.cc/y8vC286p/Recurso-7loggoblancoconderechos.png"
              alt="icon-web"
              width="30"
              height="31"
              style="max-width: initial; width: 30px; height: 31px" /></a
          >
          <a 
            href="https://www.linkedin.com/company/colvatel/"
            target="_blank"
            style="margin-right: 0px"
            border: 1pt;
            ><img
              src="https://i.postimg.cc/0NZkBGsD/logo-linkedin.png"
              alt="icon-linkedin"
              width="30"
              height="31"
              style="max-width: initial; width: 30px; height: 31px"
            />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
`]
    // Guarda el HTML generado en la variable global data
    data = code
  }
  // Verifica si la clase "disabled" se encuentra en la lista de clases del elemento copy
  if (copy.classList.contains('disabled')) {

    //Si se encuentra, remueve la clase "disabled" de la lista de clases de copy
    copy.classList.remove('disabled')
  }
}

// Declaramos una función asíncrona para copiar el contenido al portapapeles
copy.onclick = async () => {
  try {

    // Intentamos realizar la acción de copiar al portapapeles
    // Creamos un nuevo objeto Blob con los datos y el tipo de MIME texto/html
    var blobli = new Blob(data, { type: 'text/html' });

    // Creamos un nuevo objeto ClipboardItem con los datos del Blob
    var obj = [new ClipboardItem({ ["text/html"]: blobli, })]

    // Escribimos el objeto ClipboardItem en el portapapeles
    await navigator.clipboard.write(obj);

    // Mostramos un mensaje de éxito al copiar
    copymsg.style.display = 'flex';

    // Ocultamos el mensaje de éxito después de 1.5 segundos (Callback)
    setTimeout(() => {
      copymsg.style.display = 'none';
    }, 1500)


  } catch (err) {

    // Si ocurre un error, lo mostramos en la consola
    console.log(err);
  }
};

// Funcion que se ejecuta al darle clic al boton "firma 2"
sig2.onclick = function () {

  // Limpiar el contenido del elemento con id "previewsvg"
  //previewsvg.innerHTML = '';

  // Agregar una imagen con la clase "img-change" y la ruta de la imagen
  previewsvg.innerHTML = `<svg class="img-change" id="logo-colvatel-blanco2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 217.43 195.54">
  <defs>
    <style>
      .cls-1 {
        fill: url(#Degradado_sin_nombre_2-8);
      }

      .cls-2 {
        fill: url(#Degradado_sin_nombre_2-4);
      }

      .cls-3 {
        stroke: #1c396b;
        stroke-miterlimit: 10;
        stroke-width: 2px;
      }

      .cls-3, .cls-4 {
        fill: none;
      }

      .cls-5 {
        fill: url(#Degradado_sin_nombre_2-5);
      }

      .cls-6 {
        fill: url(#Degradado_sin_nombre_2-11);
      }

      .cls-7 {
        fill: url(#Degradado_sin_nombre_2-6);
      }

      .cls-8 {
        fill: url(#Degradado_sin_nombre_2-3);
      }

      .cls-9 {
        fill: url(#Degradado_sin_nombre_2-12);
      }

      .cls-10 {
        fill: #1c396b;
        font-family: MyriadPro-Regular, 'Myriad Pro';
        font-size: 2.13px;
      }

      .cls-11 {
        fill: url(#Degradado_sin_nombre_2);
      }

      .cls-12 {
        fill: url(#Degradado_sin_nombre_2-7);
      }

      .cls-4 {
        stroke: #1d3c68;
        stroke-miterlimit: 8;
        stroke-width: 3px;
      }

      .cls-13 {
        fill: url(#Degradado_sin_nombre_2-9);
      }

      .cls-14 {
        fill: url(#Degradado_sin_nombre_2-10);
      }

      .cls-15 {
        fill: url(#Degradado_sin_nombre_2-2);
      }
    </style>
    <linearGradient id="Degradado_sin_nombre_2" data-name="Degradado sin nombre 2" x1="155.46" y1="98.83" x2="176.58" y2="98.83" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1c396b"/>
      <stop offset=".1" stop-color="#193e72"/>
      <stop offset=".24" stop-color="#114d86"/>
      <stop offset=".41" stop-color="#0565a8"/>
      <stop offset=".47" stop-color="#006fb6"/>
      <stop offset=".52" stop-color="#0563a6"/>
      <stop offset=".62" stop-color="#0f518c"/>
      <stop offset=".73" stop-color="#164379"/>
      <stop offset=".84" stop-color="#1a3b6e"/>
      <stop offset=".95" stop-color="#1c396b"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_2-2" data-name="Degradado sin nombre 2" x1="60.27" y1="98.81" x2="81.3" y2="98.81" xlink:href="#Degradado_sin_nombre_2"/>
    <linearGradient id="Degradado_sin_nombre_2-3" data-name="Degradado sin nombre 2" x1="37.58" y1="98.74" x2="58.26" y2="98.74" xlink:href="#Degradado_sin_nombre_2"/>
    <linearGradient id="Degradado_sin_nombre_2-4" data-name="Degradado sin nombre 2" x1="115.93" y1="98.76" x2="136.14" y2="98.76" xlink:href="#Degradado_sin_nombre_2"/>
    <linearGradient id="Degradado_sin_nombre_2-5" data-name="Degradado sin nombre 2" x1="133.67" y1="98.85" x2="154.79" y2="98.85" xlink:href="#Degradado_sin_nombre_2"/>
    <linearGradient id="Degradado_sin_nombre_2-6" data-name="Degradado sin nombre 2" x1="99.42" y1="98.83" x2="121.15" y2="98.83" xlink:href="#Degradado_sin_nombre_2"/>
    <linearGradient id="Degradado_sin_nombre_2-7" data-name="Degradado sin nombre 2" x1="179.11" y1="98.86" x2="200" y2="98.86" xlink:href="#Degradado_sin_nombre_2"/>
    <linearGradient id="Degradado_sin_nombre_2-8" data-name="Degradado sin nombre 2" x1="82.88" y1="98.76" x2="103.76" y2="98.76" xlink:href="#Degradado_sin_nombre_2"/>
    <linearGradient id="Degradado_sin_nombre_2-9" data-name="Degradado sin nombre 2" x1="39.38" y1="99.3" x2="26.93" y2="101.96" xlink:href="#Degradado_sin_nombre_2"/>
    <linearGradient id="Degradado_sin_nombre_2-10" data-name="Degradado sin nombre 2" x1="2.8" y1="97.54" x2="29.73" y2="97.54" xlink:href="#Degradado_sin_nombre_2"/>
    <linearGradient id="Degradado_sin_nombre_2-11" data-name="Degradado sin nombre 2" x1="41.61" y1="94.7" x2=".67" y2="103.8" xlink:href="#Degradado_sin_nombre_2"/>
    <linearGradient id="Degradado_sin_nombre_2-12" data-name="Degradado sin nombre 2" x1="40.35" y1="89.05" x2="-.58" y2="98.15" xlink:href="#Degradado_sin_nombre_2"/>
  </defs>
  <g id="Capa_3" data-name="Capa 3">
    <line class="cls-4" x1="215.93" x2="215.93" y2="195.54"/>
    <g>
      <g>
        <g>
          <path class="cls-11" d="m176.55,108c-3.13,0-6.12.02-9.11,0-1.55-.01-3.12.04-4.65-.18-4.16-.61-6.63-3.04-7.19-7.18-.43-3.19.03-6.22,2.54-8.59,1.49-1.41,3.32-2.26,5.31-2.32,4.31-.13,8.63-.04,13.09-.04,0,1.06.04,2.08-.03,3.08-.02.22-.46.57-.71.57-3.68-.01-7.35-.08-11.03-.12-2.52-.02-4.7,1.52-5.38,3.86h13.92v3.58h-13.84c.59,2.14,2.49,3.57,4.71,3.58,3.72.02,7.43.03,11.15-.01.91-.01,1.33.21,1.23,1.19-.08.82-.02,1.65-.02,2.57Z"/>
          <path class="cls-15" d="m70.81,108.01c-2.5.12-4.91-.23-7.06-1.64-1.55-1.02-2.65-2.43-3.07-4.22-1.48-6.38.81-11.89,8.77-12.49,2.23-.17,4.47-.05,6.59.81,3.2,1.28,4.93,3.67,5.18,7.08.09,1.27.1,2.6-.14,3.84-.77,3.9-3.78,6.33-8.01,6.61-.75.05-1.51,0-2.27,0Zm-.11-3.48s.03.09.05.14c1.28-.29,2.61-.46,3.83-.9,2.17-.78,3.18-2.53,3.2-4.77.02-2.17-.87-3.9-2.92-4.86-1.91-.9-3.93-1.06-5.99-.74-3.08.47-4.83,2.31-4.93,5.15-.11,3.15,1.45,5.11,4.62,5.76.7.14,1.43.15,2.14.21Z"/>
          <path class="cls-8" d="m58.26,104.43v3.34c-.48.02-.92.06-1.35.06-3.52,0-7.05,0-10.58,0-5.04,0-8.41-3.18-8.72-8.24-.38-6.11,3.24-9.97,9.36-9.97,3.71,0,7.42,0,11.24,0v3.75c-.27,0-.56,0-.85,0-3.56,0-7.13-.06-10.69,0-4.14.08-6.4,3.02-5.5,7.02.53,2.35,2.62,3.98,5.27,4.01,3.49.03,6.97,0,10.46,0,.41,0,.82,0,1.36,0Z"/>
          <path class="cls-2" d="m126.72,93.78c-1.03,2.03-2,3.91-2.95,5.8-1.21,2.4-2.47,4.78-3.58,7.22-.47,1.04-1.07,1.43-2.17,1.29-.63-.08-1.28-.01-2.09-.01.23-.51.39-.89.57-1.24,2.59-5.14,5.18-10.28,7.77-15.42.53-1.06,1.19-2,2.51-2,1.34,0,2.1.89,2.65,2,2.02,4.03,4.06,8.05,6.04,12.09.36.73.59,1.56.66,2.37.11,1.34-.56,2.12-1.91,2.15-3.26.06-6.51.02-10,.02.53-1.11.98-2.13,1.52-3.09.11-.2.59-.27.9-.27,1.4-.03,2.81,0,4.21-.02.97-.02,1.32-.46.92-1.28-1.5-3.06-3.04-6.1-4.58-9.14-.06-.12-.2-.2-.47-.45Z"/>
          <path class="cls-5" d="m154.56,89.72c.06.13.09.16.09.19q.33,3.47-3.08,3.47h-5.68v14.61h-3.57v-14.69h-8.66v-3.58h20.89Z"/>
          <path class="cls-7" d="m121.15,89.64c-.22.49-.35.83-.51,1.15-2.5,5.02-5.01,10.03-7.52,15.05-.1.2-.19.41-.31.61-.55.92-1.25,1.62-2.42,1.61-1.17,0-1.9-.69-2.39-1.65-1.69-3.26-3.35-6.54-5.02-9.81-1.15-2.25-2.3-4.51-3.56-6.96,1.27,0,2.38-.06,3.49.04.29.02.64.46.8.78,2.01,4.04,3.98,8.09,5.97,12.13.16.33.34.65.63,1.21.35-.54.61-.87.8-1.24,2-3.96,4-7.91,5.95-11.89.38-.78.8-1.18,1.71-1.06.73.09,1.49.02,2.38.02Z"/>
          <path class="cls-12" d="m179.25,89.7h3.28c.02.44.06.87.06,1.31,0,3.49,0,6.97,0,10.46,0,1.94.97,2.93,2.93,2.94,4.43.02,8.87,0,13.3,0,.37,0,.74.03,1.17.05v3.53c-.45,0-.86,0-1.26,0-4.93,0-9.85.07-14.78-.05-1.18-.03-2.47-.48-3.46-1.12-.68-.43-1.3-1.52-1.32-2.33-.12-4.81-.06-9.62-.05-14.43,0-.1.07-.21.12-.37Z"/>
          <path class="cls-1" d="m83.01,89.67h3.38c0,1.03,0,2.04,0,3.04,0,3.1-.04,6.21.03,9.31.04,1.65.96,2.45,2.63,2.45,4.43.02,8.87,0,13.3,0,.44,0,.89,0,1.4,0v3.24c-.31.04-.6.11-.88.11-5.23,0-10.46,0-15.69,0-1.29,0-2.56-.2-3.38-1.29-.45-.6-.88-1.41-.89-2.13-.07-4.81-.03-9.62-.02-14.44,0-.07.05-.14.11-.31Z"/>
        </g>
        <g>
          <circle class="cls-3" cx="201.59" cy="88.37" r="1.25"/>
          <text class="cls-10" transform="translate(201.03 89.14)"><tspan x="0" y="0">R</tspan></text>
        </g>
      </g>
      <g>
        <path class="cls-13" d="m31.4,101.36s1.36-.65,3.16-2.32c0,0,1.42-1.16,1.81.52,0,0-.7,1.76-5.48,3.05l.5-1.25Z"/>
        <path class="cls-14" d="m18.87,109.93c-7.38,0-13.36-5.84-13.36-13.04s5.98-13.04,13.36-13.04c1.38,0,2.7.2,3.95.58.04.01.07-.05.02-.07-1.69-.66-3.53-1.03-5.46-1.03-8.06,0-14.59,6.36-14.59,14.2s6.53,14.2,14.59,14.2c5.17,0,9.71-2.62,12.3-6.57.13-.21-.16-.42-.31-.23-2.45,3.04-6.24,4.99-10.51,4.99Z"/>
        <path class="cls-6" d="m32.05,94.88l.15,2.16s2.94-1.51,3.71-3.58c.35-.95-.02-2-.9-2.49-1.06-.59-3.13-.92-7.16.2-6.4,1.78-8.62,2.8-9.23,3.12-.18.09-.36.19-.54.28-1.54.77-7.93,4.24-13.08,10.81-.4.51-.72,1.07-.91,1.69-.43,1.33-.39,3.15,3.88,1.67,0,0-5.43,1.12-2.46-2.99,2.55-3.53,6.91-6.5,8.09-7.27.18-.12.37-.24.55-.36,1.35-.9,8.03-5.09,16.66-5.9,0,0,6.26-.8,1.23,2.68Z"/>
        <path class="cls-9" d="m4.36,104.59s-1.03.9-2.58.65-1.7-.65-1.7-.65c0,0-.75-1.81,2.34-5.03,1.63-1.7,2.65-2.82,3.25-3.51.76-.86,1.57-1.68,2.44-2.43,2.37-2.04,6.97-5.59,12.12-7.36,7.49-2.58,9.29-2.58,9.29-2.58,0,0,4-.39,3.74,1.55-.15,1.11-.72,1.62-1.18,1.86-.27.14-.56.2-.86.2-1.43.01-9.18.22-16.29,3.49-5.48,2.52-7.96,4.72-8.96,5.83-.63.69-1.28,1.36-1.93,2.03-1.42,1.43-3.43,3.75-3.17,5.18.39,2.19,3.49.77,3.49.77Z"/>
      </g>
    </g>
  </g>
</svg>`;

  // Verificar si el elemento con id "previewsvg" tiene la clase "firma1"
  if (previewsvg.classList.contains('firma1')) {

    // Si tiene la clase "firma1", removerla
    previewsvg.classList.remove('firma1')

    // Agregar la clase "firma2"
    previewsvg.classList.add('firma2')
  }
}

// Funcion que se ejecuta al darle clic al boton "firma 1"
sig1.onclick = function () {

  // Limpiar el contenido del elemento con id "previewsvg"
  //previewsvg.innerHTML = '';

  //Crea el paralelogramo y agrega una imagen con la clase "logo-colvatel" y la ruta de la imagen
  previewsvg.innerHTML = `<div class="paralelogramo"></div>
  <img
    class="logo-colvatel"
    
    src="./assets/Recurso 3logo2023.svg"
    alt="logo signature"
  />`;

  // Verificar si el elemento con id "previewsvg" tiene la clase "firma2"
  if (previewsvg.classList.contains('firma2')) {

    // Si tiene la clase "firma2", removerla
    previewsvg.classList.remove('firma2')

    // Agregar la clase "firma1"
    previewsvg.classList.add('firma1')
  }
}

// Escuchar el evento de entrada para el elemento con el id "name" y ejecutar la función "preview"
name.addEventListener("input", preview);

// Escuchar el evento de entrada para el elemento con el id "position" y ejecutar la función "preview"
position.addEventListener("input", preview);

// Escuchar el evento de entrada para el elemento con el id "tel" y ejecutar la función "preview"
tel.addEventListener("input", preview);

// Escuchar el evento de clic para el elemento con el id "generate" y ejecutar la función "generatecode"
generate.addEventListener("click", generatecode);

// Escuchar el evento de clic para el elemento con el id "copy" y ejecutar la función "norefresh"
copy.addEventListener('click', norefresh);

// Bloquear tipo de texto que se escribe en el input
name.addEventListener("input", function () {
  const value = input.value;
  const onlyLetters = /^[a-zA-Z]+$/;

  if (!onlyLetters.test(value)) {
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
  }
});