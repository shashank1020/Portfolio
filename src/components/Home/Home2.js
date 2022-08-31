import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {HashLink as Link} from 'react-router-hash-link';
import Tilt from "react-parallax-tilt";
import Shashank from '../../Assets/images/shashank.jpg';
import {AiFillGithub, AiOutlineMail,} from "react-icons/ai";
import {FaLinkedinIn, FaWhatsapp} from "react-icons/fa";
import {USER} from "../../Constants";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description" data-aos='fade-right'>
                        <h1 style={{fontSize: "2.6em"}}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br/>
                            <br/>I am fluent in classic like
                            <i>
                                <b className="purple"> Javascript. </b>
                            </i>
                            <br/>
                            <br/>
                            My field of Interest's are building &nbsp;
                            <i>
                                <b className="purple"/>
                                <b className="purple">
                                    Websites.
                                </b>
                            </i>
                            <br/>
                            <br/>
                            Whenever possible, I also apply my passion for Learning new technologies
                            <i>
                                <b className="purple">
                                    &nbsp;
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple">&nbsp; three.js and Next.js. </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={3} className="myAvtar" data-aos='fade-left'>
                        <Tilt>
                            <img src={Shashank} className="img-fluid" alt="avatar" style={{borderRadius: '30%'}}/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social" data-aos='zoom-in'>
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links" data-aos='zoom-in-out'>
                            <li className="social-icons">
                                <a
                                    href={USER.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href={USER.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href={USER.phoneNo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaWhatsapp/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <Link
                                    smooth to="#contact"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineMail/>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
