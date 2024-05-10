import React, { useState } from 'react'

function Toggle() {

    let [IsToggled,setIsToggled]=useState(false)
    

  return (
    <div>
      <button onClick={()=>{setIsToggled(!IsToggled)}}>
        {IsToggled?'Hide':'Show'}</button>
    </div>
  )
}

export default Toggle
