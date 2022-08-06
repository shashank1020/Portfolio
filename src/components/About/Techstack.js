import React from "react";
import '../../Assets/css/Techstack.css'
import {FaNodeJs, FaReact} from "react-icons/fa";
import {SiChakraui, SiExpress, SiHtml5, SiJavascript, SiMaterialui, SiRedis, SiRedux} from "react-icons/si";
import {DiCss3, DiMongodb} from "react-icons/di";
import {VscGithub} from "react-icons/vsc";

function Techstack() {
    return (
        <>
            <div className="techstack">
                <div data-aos='flip-down'>
                    <SiJavascript/>
                    <h5 style={{marginTop: 10}}>Javascript</h5>
                </div>
                <div data-aos='flip-down'>
                    <SiHtml5/>
                    <h5 style={{marginTop: 10}}>HTML</h5>
                </div>
                <div data-aos='flip-down'>
                    <DiCss3/>
                    <h5 style={{marginTop: 10}}>CSS</h5>
                </div>
                <div data-aos='flip-down'>
                    <FaReact/>
                    <h5 style={{marginTop: 10}}>React</h5>
                </div>
                <div data-aos='flip-down'>
                    <FaNodeJs/>
                    <h5 style={{marginTop: 10}}>Nodejs</h5>
                </div>
                <div data-aos='flip-down'>
                    <DiMongodb/>
                    <h5 style={{marginTop: 10}}>MongoDb</h5>
                </div>
                <div data-aos='flip-down'>
                    <SiRedux/>
                    <h5 style={{marginTop: 10}}>Redux</h5>
                </div>
                <div data-aos='flip-down'>
                    <SiExpress/>
                    <h5 style={{marginTop: 10}}>Express</h5>
                </div>
                <div data-aos='flip-down'>
                    <SiRedis/>
                    <h5 style={{marginTop: 10}}>Redis</h5>
                </div>
                <div data-aos='flip-down'>
                    <SiChakraui/>
                    <h5 style={{marginTop: 10}}> Chakra Ui</h5>
                </div>
                <div data-aos='flip-down'>
                    <SiMaterialui/>
                    <h5 style={{marginTop: 10}}>Material Ui</h5>
                </div>
                <div data-aos='flip-down'>
                    <VscGithub/>
                    <h5 style={{marginTop: 10}}>Github</h5>
                </div>
            </div>
        </>
    );
}

export default Techstack;