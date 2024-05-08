import React from 'react'

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

  export default Navbar