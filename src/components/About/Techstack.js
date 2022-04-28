import React from "react";
import './Techstack.css'
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiChakraui } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

function Techstack() {
  return (
    <>
      <div className="techstack">
          <div data-aos='flip-down'>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div data-aos='flip-down'>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div data-aos='flip-down'> 
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div data-aos='flip-down'>
            <FaReact />
            <h5>React</h5>
          </div>
          <div data-aos='flip-down'>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div data-aos='flip-down'>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div data-aos='flip-down'>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div data-aos='flip-down'>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div data-aos='flip-down'>
            <SiRedis />
            <h5>Redis</h5>
          </div>
          <div data-aos='flip-down'>
            <SiChakraui />
            <h5>Chakra Ui</h5>
          </div>
          <div data-aos='flip-down'>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div data-aos='flip-down'>
            <VscGithub />
            <h5>Github</h5>
          </div>
      </div>
    </>
    );
  }
  
  export default Techstack;