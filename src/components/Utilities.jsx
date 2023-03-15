import React, { useEffect, useState } from "react";
import { Preview } from "./Preview";
import { Form } from "@containers/Form";
import { labelPropInfo } from "@data/data";
import '@styles/Utilities.css'
import { useGenerarFirma } from "../hooks/useGenerarFirma";



const Utilities = () => {

  const initial = labelPropInfo.map((i) => {
    return i.placeholder;
  });


  const [textPreview, setTextPreview] = useState(initial);
  const [seleccionarFirma, setSeleccionarFirma] = useState(true)


  return (
    <section className="Utilities">
      <div className="Utilities-PreviewformContain">
        <Form
          CTM={(t) => {
            setTextPreview(t);
          }}
        />
        <div>
          <Preview textProp={textPreview} />

          <div className="buttons-signature">
            <button className="btn-signature1" onClick={() => {
              setSeleccionarFirma(true)
            }}>Firma 1</button>
            <button className="btn-signature2" onClick={() => {
              setSeleccionarFirma(false)
            }}>Firma 2</button>
          </div>
        </div>
      </div>
      <div className="buttons-end">
        <button className="Primary-button" onClick={() => useGenerarFirma(seleccionarFirma, textPreview[0], textPreview[1], textPreview[2])}>Generar Firma</button>

      </div>
    </section>
  );
};

export { Utilities };
