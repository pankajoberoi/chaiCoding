import React from 'react'
import ReactDOM from 'react-dom'

let isLogin=true;
let captcha=false;

let element=(
    <div>
        <h1>hello {isLogin?"Pankaj":"Kon hai be tu"}</h1>
        {(isLogin && captcha)?<p>InstaGram Logged in</p>:<p>try again</p>}
    </div>
)




let rootEl=document.getElementById('root')

ReactDOM.render(element,rootEl)