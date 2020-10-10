import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Main from "./Components/Main";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(<Main />, document.getElementById("root"));
serviceWorker.register();
