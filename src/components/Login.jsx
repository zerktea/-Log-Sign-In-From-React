import React from "react"
import EyePass from "./Eyepass"
import '../index.css'
export default function Login(props){
    return(
        <div className="form--div">
            <div className="form--header">
            
            <h2>LogIn</h2>
            <p>Dont have an acount ? <a onClick={props.switchUp}>Join us</a></p>
            
            <h4>Please Enter your details to Login</h4>
            </div>
        <form action="" className="form" >
            {/* <label htmlFor="name"  >Name</label> */}
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button className="form--submit">LogIn</button>
        </form>
        </div>
    )
}