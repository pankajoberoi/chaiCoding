import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
    const {Fname}=useParams();
    


  return (
    <div>
      i am about heheheh
      <h2>hello {Fname}</h2>
    </div>
  )
}

export default About
