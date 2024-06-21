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

// const toggle="light";
// const element=(
//     <div>
//         <h1 className={toggle}>Jai shree Ram</h1>
//     </div>
// )

// let name=prompt("Enter Your name");


// const logIn=true

// if(logIn){
//     alert("Welcome to our company!!!!!")
// }
// else{
//     alert("please Login first")
// }

// const element=(
//     <div>
//         <h1> hello {logIn?name:"User"}</h1>
//         {(logIn)?<p>Entered as {prompt("please Enter Your Designation as well")}</p>:""}
//     </div>
// )


//event handling?

// function handleClick(){
//     alert("Button clicked")
// }

// const element=(
//     <div>
//         <button onClick={handleClick}>click me</button>
//     </div>
// )


//Handling list

// let list=(
//     <div>
//         {[<p key={1}>Item 1</p>,<p key={2}>Item 2</p>,<p key={3}>Item 3</p>,<p key={4}>Item 4</p>]}
//     </div>
// )

let names=['virat','dhoni','bumrah']

let list=(
    <div>
        {names.map((n)=>{
           return  <li key={n}>{n}</li>
        })}
    </div>
)




let rootEl = document.getElementById("root");

ReactDOM.render(list, rootEl);
