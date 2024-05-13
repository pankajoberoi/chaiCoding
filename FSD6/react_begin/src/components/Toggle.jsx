import React, { useState } from 'react'


function Background(){
  return(
    <>
      <img src="logo192.png" alt="" />
    </>
  )
}

function Toggle() {

    let [IsToggled,setIsToggled]=useState(false)
    

  return (
    <div>
      <button onClick={()=>{setIsToggled(!IsToggled)}}>
        {IsToggled?'Hide':'Show'}</button>

      {IsToggled?<Background/>:""}

    </div>
  )
}

export default Toggle
