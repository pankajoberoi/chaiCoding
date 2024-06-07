// import React from 'react'
// import { Navigate, useNavigate, useParams } from 'react-router-dom'

// function About() {
//     const {Fname='user'}=useParams();
//     const navigate=useNavigate();
    

//     function goToHome(){
//       navigate('/');
//     }
//   return (
//     <div>
//       i am about heheheh
//       <h2>hello {Fname}</h2>

//       <button onClick={goToHome}>Go to Home</button>

//     </div>
//   )
// }

// export default About



import React from 'react'
import {useParams} from 'react-router-dom'

const About = () => {
  const {Fname='user',designation='Director'}=useParams();
  

  return (
    <div>
      i am about page
      <p>My name is <b>{Fname}</b></p>
      <p>I am working as a <b>{designation}</b></p>
    </div>
  )
}

export default About







