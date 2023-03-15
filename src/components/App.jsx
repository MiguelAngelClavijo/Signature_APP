import React from "react";
import "@styles/global.scss";
import { Header } from "./Header";
import { Utilities } from "./Utilities";

const App = () => {
  return (
    <div>
      <Header />
      <Utilities />
    </div>
  );
};

export { App };
