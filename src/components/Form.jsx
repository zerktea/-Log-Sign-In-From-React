import React from "react"
import '../index.css'
import { FaUserAlt } from 'react-icons/fa';
import EyePass from "./Eyepass";
export default function Form(){
    const [isPass,setPass]=React.useState("password")
    const [form,setForm] =
    React.useState({
      name:"",
      surname:"",
      email:"",
      gender:"",
      password:"",
      confirmpassword:"",
      newletter: false
    })
   
    function handleForm(event){
       event.target.type==="checkbox"? setForm({
        ...form,
        newletter: !form.newletter
    }):
       setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        
    }
    function handleClick(){
       isPass==="password"?setPass("text"):setPass("password")
    }

    function handleSubmit(event){
        event.preventDefault();
        if(form.password === form.confirmpassword){
            if(form.gender === ''){
                alert("ARE YOU A TREE, Please identify your gender")
                return
            }
            alert("Wlecom to the jungle " + form.name)
            return
        }
        alert("Passwords doesnt match")
    }

    return(
        <div className="form--div">
            <div className="form--header">
            
            <h2>Sign in <FaUserAlt /></h2>
            <p>Or <a href="">login</a></p>
            
            <h4>Please Enter your details so sign in</h4>
            </div>
        <form action="" className="form" onSubmit={handleSubmit}>
            {/* <label htmlFor="name"  >Name</label> */}
            <input 
                type="text"
                name="name" 
                placeholder="Name" 
                value={form.name} 
                onChange={handleForm}
            />
            
            <input 
                type="text" 
                name="surname"
                placeholder="Surname"
                value={form.surname} 
                onChange={handleForm}
            />

            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email"
                value={form.email} 
                onChange={handleForm}
            />

            <div className="pass">
                <input 
                    type={isPass} 
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    value={form.password} 
                    onChange={handleForm}
                />
                <EyePass
                    value={isPass}
                    handleClick={handleClick}
                /> 
            </div>

            <input 
                type="password"
                name="confirmpassword" 
                placeholder="Repeat password" 
                value={form.confirmpassword} 
                onChange={handleForm}
            />
            <select name="gender" value={form.gender} onChange={handleForm}>
                <option value="">Grapefruit</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <div className="checkbox">
                <input 
                    type="checkbox" 
                    name="newletter"
                    onChange={handleForm} 
                    checked={form.newletter} 
                />
                
                <label htmlFor="newspaper"> Sub to our Newsletter</label>
            </div>

            <button className="form--submit">Sign In</button>
        </form>
        </div>
    )
}