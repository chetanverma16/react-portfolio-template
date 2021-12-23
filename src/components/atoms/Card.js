import React from "react";

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  let link = window.location.origin + projectLink;
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>

        <button 
          onClick= {event =>  window.location.href=link } 
          type="button" className="btn"> Explore
        </button>
      </div>
    </div>
  )
}

export default Card
