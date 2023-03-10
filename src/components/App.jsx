import React from "react";
import "@styles/global.scss";
import { Header } from "./Header";
import { Form } from "@containers/Form";
import { Preview } from "./Preview";

const App = () => {
  return (
    <div>
      <Header />
      <section className="contain">
        <Form />
        <Preview />
      </section>
    </div>
  );
};

export { App };
