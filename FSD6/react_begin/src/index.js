import React from "react";
import ReactDOM from "react-dom";
// import {BrowserRouter} from 'react-router-dom'
import App from "./App";

import { CounterProvider } from "./context/Counter";

function Element() {
  
  return (
  <div>
   {/* <BrowserRouter>
    <App/>
   </BrowserRouter> */}

   <CounterProvider>
    <App/>
   </CounterProvider>

  </div>
  )
}



let rootEl = document.getElementById("root");

ReactDOM.render(<Element/>, rootEl);
