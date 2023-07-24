import React from 'react'
import {NavLink , useHistory} from 'react-router-dom'

function Navlinks(props) {
    let token = JSON.parse(localStorage.getItem("token"))
    let {showTag} = props 
    const history = useHistory()
    const pathName = history.location.pathname
    console.log(pathName,"pathname")
  return (
    <nav className='hero_nav'>
        {
            token ?  <a   className={`yourfeed_text ${pathName=== "/yourfeed" && !showTag ?  "active_underline" : ""}`} href = "/yourfeed">Your feed</a> : ""

        }
                    <a  className={`yourfeed_text ${pathName=== "/" && !showTag ?  "active_underline" : ""}`} href = "/">Global feed</a>
                    {/* <a href="/" className="yourfeed_text">Global Feed</a> */}
                    {
                        showTag ? <a  className={`yourfeed_text ${showTag ? "active_underline" : ""}`} href = "#"># {showTag}</a> : ""
                    }
                    
                    

                </nav>
  )
}

export default Navlinks