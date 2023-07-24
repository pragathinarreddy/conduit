import React, { useState } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import Signin from './Signin'
import axios from 'axios'



function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState("")
    const [loader, setLoader] = useState(false)


    const history = useHistory()

     const handleName = (e) => {
        setName(e.target.value)
     }
     const handleEmail = (e) => {
        setEmail(e.target.value)
     }
     const handlePassword = (e) => {
        setPassword(e.target.value)
        
     }
     const handleSignup = (e) => {
        setLoader(true)
        e.preventDefault()
        let payload = {            
            user:{
                username: name,
                email: email ,
                password: password
            }
        }
       axios.post("https://conduitapi.onrender.com/api/users" ,payload).then((response) =>{
       if(response.status === 200){
        setLoader(false)
           setUserData(response.data)
            history.push("/signin")

       }

       } ).catch((err) =>{
        setLoader(false)
        console.log(err)
       })

     }
     console.log(userData,"userdata")

     if(loader){
        return (
            <center><h2>Loading...</h2></center>

        )
     }
    
  return (
    <div className='signup'>
        <center>
            
        <h1> Sign Up</h1>.
        <NavLink  to = "/signin">Have an account?</NavLink>
        <form className='form_div'>
            <input onChange={(e) => handleName(e)} type="text" placeholder='Your Name' />
            <input onChange={(e) => handleEmail(e) } type="email" placeholder='Email' />
            <input onChange={(e) => handlePassword(e)} type="password" placeholder='password' />
            <button onClick={(e) => handleSignup(e)}>Sign up</button>
        </form>


        </center>


    </div>
  )
}

export default Signup