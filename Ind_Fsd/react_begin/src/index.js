import React from "react";
import ReactDOM from "react-dom";

// let firstName = prompt("Enter Your name");
// let age = prompt("Enter Yoru age");

// const element = (
//   <h1>
//     My name is {firstName.toUpperCase()} and my age is {age}
//   </h1>
// );

// const element=<p>hello mitron !!!</p><p>Nice to meet you</p>

// const element=(
//     <div>
//         <p>Hello world</p>
//         <p>Mai kyon ayya yahan</p>
//     </div>
// )

//coditional rendering 
// let isLoggedIn=false;

// const element=(
//     <div>
//         <h1>Hello {isLoggedIn?"Dhoni":"Kon hai be tu"}</h1>
//     </div>
// )

const toggle="light";
const element=(
    <div>
        <h1 className={toggle}>Jai shree Ram</h1>
    </div>
)







let rootEl = document.getElementById("root");

ReactDOM.render(element, rootEl);
