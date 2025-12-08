import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const element = (
    <div>
        <App/>
    </div>
)



let rootEl = document.getElementById("root");

ReactDOM.render(element, rootEl);
