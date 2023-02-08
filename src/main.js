const name = document.getElementById("GET-name");
const position = document.getElementById("GET-position");
const tel = document.getElementById("GET-tel");
const pname = document.getElementById("previewName");
const pposition = document.getElementById("previewPosition");
const ptel = document.getElementById("previewTel");
const generate = document.querySelector(".Primary-button");
const pcode = document.querySelector("#pcode");
const copy = document.querySelector(".btn-copy");
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

function generatecode(event) {
  event.preventDefault();
  let inputname = name.value;
  let inputposition = position.value;
  let inputtel = tel.value;
  var code = [`<table>
  <tr>
    <td>
      <img
        src="https://i.postimg.cc/wBqJNvvT/Recurso-1imgcolvatel.png"
        alt="img"
      />
    </td>
    <td>
      <p
        style="
          font-size: 28px;
          font-weight: 500;
          color: #1c396b;
          box-sizing: border-box;
        "
        ;
      >
        ${inputname}
      </p>
      <p
        style="
          font-size: 18px;
          font-weight: 500;
          color: #365a8e;
          box-sizing: border-box;
        "
      >
        ${inputposition}
      </p>
      <p style="font-size: 14px; font-weight: 500; color: #2e74b5">
        PBX:(601) 4387000
      </p>
      <p style="font-size: 14px; font-weight: 500; color: #2e74b5">
        Celular: ${inputtel}
      </p>
      <a href="https://www.colvatel.com" target="_blank">
        <img src="https://i.postimg.cc/9MFMm8pL/logo-web.png" alt="icon-web" />
      </a>
      <a href="https://www.colvatel.com" target="_blank">
        <img
          src="https://i.postimg.cc/0NZkBGsD/logo-linkedin.png"
          alt="icon-linkedin"
        />
      </a>
    </td>
  </tr>
</table>
`];
  pcode.innerText = code;
  popo = code;
}

copy.onclick = async function(){   
    try{
        var blobli = new Blob( popo, {type:'text/html'});
        var obj = [new ClipboardItem({["text/html"]: blobli,})]
        await navigator.clipboard.write(obj);
    }
    catch(err){
        console.log(err);
    }
};

