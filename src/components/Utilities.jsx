import React, { useEffect, useState } from "react";
import { Preview } from "./Preview";
import { Form } from "@containers/Form";
import { labelPropInfo } from "@data/data";
import "@styles/Utilities.css";
import { useGenerarFirma } from "../hooks/useGenerarFirma";
import { motion } from "framer-motion";

const Utilities = () => {
  const initial = labelPropInfo.map((i) => {
    return i.placeholder;
  });

  const [textPreview, setTextPreview] = useState(initial);
  const [seleccionarFirma, setSeleccionarFirma] = useState(true);
  const [clicked, setClicked] = useState(false);

  return (
    <section className="Utilities">
      <div className="Utilities-PreviewformContain">
        <Form
          CTM={(t) => {
            setTextPreview(t);
          }}
        />
        <div>
          <Preview textProp={textPreview} seleccionarFirma={seleccionarFirma} />

          <div className="buttons-signature">
            <button
              className="btn-signature1"
              onClick={() => {
                setSeleccionarFirma(true);
              }}
            >
              Firma 1
            </button>
            <button
              className="btn-signature2"
              onClick={() => {
                setSeleccionarFirma(false);
              }}
            >
              Firma 2
            </button>
          </div>
        </div>
      </div>
      <div className="buttons-end">
        <button
          className="Primary-button"
          onClick={() => {
            useGenerarFirma(
              seleccionarFirma,
              textPreview[0],
              textPreview[1],
              textPreview[2]
            );
            setClicked(true);
            setTimeout(() => {
              setClicked(false);
            }, 1000);
          }}
        >
          Copiar Firma
        </button>
        <motion.div
          id="alert"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: clicked ? 1 : 0, scale: clicked ? 1 : 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.2,
          }}
        >
          ¡ Firma Copiada !
        </motion.div>
      </div>
    </section>
  );
};

export { Utilities };
