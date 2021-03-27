import React from 'react'
import './Header.css';

function Header() {
    return (
     <React.Fragment>
        <div className="menu-wrap">
           <input type="checkbox" className="toggler"/>
        <div className="hamburger">
          <div>

          </div>
      </div>
     <div className="menu">
     <div>
        <div>
            <ul>
                <li key="home"><a href="/">Home</a></li>
                <li key="about"><a href="/image">Image Gallery</a></li>
                
            </ul>
        </div>
      </div>
     </div>
    </div>
     </React.Fragment>
    )
}

export default Header
