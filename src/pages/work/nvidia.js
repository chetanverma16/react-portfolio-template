import React from "react"
import '../../css/worksiteStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import nvidiaLogo from "../../images/workPhotos/IssacSim.jpg";
import Fade from "react-reveal/Fade"
import SEO from "../../components/seo"
import Layout from "../../components/layout";


export default function Home(){

    return <div> 
    <Layout>
    <SEO title="TA University of Waterloo" />
    <Container> 
    <figure className="position-relative">
    <img src={nvidiaLogo} alt="nvidialogo" className="img-fluid" />
    <figcaption>
        <Fade bottom>
                <h1>Robotics Simulation Intern - NVIDIA</h1>
                <h2>01/2022 - 04/2022</h2>
                <p>
                pt1
                <br></br>
                <br></br>
                pt2
                <br></br>
                <br></br>
                pt3
                </p>
            </Fade>
    </figcaption>
    </figure>

    </Container> 
    </Layout>

    </div>
}