import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import List from "./List";
import Footer from "./Footer";



function Zomato() {
  return <div>

    <Navbar />
    <List />
    <Footer />

  </div>;
}


let rootEl = document.getElementById("root");

ReactDOM.render(<Zomato/>, rootEl);
