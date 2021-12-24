import React from "react"
import "../../css/worksiteStyle.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import fordLogo from "../../images/workPhotos/Ford.jpg"
import Fade from "react-reveal/Fade"
import SEO from "../../components/seo"
import Layout from "../../components/layout"

export default function FordTab() {
  return (
    <div>
      <Layout>
        <SEO title="Software Developer at Ford Motor Company" />
        <Container>
          <figure className="position-relative">
            <img src={fordLogo} alt="fordLogo" className="img-fluid" />
            <figcaption>
              <Fade bottom>
                <h1>Software Developer - Ford Motor Company of Canada</h1>
                <h2>05/2019 - 08/2019  </h2>
                <p>
                  -	Developed automation pipeline to flash and systematically test devices routinely on the Jenkins platform for over 100 daily tests 
                <br></br>
                <br></br>
                  -	Prototyped utility to flash multiple chips simultaneously on TestStand using C#, increasing efficiency by over 2 times
                </p>
              </Fade>
            </figcaption>
          </figure>
        </Container>
      </Layout>
    </div>
  )
}
