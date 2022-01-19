import React from "react";
import { render } from "react-dom";
import App from "./App";

import "bulma/css/bulma.min.css";
import "./css/index.css";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
