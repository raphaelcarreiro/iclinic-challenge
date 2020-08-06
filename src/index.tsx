import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./home/Home";
import GlobalStyles from "./styles/global";

const Root = () => (
  <App>
    <GlobalStyles />
    <Home />
  </App>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
