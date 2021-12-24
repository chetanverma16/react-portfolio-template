import React from "react"
import "../../css/worksiteStyle.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import TAlogo from "../../images/workPhotos/uwaterlootaImg.jpg"
import Fade from "react-reveal/Fade"
import SEO from "../../components/seo"
import Layout from "../../components/layout"

export default function UwaterlooTATab() {
  return (
    <div>
      <Layout>
        <SEO title="TA University of Waterloo" />
        <Container>
          <figure className="position-relative">
            <img src={TAlogo} alt="TAlogo" className="img-fluid" />
            <figcaption>
              <Fade bottom>
                <h1>Teaching Assistant - University of Waterloo (ECE 150)</h1>
                <h2>09/2020 - 12/2020  </h2>
                <p>
                  - Designed questions on quizzes, midterm, and final and created automated testing using C++ and python to grade 300+ submissions per assessment and provide instantaneous feedback using Python expect library and regular expression based on the SOLID design principle
                <br></br>
                <br></br>
                  - Lead lab and help sessions for 300+ students assisted with teaching concepts in C++, such as dynamic memory allocation, Object-Oriented Programming, pointers, and linked lists, leads to a significant increase in student grades
                </p>
              </Fade>
            </figcaption>
          </figure>
        </Container>
      </Layout>
    </div>
  )
}
