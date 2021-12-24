import React from "react"
import "../../css/worksiteStyle.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import nvidiaLogo from "../../images/workPhotos/IssacSim.jpg"
import Fade from "react-reveal/Fade"
import SEO from "../../components/seo"
import Layout from "../../components/layout"

export default function NvidiaTab() {
  return (
    <div>
      <Layout>
        <SEO title="Robotics Simulation Intern" />
        <Container>
          <figure className="position-relative">
            <img src={nvidiaLogo} alt="nvidialogo" className="img-fluid" />
            <figcaption>
              <Fade bottom>
                <h1>Robotics Simulation Intern - NVIDIA</h1>
                <h2>01/2022 - 04/2022  </h2>
                <p>
                    - I will be joining the Issac Simulation team in winter 2022,
                    stay tuned.
                </p>
              </Fade>
            </figcaption>
          </figure>
        </Container>
      </Layout>
    </div>
  )
}
