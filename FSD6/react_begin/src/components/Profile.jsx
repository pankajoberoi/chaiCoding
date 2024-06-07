// import React from 'react'
// import { useLocation, useNavigate, useParams } from 'react-router-dom'

// function Profile() {
//     const {designation='user'}=useParams();
//     const location=useLocation();
//     const MoveInPages=useNavigate();

//     function goToHome(){
//         MoveInPages('/')
//     }
    
//   return (
//     <div>
//       <p>Hello user your designation is : <b>{designation}</b></p>
//       {location.pathname==='/profile/teacher'?<button>Attendance</button> : null}
//       <button onClick={goToHome}>Go to Home</button>
//     </div>
//   )
// }

// export default Profile



import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Profile() {
  const {designation}=useParams();
  const location=useLocation();
  const MoveToPages=useNavigate();

  function handleClick(){
    MoveToPages('/')
  }

  return (
    <div>
        <h1>Welcome {designation}</h1>
        {location.pathname==='/profile/trainer'?<button>Attandance</button> : null }
        <button onClick={handleClick}>Go to Home</button>
    </div>
  )
}

export default Profile







