import React from 'react'
import ReactDOM from 'react-dom'


// let firstName=prompt("Enter Your name");
// let age=prompt("Enter Yoru age");

// const element=<h1>My name is {firstName} and my age is {age}</h1>

// const element=<>
//     <p>hello mitron !!!</p><p>Nice to meet you</p>
//     </>


const element=(
    <div>
        <p>Hello world</p>
        <p>Mai kyon ayya yahan</p>
    </div>
)



let rootEl=document.getElementById("root")

ReactDOM.render(element,rootEl)