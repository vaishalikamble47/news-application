import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearArticledata, getarticledata, handelLikesarticles } from "../../Store/action"


const SingleArticle = () => {

    let dispatch = useDispatch();

    const state = useSelector((state) => ({ ...state }))
console.log(state);
    const { id } = useParams()
    console.log("id",id)

    useEffect(() => {
       if (id) {
        dispatch(getarticledata(id));
       }
        return () => {
            dispatch(clearArticledata())
        };

    },[id])

    const addLike = (action) => {
        debugger
        const data = state.articles.articleData[0]
        const likes = data.likes[0];
        const dislike = data.likes[1];

        const newLikes =
            action === "ADD" ? [likes + 1, dislike] : [likes, dislike + 1];
        dispatch(handelLikesarticles(newLikes, id))
    };


    const renderOtherNews = (articaledata ) => {
        return (
            <>
                {articaledata ? (
                    <div>
                    <div className='tags'>
                        <span className='fa fa-eye'>
                            {articaledata[0]?.views}
                        </span>
                        <span className='fa fa-thumbs-up'>
                            {articaledata[0]?.likes[0]}
                        </span>
                        <span className='fa fa-thumbs-down'>
                            {articaledata[0]?.likes[0]}
                        </span>
                    </div>

                    <div className="top">
                        <h2>{articaledata[0]?.title}</h2>
                        <span>
                            Article By:<strong>{articaledata[0]?.auther}</strong>
                        </span>
                    </div>
                    <img
                     src={`/images/articles/${articaledata[0]?.img}`} 
                     alt={articaledata[0]?.title} />
                     <div className="body-news">{articaledata[0]?.body}</div>
 
                    </div>

                   
                ) : null
                }
                
            </>
        )
 
    }
    return (
        <div className="news-container">
            {renderOtherNews(state?.articles?.articleData
)}

        </div>
    )

}
    export default SingleArticle;