import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter}  from 'react-router-dom'



function Element() {
  
  return (
  <div>
    <BrowserRouter> 
    <App/>
    </BrowserRouter>
  </div>
  )
}



let rootEl = document.getElementById("root");

ReactDOM.render(<Element/>, rootEl);
