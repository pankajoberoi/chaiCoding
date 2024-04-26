import React from 'react'
import ReactDOM from 'react-dom'

let isLoggedIn=true;

let element=(
    <div>
        <h1>hello {isLoggedIn?"Pankaj":"Kon hai be tu?"}</h1>
    </div>
)





let rootEl=document.getElementById('root')

ReactDOM.render(element,rootEl)