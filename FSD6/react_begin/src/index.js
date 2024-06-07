import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import { CounterProvider } from "./context/Counter";
import App from "./App";



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
