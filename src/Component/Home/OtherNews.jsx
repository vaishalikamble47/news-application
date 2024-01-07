import React from 'react'
import { Link } from "react-router-dom"
import "../../Component/style.css"

const showotherNews = ({ otherNews }) => {

  return (
    <>


      {otherNews ? otherNews.map((item) => (
        <Link to={`/articles/${item.id}`} key={item.id} className='item'>

          <div className='left' style={{background:`url(/images/articles/${item.img})`}}>
          </div>
          <div className="right">
            <h3>{item.title}</h3>
            <div className="category-tag">{item.category}</div>
            <div className="tags">
              <span>
                <i className="fa fa-eye"/>
                {item.views}
              </span>
              <span>
                <i className='fa fa-thums-up'/>
                {item.likes[0]}
              </span>
              <span>
                <i className='fa fa-thumbs-down'/>
                {item.likes[1]}
              </span>
            </div>
          </div>
        </Link>
      )) : null}

    </>
  )
};
const otherNews=(props)=>{
return (
  <div className="other-news">
    <h2>Other News</h2>
    <div className='other-news-items'>{showotherNews(props)}</div>
  </div>

)
}

export default otherNews;