import React from 'react'
import {Link} from 'react-router-dom'

 function Navbar(props) {
    return (
     
        <header>
          <nav className="nav">
            <img src="logo192.png" width={50} height={50}></img>
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>support</li>
              <li><b>{props.Name}</b></li>
            </ul>
          </nav>
        </header>
      
    );
  }

 function Navbar1(){
    return (
      <div>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/product'><li>Product</li></Link>
        
        
        
      </div>
    )
   }

   export {Navbar,Navbar1}

  
   



   