import React from "react"
import "../../css/worksiteStyle.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import ecobeePic from "../../images/workPhotos/ecobeeProduct.jpg"
import Fade from "react-reveal/Fade"
import SEO from "../../components/seo"
import Layout from "../../components/layout"

export default function ecobeeTab() {
  return (
    <div>
      <Layout>
        <SEO title="Embedded Developer at Ecobee" />
        <Container>
          <figure className="position-relative">
            <img src={ecobeePic} alt="ecobeePic" className="img-fluid" />
            <figcaption>
              <Fade bottom>
                <h1>Embedded Developer - Ecobee</h1>
                <h2>05/2021 - 08/2021  </h2>
                <p>
                  - Built display testing pipeline using C++ OpenCV to detect discoloration, misalignment, dead pixels, and poor connections, capable of detecting alignment offsets of 0.5mm and dead pixels under 0.2mm
                  <br></br>
                  <br></br>
                  - Prototyped LCD tests using Convolutional Neural Network and TensorFlow with 98% accuracy, won Best Internal Impact Award
                  <br></br>
                  <br></br>
                  -	Gathered requirements, designed, and developed customer firmware flash and label printer software for the smart thermostats using C++/CLI and .NET framework, logging results using MongoDB, printing labels using ZPL
                  <br></br>
                  <br></br>
                  -	Drafted documentation and deployed customer firmware flash and label printer software at Wistron factory for Design Validation Test, projected to flash 80000+ units per month in full production
                </p>
              </Fade>
            </figcaption>
          </figure>
        </Container>
      </Layout>
    </div>
  )
}
