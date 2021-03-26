import React from 'react'
import './Home.css'

function Home() {
    return (
       <div>
         <header className="showcase">
           <div className="container showcase-inner">
             <h1>Welcome to My Gallery</h1>
              <p>This Gallery Where you can search any Image </p>
               <a href="/image" className="btn">Image</a>
           </div>
        </header>
       </div>
    )
}

export default Home
