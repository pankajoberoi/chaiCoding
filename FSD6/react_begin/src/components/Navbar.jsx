import React from 'react'

 function Navbar() {
    return (
     
        <header>
          <nav className="nav">
            <img src="logo192.png" width={50} height={50}></img>
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>support</li>
              <li>{"Name"}</li>
            </ul>
          </nav>
        </header>
      
    );
  }

  export default Navbar