import React from 'react'

const FeaturedCard = ({featuredImg, tourDate, title, paragraph}) => {
  return (
    <>
     <article className="tour-card">
          <div className="tour-img-container">
            <img src={featuredImg} className="tour-img" alt="" />
            <p className="tour-date">{tourDate}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
             {paragraph} 
            </p>
          </div>
        </article>
    </>
  )
}

export default FeaturedCard