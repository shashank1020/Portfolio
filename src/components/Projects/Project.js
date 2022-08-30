import React from "react";
import "../../Assets/css/Project.css";
import {SiChakraui, SiExpress, SiHtml5} from "react-icons/si";
import {DiCss3, DiMongodb, DiReact, DiRequirejs} from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io";
import ubuy from '../../Assets/images/ubuy.gif'
import giftcard from '../../Assets/images/giftcard.gif'
import youtube from '../../Assets/images/youtube.gif'
import soundCloud from '../../Assets/images/soundCloud.gif'

const projectConstants = [
    {
        title: 'soundCloud Clone',
        description: 'This is a online audio streaming and distribution platform that allows users to stream, and share music and podcasts.',
        sub: 'This was a group project and contributors are Jevan, chandan, saurabh',
        technologies: [SiChakraui, DiReact, DiCss3, DiMongodb, SiExpress],
        hostedLink: 'https://web-jinke-music.vercel.app/',
        github: 'https://github.com/BhaveshSuthar00/soundCld-client-side',
        img: soundCloud,
    },
    {
        title: 'Gift-card Clone',
        description: 'Gift-card is a e-commerce website, It is an online gift-card retailer based in Pittsburgh, Pennsylvania. It is considered the largest online gift card retailer and has appeared on the Inc.',
        sub: 'This was a group project and contributors are Yash, Kartik, Sumit, Mayar and Ankit',
        technologies: [SiHtml5, DiCss3, DiRequirejs, IoLogoJavascript, DiMongodb, SiExpress],
        hostedLink: 'https://enigmatic-beach-48011.herokuapp.com/',
        github: 'https://github.com/BhaveshSuthar00/GiftCart-clone',
        img: giftcard
    },
    {
        title: 'Ubuy Clone',
        description: 'Ubuy is not your usual e-commerce website, we provide our customers with access to an excellent variety of products. Today\'s shoppers want more in a shorter time period, and let\'s not forget the easy purchase methods and delivery to make it worth their while.',
        sub: 'This was a group project and contributors are Suresh, Prachi and Ankit',
        technologies: [SiHtml5, DiCss3, IoLogoJavascript],
        hostedLink: 'https://ubuy-project.vercel.app/',
        github: 'https://github.com/BhaveshSuthar00/ubuy-project',
        img: ubuy
    },
    {
        title: 'Youtube Clone',
        description: '',
        sub: 'Youtube clone is my individual project. I created this when I was learning REST API.',
        technologies: [SiHtml5, DiCss3, IoLogoJavascript],
        hostedLink: 'https://tube-ten.vercel.app/',
        github: 'https://github.com/BhaveshSuthar00/tube',
        img: youtube
    }

]

const ProjectShowcase = (props) => {
    return(
        <div className="projects_container">
            <div className="project">
                <div className="project_videocontainer">
                    <div data-aos="fade-right" data-aos-anchor-easing='ease-in-out'>
                        <img
                            src={props?.img}
                            alt="gif"
                        />
                    </div>
                </div>
                <div className="project_information" data-aos="fade-left" data-aos-anchor-easing='ease-in-out'>
                    <h2>{props.title}</h2>
                    <div>
                        <p>
                            {props?.description}
                        </p>
                        <p>
                            {props?.sub}
                        </p>
                    </div>
                    <div>
                        {props?.technologies?.map((Tech)=> <Tech />)}
                    </div>
                    <div>
                        <a
                            href={props?.hostedLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="btn btn--outline onbt">
                                See this Live
                            </button>
                        </a>
                        <a
                            href={props?.github}
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
    )
}

export const Projects = () => {
    return (
        <>
            <div className="section" id="project">
                <h2 className="section__title different" data-aos="fade-right">
                    <strong>Projects</strong>
                </h2>
                {projectConstants?.map((item) => <ProjectShowcase {...item} />)}
            </div>
        </>
    );
};
