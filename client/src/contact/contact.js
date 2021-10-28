import LottieContact from "./lottieContact";
import Navbar from "../hooks/nav";
import Footer from "../hooks/footer";
import Particles from "react-particles-js";

export default function Contact() {
    return (
        <>
            <div className="contact-container">
                <Navbar isContact={true} />
                <h2>Get in touch!</h2>
                <h3>If you have any question, do not hesitate to ask.</h3>
                <LottieContact />
                <a className="button " href="mailto:williamlopes64@gmail.com">
                    Write me an email
                </a>
                <h3>Or reach out to me on my social networks</h3>
                <Footer isContact={true} />
            </div>
            <div className="snow-background">
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 160,
                                density: {
                                    enable: false,
                                },
                            },
                            size: {
                                value: 10,
                                random: true,
                            },
                            move: {
                                direction: "bottom",
                                out_mode: "out",
                            },
                            line_linked: {
                                enable: false,
                            },
                        },
                        interactivity: {
                            events: {
                                onclick: {
                                    enable: true,
                                    mode: "remove",
                                },
                            },
                            modes: {
                                remove: {
                                    particles_nb: 10,
                                },
                            },
                        },
                    }}
                />
            </div>
        </>
    );
}
