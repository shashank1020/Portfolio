import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" data-aos='fade-left'/>
          </Col>
        </Row>
        <h1 className="project-heading" data-aos='fade-left' style={{marginTop: '4%'}}>
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <div style={{marginBottom : "3%"}} id='skill'>
          <Techstack />
        </div>
        
        <div
          data-aos="zoom-in"
        >
        <Github />
        </div>
      </Container>
    </Container>
  );
}

export default About;
