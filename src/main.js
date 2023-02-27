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
const previewsvg = document.querySelector(".container-tel");
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
            font-family: Tahoma;
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
            font-family: Tahoma;
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
            font-family: Tahoma;
              font-size: 14px;
              font-weight: 500;
              color: #2e74b5;
              margin: 10px 0;
            "
          >
            PBX: (601) 4387000
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
          <p style="
          font-family: Tahoma;
          font-size: 14px;
          font-weight: 500;
          color: #2e74b5;
          margin: 10px 0;
        ">Comprometidos brindando servicios de alta calidad</p>
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
            font-family: Tahoma;
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
            font-family: Tahoma;
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
            font-family: Tahoma;
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
            font-family: Tahoma;
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
          <p style="
          font-family: Tahoma;
          font-size: 12px;
          font-weight: 500;
          color: #2e74b5;
          margin: 10px 0;
        ">Comprometidos brindando servicios de alta calidad</p>
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