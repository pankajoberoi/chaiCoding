import React from "react";
import ReactDOM from "react-dom";
import App from "./App";




function Element() {
  
  return (
  <div>
   
    <App/>
   
  </div>
  )
}



let rootEl = document.getElementById("root");

ReactDOM.render(<Element/>, rootEl);
