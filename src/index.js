import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import "normalize.css";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      rootEl
    );
  });
}
