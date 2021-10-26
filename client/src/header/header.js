import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import Navbar from "../hooks/nav";

import { useSpring, animated } from "@react-spring/web";

export default function Header() {
    /* const [offsetY, setOffsetY] = useState(0); */
    /* const handleScroll = () => setOffsetY(window.pageYOffset); */

    /* const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
    });
    const springValues = {
        scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
        }),
    };
 */
    /* useEffect(() => {
        /* window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }; 
    }, []); */

    return (
        <>
            <header>
                <Navbar />
                <div className="first-container">
                    <h1>What&apos;s up!</h1>
                    <h3>I&apos;m William Steinke de Mello</h3>
                    <p>
                        Full-Stack development background and <br />
                        working soon as Expert digital interfaces at Coac.
                    </p>
                </div>
            </header>
            <div className="bubble-background">
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 600,
                                density: {
                                    enable: false,
                                },
                            },
                            size: {
                                value: 5,
                                random: true,
                                anim: {
                                    speed: 4,
                                    size_min: 0.3,
                                },
                            },
                            line_linked: {
                                enable: false,
                            },
                            move: {
                                random: false,
                                speed: 3,
                                direction: "top",
                                out_mode: "out",
                            },
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "bubble",
                                },
                                onclick: {
                                    enable: true,
                                    mode: "repulse",
                                },
                            },
                            modes: {
                                bubble: {
                                    distance: 250,
                                    duration: 2,
                                    size: 0,
                                    opacity: 0,
                                },
                                repulse: {
                                    distance: 400,
                                    duration: 4,
                                },
                            },
                        },
                    }}
                />
            </div>
        </>
    );
}
