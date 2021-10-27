import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./header/header";
import Contact from "./contact/contact";
import About from "./skills/about";
import Projects from "./projects/projects";
const main = document.querySelector("main");

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <About />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/projects">
                        <Projects />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
