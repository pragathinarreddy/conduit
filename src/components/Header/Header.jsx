import React, { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function Header() {
    let history = useHistory()

    let token = JSON.parse(localStorage.getItem("token"))
    let username = JSON.parse(localStorage.getItem("username"))

    const handleLogout = () => {
        localStorage.clear()
        window.location.href="/signin"
    }
    useEffect(() => {

    },[token])
  return (
    <div className='container flex align justify'>
        <div className='blog'>
            <h2>BLOG</h2>
        </div>
        
        <div className='nav'>
            {
                !token ?
                <div>
                <NavLink exact activeClassName ="active" className="nav_page" to="/" >Home</NavLink>
                <NavLink exact activeClassName ="active" className="nav_page" to = "/signin">Sign in</NavLink>
                <NavLink exact activeClassName ="active" className="nav_page" to = "/signup">Sign up</NavLink>

                </div>
                :
                <div className='nav flex align justify'>
                 <NavLink exact activeClassName ="active" className="nav_page" to="/" >Home</NavLink>
                <NavLink exact activeClassName ="active" className="nav_page" to = "/newarticle">New Article</NavLink>
                <NavLink exact activeClassName ="active" className="nav_page" to = "/settings">Settings</NavLink>
                <NavLink exact activeClassName ="active" className="nav_page" to="/profile" >{username}</NavLink>
                <h2 onClick={handleLogout} className='nav_page'>Logout</h2>


                </div>
            }
        </div>

    </div>
  )
}

export default Header