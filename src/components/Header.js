import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Typewriter } from "react-simple-typewriter"
import imgUrl from "../images/headerphoto.png"
const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper"
              style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
      >
          <Fade bottom>
            <h2>
              Hi, My name is {data.name}{" "}

            </h2>
          </Fade>

          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1              >
                I am a {" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1200}
                    words={["Robotics Engineer", "Pilot", "Code Monkey", "Embedded Developer", "accordionist", "Simulation Developer", "Path Planner", "clarinetist", "Firmware Developer"]}

                  />
                </span>
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
