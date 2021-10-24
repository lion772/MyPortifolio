import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./header/header";
import Welcome from "./header/welcome";
import Skills from "./skills/skills";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Welcome />
                        <Header />
                        <Skills />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
