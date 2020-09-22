import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
