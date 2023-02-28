import React from "react"
import '../index.css'
import { FaUserAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

// import { FaEye } from 'react-icons/fa';
export default function EyePass(props){
    return(
        <div className="eyes" >
           {props.value === "password" ? <FaEye onClick={props.handleClick}/> : <FaEyeSlash onClick={props.handleClick}/>}
        </div>
    )
 }