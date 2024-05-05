import React from "react";
import ReactDOM from "react-dom";
import ZomatoCard from "./components/ZomatoCard";


function App() {
  return (
  <div>
    <ZomatoCard/>
    
  </div>
  )
}




let rootEl = document.getElementById("root");

ReactDOM.render(<App/>, rootEl);
