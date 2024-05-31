import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function About() {
    const {Fname='user'}=useParams();
    const navigate=useNavigate();
    

    function goToHome(){
      navigate('/');
    }
  return (
    <div>
      i am about heheheh
      <h2>hello {Fname}</h2>

      <button onClick={goToHome}>Go to Home</button>

    </div>
  )
}

export default About
