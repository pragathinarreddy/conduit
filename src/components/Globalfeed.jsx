import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import axios from 'axios'

function Globalfeed() {
    const [articles, setArticles] = useState("")
    const [loader, setLoader] = useState(false)

    useEffect(() => {

        setLoader(true)
        axios.get(" https://conduitapi.onrender.com/api/articles").then((response) => {
                if(response.status===200){
                    setLoader(false)
                    setArticles(response.data)
                }
            }).catch((err) => console.log(err))

    },[])

  return (
    <div>
    {
        loader ? <Loader/> : ""
    }
    {
        articles.articles?.map((each) => {
            return(
                <div>
                <div className='each_article_div flex justify '>
                    <div className='img_title_div flex align'>
                <div>
                    <img className='dp' src={each.article.author.image} alt="" />
                </div>
                <div className='title_div '>
                    <h3>{each.article.title}</h3>
                    <p>{each.article.updatedAt}</p>

                </div>

                    </div>
                    <div className='heart_div flex'>
                    <i class="fa-solid fa-heart"></i>
                    <p>{each.article.favoritesCount}</p>
                    </div>


                </div>
                    <div className='body_div'>
                        <h2>{each.article.description}</h2>
                        <h3>{each.article.body}</h3>
                    </div>

                    <div className='readmore flex align justify'>
                        <p>Read more...</p>
                        <div className=' flex'>
                        {
                            each.article.taglist.map((eachTag) => {
                                return(
                                    <div className='taglist'><h2>{eachTag}</h2></div>
                                )
                            })
                        }

                        </div>

                    </div>
                    <hr />


                </div>
                    
            )
        })
    }

</div>
  )
}

export default Globalfeed