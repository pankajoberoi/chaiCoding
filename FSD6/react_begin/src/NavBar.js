import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to='/'>   
      <li>  Home</li>
      </Link>
      <Link  to='/about'>    

      <li>  About</li>
      </Link>


      

    </div>
  )
}

export default NavBar
