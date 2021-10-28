import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function ProjectInfo({ list }) {
    const { projectName } = useParams("");
    console.log("list on info: ", list);
    const project = list?.find((project) => {
        if (project.name === projectName) {
            return project;
        }
    });
    console.log("current project: ", project);

    return (
        <>
            {project && (
                <>
                    <div className="project-info-container">
                        <Link to="/projects">
                            <MdOutlineArrowBackIosNew /> View all projects
                        </Link>

                        <div className="project-info">
                            <div className="project-info-inner-container">
                                <div className="logo-and-title">
                                    <img id="logo" src={project.logo} />

                                    <h2>
                                        {projectName.charAt(0).toUpperCase() +
                                            projectName
                                                .slice(1)
                                                .replace("-", " ")}
                                    </h2>
                                </div>
                                <p>{project.description}</p>
                            </div>
                            <div className="project-info-inner-container">
                                <a href={project.href}>
                                    <img
                                        id="social-network-pic"
                                        src={project.src}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
