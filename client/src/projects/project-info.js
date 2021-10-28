import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function ProjectInfo() {
    const { projectName } = useParams("");

    useEffect(() => {
        console.log("Name of the project: ", projectName);
    }, []);

    return (
        <>
            <div className="project-info-container">
                <Link to="/projects">
                    <MdOutlineArrowBackIosNew /> View all projects
                </Link>

                <div className="project-info">
                    <div className="project-info-inner-container">
                        <div className="logo-and-title">
                            <img
                                id="logo"
                                src="http://localhost:3000/logo.png"
                            />

                            <h2>
                                {projectName.charAt(0).toUpperCase() +
                                    projectName.slice(1).replace("-", " ")}
                            </h2>
                        </div>
                        <p>
                            The goal of this project was to code using React,
                            Socket.io and Redux. Some features present in social
                            network are logging, <br /> <br />
                            registering, making friend requests, editing bio,
                            uploading pictures, chatting, searching for friends
                            and more.
                        </p>
                    </div>
                    <div className="project-info-inner-container">
                        <img
                            id="social-network-pic"
                            src="http://localhost:3000/social-network2.png"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
