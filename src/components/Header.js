import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hey, I am {data.name}{" "}
              <span role="img" aria-label="Emoji">
                😀
              </span>
            </h2>
          </Fade>
          
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Aspired Robotics Engineer"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "Embedded Software Developer"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "Pilot"}
              </h1>
            </div>
          </Fade>


          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`https://www.linkedin.com/in/stevenfeng7/`}
              className="primary-btn"
            >
              CONNECT WITH ME!
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
