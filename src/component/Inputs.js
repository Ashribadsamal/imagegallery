import React from 'react'
import './Input.css'

function Inputs({search,getSearch,updateSearch}) {
    return (
      <div>

     
        <form className = "search_form"  onSubmit = {getSearch}>
           <input type = "text" className  = "search-bar" value = {search} onChange = {updateSearch} placeholder= "Put your choice"/>
           <button className = "search_button" type = "submit">Search</button>
        </form>
      </div>
    )
}

export default Inputs
