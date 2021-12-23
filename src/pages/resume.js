import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "../css/resume.scss"
import { Container } from "react-bootstrap"


export default function Resume() {
  return (
    <div>
      <Layout>
        <SEO title="Resume" />
        <Container>
        <h1>Resume</h1>
        <iframe src="https://drive.google.com/file/d/1j0EH9eTQvSfKvXiGWYdnqBM3PW2hqIhB/preview" width="850" height="1100" allow="autoplay" className="Resume">Resume</iframe>
        </Container>
      </Layout>
    </div>
  )
}


