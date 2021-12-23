import React from "react"

const Navbar = () => {
  let resumelink = window.location.origin + "/resume/";
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
        <button 
          onClick= {event =>  window.location.href=resumelink } 
          type="button" className="btn"> Resume
        </button>
          <div className="links-wrapper">
            <button onClick= {event =>  window.location.href='/#home'} type="button">Home</button>
            <button onClick= {event =>  window.location.href='/#work'} type="button">Work</button>
            <button onClick= {event =>  window.location.href='/#about'} type="button">About</button>
            <button onClick= {event =>  window.location.href='/#contact'} type="button">Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
