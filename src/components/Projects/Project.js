import React from "react";
import "./Project.css";
import { SiHtml5 } from "react-icons/si";
import { DiCss3,DiRequirejs,DiMongodb, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiChakraui } from "react-icons/si";
import ubuy from '../../Assets/ubuy.gif'
import giftcard from '../../Assets/giftcard.gif'
import youtube from '../../Assets/youtube.gif'
import soundCloud from '../../Assets/soundCloud.gif'
export const Projects = () => {
  return (
    <>
      <div className="section" id="project">
        <h2 className="section__title different" data-aos="fade-right">
          {'< '}<strong>Projects</strong>{' />'}
        </h2>
        {/* first one */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right"   data-aos-anchor-easing='ease-in-out'>
                <img
                  src={soundCloud}
                  alt="gif"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-left"   data-aos-anchor-easing='ease-in-out'>
              <h2>soundCloud Clone</h2>
              <div>
                <p>
                  This is a online audio streaming and distribution platform that allows users to stream, and share music and podcasts.
                </p>
                <p>
                This was a group project and contributors are Jevan, chandan, saurabh
              </p>
              </div>
              <div>
                <SiChakraui />
                <DiReact />
                <DiCss3 />
                <DiMongodb />
                <SiExpress />
              </div>
              <div>
                <a
                  href="https://web-jinke-music.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/BhaveshSuthar00/soundCld-client-side"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button  className="btn btn--outline">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* second one */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={giftcard}                  
                  alt="gitcard gif"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-left" >
              <h2>Gift-card Clone</h2>
              <div>
              <p>
              Gift-card is a e-commerce website, It is an online 
              gift-card retailer based in Pittsburgh, Pennsylvania. It is considered the
              largest online gift card retailer and has appeared on the Inc.
              </p>
              <p>
                This was a group project and contributors are Yash, Kartik, Sumit, Mayar and Ankit
              </p>
              </div>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <DiRequirejs />
                <IoLogoJavascript />
                <DiMongodb />
                <SiExpress />
              </div>
              <div>
                <a
                  href="https://enigmatic-beach-48011.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/BhaveshSuthar00/GiftCart-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
          {/* third one */}
          <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right" >
                <img
                  src={ubuy}
                  alt="ubuy gif"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-left">
              <h2>Ubuy Clone</h2>
              <div>
              <p>
              Ubuy is not your usual e-commerce website, we provide our 
              customers with access to an excellent variety of products. 
              Today's shoppers want more in a shorter time period, and let's 
              not forget the easy purchase methods and delivery to make it worth their while.
              </p>
              <p>
                This was a group project and contributors are Suresh, Prachi and Ankit
              </p>
              </div>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://ubuy-project.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/BhaveshSuthar00/ubuy-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
          {/* forth one */}
          <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right"   data-aos-anchor-easing='ease-in-out'>
                <img
                  src={youtube}
                  alt="youtube gif"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-left"   data-aos-anchor-easing='ease-in-out'>
              <h2>Youtube Clone</h2>
              <div>
                <p>
                  Youtube clone is my individual project. I created this when I was learning REST API.
                </p>
              </div>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://tube-ten.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/BhaveshSuthar00/tube"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button  className="btn btn--outline">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
