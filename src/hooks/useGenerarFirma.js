import { firmaConNumero } from "./firmas/firmaConnumero";
import { firmaSinNumero } from "./firmas/firmaSinnumero";

const blobGeneration = async (data) => {
  try {

    // Intentamos realizar la acción de copiar al portapapeles
    // Creamos un nuevo objeto Blob con los datos y el tipo de MIME texto/html
    var blobli = new Blob(data, { type: 'text/html' });

    // Creamos un nuevo objeto ClipboardItem con los datos del Blob
    var obj = [new ClipboardItem({ ["text/html"]: blobli, })]

    // Escribimos el objeto ClipboardItem en el portapapeles
    await navigator.clipboard.write(obj);

    console.log('copiada')

  } catch (err) {
    // Si ocurre un error, lo mostramos en la consola
    console.log(err);
  }
};


function useGenerarFirma(button, inputname, inputposition, inputtel) {
  var code;
  // Verificar si la clase "firma2" se encuentra en la lista de clases de previewsvg
  if (button) {
    // Si la clase se encuentra, generar código HTML 
    code = firmaConNumero(inputname, inputposition, inputtel)
  } else {
    // Si la clase "firma2" no se encuentra en la lista de clases de previewsvg genera código HTML
    code = firmaSinNumero(inputname, inputposition)


  }
  blobGeneration(code)
}

export { useGenerarFirma }