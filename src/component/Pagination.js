import React from 'react'
import './Input.css'

function pagination({totalPage,handleClick}) {
    const pages = [...Array(totalPage).keys()].map(num=>num + 1);
    //console.log(pages);
    return (
        <div>
           {pages.map(num =>(
               <button className ="page_num" key = {num}
               onClick={()=>handleClick(num)}>{num}</button>
           ))}
        </div>
    )
}

export default pagination
