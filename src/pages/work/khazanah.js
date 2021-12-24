import React from "react"
import "../../css/worksiteStyle.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import khazanahlogo from "../../images/workPhotos/khazanahInnovation.jpg"
import Fade from "react-reveal/Fade"
import SEO from "../../components/seo"
import Layout from "../../components/layout"

export default function KhazanahTab() {
  return (
    <div>
      <Layout>
        <SEO title="Innovation at Khazanah" />
        <Container>
          <figure className="position-relative">
            <img src={khazanahlogo} alt="khazanahlogo" className="img-fluid" />
            <figcaption>
              <Fade bottom>
                <h1>Innovation - Khazanah</h1>
                <h2>01/2022 - 04/2022  </h2>
                <p>
                  -Created a VR game based on Atari’s Asteroids for Oculus Go platform, designed game logic, collision physics, and cloud leaderboard using C#, Unity, and Oculus developer toolkit, created asteroid models with blender 
                <br></br>
                <br></br>
                  - Developed novel computer vision-based control for drones using Python OpenCV library, capable of tracking and following an Aruco marker in different lighting conditions up to 10 meters away, and autonomous take-off and land.
                <br></br>
                <br></br>
                  - Design open-sourced smart germicidal device with UV-C bulbs to sterilize personal devices; won Editor’s Choice Award on Instructable
                </p>
              </Fade>
            </figcaption>
          </figure>
        </Container>
      </Layout>
    </div>
  )
}
