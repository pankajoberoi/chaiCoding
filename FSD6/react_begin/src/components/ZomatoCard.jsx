import React from "react";
import Navbar from "./Navbar";
import List from "./List";
import Footer from "./Footer";

function ZomatoCard(data) {
    return (
    <div className="wrapper">
   
     <Navbar Name={data.title}/>
     <List/>
     <Footer/>
    </div>
    )
  }

export default ZomatoCard