import Navbar from "../hooks/nav";
import Footer from "../hooks/footer";
import LottieSpace from "./lottieSpace";

import Particles from "react-particles-js";

export default function Projects() {
    return (
        <>
            <div className="projects-container">
                <Navbar isProject={true} />
                <div className="projects-inner-container">
                    <h2>
                        Here you will find some apps made from scratch at the
                        beginning of my journey as Full-stack developer
                    </h2>
                    <LottieSpace />
                </div>
            </div>

            <div className="night-sky-background">
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 60,
                                density: {
                                    enable: true,
                                    value_area: 1500,
                                },
                            },
                            line_linked: {
                                enable: true,
                                opacity: 0.02,
                            },
                            move: {
                                direction: "right",
                                speed: 0.05,
                            },
                            size: {
                                value: 1,
                            },
                            opacity: {
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.05,
                                },
                            },
                        },
                        interactivity: {
                            events: {
                                onclick: {
                                    enable: true,
                                    mode: "push",
                                },
                            },
                            modes: {
                                push: {
                                    particles_nb: 1,
                                },
                            },
                        },
                        retina_detect: true,
                    }}
                />
            </div>
        </>
    );
}
