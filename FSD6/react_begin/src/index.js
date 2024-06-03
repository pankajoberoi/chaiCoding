import React from "react";
import ReactDOM from "react-dom";
// import {BrowserRouter} from 'react-router-dom'
import App from "./App";



function Element() {
  
  return (
  <div>
   {/* <BrowserRouter>
    <App/>
   </BrowserRouter> */}

    
    <App/>
   

  </div>
  )
}



let rootEl = document.getElementById("root");

ReactDOM.render(<Element/>, rootEl);
