import React from "react";
import "../../Assets/css/Project.css";
import {USER} from "../../Constants";

export const Projects = () => {
    return (
        <>
            <div className="section" id="project">
                <h2 className="section__title different" data-aos="fade-right">
                    <strong>Projects</strong>
                </h2>
                {USER.projects?.map((item) => <ProjectShowcase {...item} />)}
            </div>
        </>
    );
};

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
                    </div>
                    <div>
                        {props?.technologies?.map((Tech)=> <Tech />)}
                    </div>
                    <div>
                        {props?.hostedLink && <a
                            href={props?.hostedLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="btn btn--outline onbt">
                                See this Live
                            </button>
                        </a>}
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
