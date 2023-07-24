import React, { useState } from 'react'
import {NavLink , useHistory} from 'react-router-dom'
import Home from './Home'
import axios from 'axios'



function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [signin, setSignin] = useState("")
    const [loader, setLoader] = useState(false)

    let history = useHistory()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSignin = (e) => {
        setLoader(true)
        e.preventDefault()

        let payload = {
            user:{
              email: email,
              password: password
            }
          }
            
        
        axios.post(" https://conduitapi.onrender.com/api/users/login", payload).then((response) => {
            if(response.status === 200){
                setLoader(false)
                setSignin(response.data)
                console.log(response.data, "responsedaya")
                localStorage.setItem("token" , JSON.stringify(response.data.user.token))
                localStorage.setItem("username" , JSON.stringify(response.data.user.username))
                window.location.href="/"
            }
        }).catch((err) => {
            setLoader(false)
            console.log(err)
        })

        
            
    }
    if(loader){
        return(
            <center><h2>Loading...</h2></center>
        )
    }

  return (
    <div className='signup'>
         <center>
        <h1> Sign In</h1>
        <NavLink to = "/signup">Need an account?</NavLink>
       
        <form className='form_div'>
            <input onChange={(e) => handleEmail(e)} type="email" placeholder='Email' />
            <input onChange={(e) => handlePassword(e)} type="password" placeholder='password' />
            <button onClick={(e) => handleSignin(e)}>Sign in</button>
        </form>


        </center>
    </div>
  )
}

export default Signin