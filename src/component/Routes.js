import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import App from '../App'
import Header from './Header'
import Home from './Home'

function Routes() {
    return (
    
        <Router>
         <div>
         <Header/>
         
          <Switch>
          <Route  path = "/" exact component={Home}/>
          <Route path = "/image" component={App}/>
          
          </Switch>
         </div>
      </Router>
        
    )
}

export default Routes
