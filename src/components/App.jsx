import React from "react";
import "@styles/global.scss";
import { Header } from "./Header";
import { Utilities } from "./Utilities";
import { Footer } from "../containers/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Utilities />
      <Footer/>
    </div>
  );
};

export { App };
