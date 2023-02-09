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
var popo;


window.onload = function () {
  preview();
};

function preview() {
  pname.innerText = name.value || name.placeholder;
  pposition.innerText = position.value || position.placeholder;
  ptel.innerText = tel.value || tel.placeholder;
}

name.addEventListener("input", preview);
position.addEventListener("input", preview);
tel.addEventListener("input", preview);
generate.addEventListener("click", generatecode);
copy.addEventListener('click', norefresh);

function norefresh(event) {
  event.preventDefault();
}

function generatecode(event) {
  event.preventDefault();
  let inputname = name.value;
  let inputposition = position.value;
  let inputtel = tel.value;

  if (previewsvg.classList.contains('firma2')) {

    let code = [`<table style="max-height: 200px">
    <tbody>
      <tr>
        <td style="padding: 20px">
          <img
            src="https://i.postimg.cc/2yVQcQV5/Recurso-5logoblanco.png"
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
            style="margin-right: 30px"
          >
            <img
              src="https://i.postimg.cc/9MFMm8pL/logo-web.png"
              alt="icon-web"
              width="30"
              height="31"
              style="max-width: initial; width: 30px; height: 31px" /></a
          ><a href="https://www.linkedin.com/company/colvatel/" target="_blank"
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
    popo = code;

  } else {
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
            style="margin-right: 30px"
          >
            <img
              src="https://i.postimg.cc/9MFMm8pL/logo-web.png"
              alt="icon-web"
              width="30"
              height="31"
              style="max-width: initial; width: 30px; height: 31px" /></a
          ><a href="https://www.linkedin.com/company/colvatel/" target="_blank"
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
    popo = code
  }

  if (copy.classList.contains('disabled')) {
    copy.classList.remove('disabled')
  }
}

copy.onclick = async function () {
  try {
    var blobli = new Blob(popo, { type: 'text/html' });
    var obj = [new ClipboardItem({ ["text/html"]: blobli, })]
    await navigator.clipboard.write(obj);
    copymsg.style.display = 'flex';
    setTimeout(function () {
      copymsg.style.display = 'none';
    }, 1500)
  }
  catch (err) {
    console.log(err);
  }
};

sig2.onclick = function () {
  previewsvg.innerHTML = '';
  previewsvg.innerHTML = '<img class="img-change" src="../assets/Recurso 5logoblanco.png"></img>';
  if (previewsvg.classList.contains('firma1')) {
    previewsvg.classList.remove('firma1')
    previewsvg.classList.add('firma2')
  }
}

sig1.onclick = function () {
  previewsvg.innerHTML = '';
  previewsvg.innerHTML = `<div class="paralelogramo"></div>
  <img
    class="logo-colvatel"
    src="./assets/Recurso 3logo2023.svg"
    alt="logo signature"
  />`;
  if (previewsvg.classList.contains('firma2')) {
    previewsvg.classList.remove('firma2')
    previewsvg.classList.add('firma1')
  }

}

