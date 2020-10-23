import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Main from "./Components/Main";
// import Test from "./Test";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.compat.css";

import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
    <>
        <ReactNotification className="notif" />
        <Main />
    </>,
    document.getElementById("root")
);
serviceWorker.register();
