import React from "react"
import '../index.css'
import { FaUserAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import EyePass from "./Eyepass";
export default function Form(){
    const [isPass,setPass]=React.useState("password")
    function handleClick(){
       isPass==="password"?setPass("text"):setPass("password")
    }
    return(
        <div className="form--div">
            <div className="form--header">
            
            <h2>Sign in <FaUserAlt /></h2>
            <p>Or <a href="">login</a></p>
            
            <h4>Please Enter your details so sign in</h4>
            </div>
        <form action="" className="form">
            {/* <label htmlFor="name"  >Name</label> */}
            <input type="text" id="name" placeholder="Name"/>
            
            <input type="text" id="surname" placeholder="Surname"/>
            <input type="email" id="email" placeholder="Email"/>
            <div className="pass">
                <input type={isPass} id="password" placeholder="Password"/>
                <EyePass
                    value={isPass}
                    handleClick={handleClick}
                /> 
            </div>
            <input type="password" id="re-password" placeholder="Repeat password"/>
            <div className="checkbox">
                <input type="checkbox" name="newspaper" id="newspaper" />
                <label htmlFor="newspaper"> Sub to our Newsletter</label>
            </div>
            <button className="form--submit">Sign In</button>
        </form>
        </div>
    )
}