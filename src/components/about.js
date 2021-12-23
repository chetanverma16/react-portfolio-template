import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import selfImage from "./../images/SelfPhoto.jpg"
import "bootstrap/dist/css/bootstrap.min.css"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <Fade bottom cascade>
          <h1>About Me</h1>
        </Fade>
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <p>
                {data.aboutParaOne}
                <br></br>
                <br></br>
                {data.aboutParaTwo}
                <br></br>
                <br></br>
                {data.aboutParaThree}
              </p>
            </Fade>
          </div>
          <img src={selfImage} alt="about" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default About
