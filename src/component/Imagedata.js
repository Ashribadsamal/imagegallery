import React,{useState} from 'react'
import './Input.css'


function Imagedata({item}) {
    const handelDetail  = () =>{
        if(item.description == null){
            alert("Sorry There is no description available")
        }else{
            alert(item.description)
        }
        
    }
    return (
        <>
            <div className= "image_body">
            <img src={item.urls.small} onClick = {handelDetail } className="images"/> 
            </div>
        </>
    )
}

export default Imagedata
