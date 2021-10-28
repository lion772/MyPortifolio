import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./header/header";
import Contact from "./contact/contact";
import About from "./skills/about";
import Projects from "./projects/projects";
import ProjectInfo from "./projects/project-info";
import Footer from "./hooks/footer";

export default function App() {
    const myProjects = [
        {
            name: "social-network",
            href: "https://my-page-social-network.herokuapp.com/",
            src: "http://localhost:3000/social-network.png",
            logo: "http://localhost:3000/logo.png",
            description:
                "The goal of this project was to code using React, Socket.io and Redux. Some features present in social network are logging, registering, making friend requests, editing bio, uploading pictures, chatting, searching for friends and more.",
        },
        {
            name: "image-board",
            href: "https://tropical-island-image-board.herokuapp.com/",
            src: "http://localhost:3000/image-board-picture.png",
            logo: "http://localhost:3000/logo2.png",
            description:
                "This is an Image Board Single Page Application. An app that allows users to upload, delete images and comment them. It uses Vue for client-side rendering. This project was created during my 8th week of coding at SPICED Academy.",
        },
        {
            name: "petition-project",
            href: "https://petition-app-spiced.herokuapp.com/petition",
            src: "http://localhost:3000/petition-project.png",
            logo: "http://localhost:3000/logo3.png",
            description:
                "The Petition project was the first full scale project merging the technologies we learned to make a fully functioning website. Using a Node back-end, PostgreSQL database and handlebars templating engine.",
        },
    ];
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <About />
                        <Footer isHeader={true} />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/projects">
                        <Projects list={myProjects} />
                    </Route>

                    <Route path="/project/:projectName">
                        <ProjectInfo list={myProjects} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
