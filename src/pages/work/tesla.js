import React from "react"
import "../../css/worksiteStyle.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import teslaPhoto from "../../images/workPhotos/TeslaWork.jpg"
import Fade from "react-reveal/Fade"
import SEO from "../../components/seo"
import Layout from "../../components/layout"

export default function TeslaTab() {
  return (
    <div>
      <Layout>
        <SEO title="Software Developer at Tesla" />
        <Container>
          <figure className="position-relative">
            <img src={teslaPhoto} alt="teslaPhoto" className="img-fluid" />
            <figcaption>
              <Fade bottom>
                <h1>Body Firmware Control Developer - Tesla</h1>
                <h2>05/2022 - 08/2022  </h2>
                <p>
                    I will be joining the body firmware controls team in Summer 2022,
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
