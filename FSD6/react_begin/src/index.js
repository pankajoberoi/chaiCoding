import React from 'react'
import ReactDOM from 'react-dom'


function Card(){
 return (
    <div>
        <h1>Title</h1>
        <p>Description</p>
    </div>
 )  
}


let element=(
    <div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
)


let rootEl=document.getElementById('root')

ReactDOM.render(element,rootEl)