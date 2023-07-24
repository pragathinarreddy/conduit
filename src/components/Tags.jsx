import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'

function Tags(props) {
    const [tags, setTags] = useState("")
    const [loader, setLoader] = useState(false)

    let {handleTags} = props

    useEffect(() => {
        setLoader(true)
        axios.get(" https://conduitapi.onrender.com/api/tags").then((response) => {
            if(response.status === 200)
            setLoader(false)
            setTags(response.data)
        })
        
    },[])
  
   


  return (
    <div>
        {
            loader ? <Loader/> : ""
        }
        <div className='popular_tags flex align  '>
        {
            tags.tags?.map((each) => {
                return(
                
                        <p onClick={() => handleTags(each)} className='each_tag'>{each}</p>

                
                )
            })
        }

        </div>

    </div>
  )
}

export default Tags