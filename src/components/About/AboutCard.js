import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";
import {USER} from "../../Constants";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}} data-aos='fade-right'>
                        Hi Everyone, I am <span className="purple">{USER.fullName}</span>
                        from <span className="purple"> UP, India.</span>
                        <br/>I am a Full Stack Web Developer.
                        <br/>
                        <br/>
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity" data-aos='flip-down'>
                            <ImPointRight/> Playing Games
                        </li>
                        <li className="about-activity" data-aos='flip-down'>
                            <ImPointRight/> Listen to Music
                        </li>
                        <li className="about-activity" data-aos='flip-down'>
                            <ImPointRight/> Travelling
                        </li>
                    </ul>

                    <p style={{marginBlockEnd: 0, color: "rgb(155 126 172)"}} data-aos='zoom-in-out'>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer" data-aos='zoom-in'>{USER.fullName}</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
