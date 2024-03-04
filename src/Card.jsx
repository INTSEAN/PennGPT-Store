import React from "react";
const Card = ({ title, body, imageUrl, linkToProject }) => {
  return (
    <div className="Card">
            <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-body">{body}</p>
        <a href={linkToProject} className="btn-view-menu" role="button">Learn Now</a>
      </div>
     </div>
    )
}

export default Card;