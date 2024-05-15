import React, { useState } from 'react'

function Input() {

    let [text,setText]=useState("")    
    let [age,setAge]=useState(0)

    function handleText(event){
        setText(text=event.target.value)
    } 
   
  return (
    <div>

      <input type='text' name="name"  placeholder='ENter Your name' onChange={handleText}/><br></br>
      <input type='text'  name="age" placeholder='ENter Your Age' onChange={(event)=>{setAge(age=event.target.value)}}/>
      <p>You name is  : {text} <br />Your age is : {age}</p>
    </div>
  )
}

export default Input
