import React, { useEffect, useState } from 'react'
import Hero from '../Hero'
import {NavLink } from 'react-router-dom'
import Navlinks from '../Navlinks'
import axios from 'axios'
import Loader from '../Loader'
import Tags from '../Tags'
import Globalfeed from '../Globalfeed'
import TagsArticle from '../TagsArticle'

function Home() {
    const [selectedTags, setSelectedTags] = useState("")
    const [showTag, setShowTag] = useState("")

   

    let token = JSON.parse(localStorage.getItem("token"))

    const handleTags = (each) => {
        setShowTag(each)

        axios.get(`https://conduitapi.onrender.com/api/articles?tag=${each}`).then((response) => {
            if(response.status === 200){
                setSelectedTags(response.data)

            }
            
        }).catch((err) => {
            console.log(err)
        })
    }

    console.log(showTag,"showtag")
    

  return (
    <div>
        {
            !token ? <Hero/> : ""
        }
       
        <div cla className='container flex around  home_div'>
            <div className='global_nav flex70'>
                <Navlinks showTag={showTag} />
                <hr />
                {
                    !showTag ?   <Globalfeed/> :    <TagsArticle selectedTags = {selectedTags} />
                }
              
              
            </div>
            <div className='tags_div flex30'>
                <Tags handleTags={handleTags}/>
            </div>

        </div>
    </div>
  )
}

export default Home