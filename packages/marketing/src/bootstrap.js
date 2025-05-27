import React from "react";
import ReactDom from "react-dom";
import App from "./App";

//mount fun
const mount = (el) => {
  console.log("Mounting marketing app");
  ReactDom.render(<App />, el);
};

//if we run in development and in isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing_dev_root");
  if (devRoot) mount(devRoot);
}

//if we run through container
export { mount };
