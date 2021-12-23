import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
          
          </div>
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
