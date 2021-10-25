import { FaMobileAlt, FaRegClock, FaHammer } from "react-icons/fa";
/* import Flip from "../hooks/flipCard"; */

export default function AndroidOrFullstack() {
    return (
        <>
            <div className="android-development">
                <h2>Android development </h2>
                <div>
                    <p id="opening-text">
                        I&apos;m grateful for everything this company has done
                        for me, from opening up its job offer door to improving
                        my level of coding and become better every single day.
                        The tasks assigned to me were:
                    </p>
                    <div className="icons-android-development">
                        <div className="icons-inner-container">
                            <FaRegClock
                                style={{
                                    color: "darkgoldenrod",
                                    fontSize: "60px",
                                }}
                            />
                            <p>
                                Improving users’ experience - Giving the best
                                quality and comfort to the experienced and
                                recent users.
                            </p>
                        </div>
                        <div className="icons-inner-container">
                            <FaHammer
                                style={{
                                    color: "darkgoldenrod",
                                    fontSize: "60px",
                                }}
                            />
                            <p>
                                Maintenance of Java and Kotlin Code - I was
                                assigned to improve the java code which already
                                exists, and it compounds much of the whole app,
                                around 90%;
                            </p>
                        </div>
                        <div className="icons-inner-container">
                            <FaMobileAlt
                                style={{
                                    color: "darkgoldenrod",
                                    fontSize: "60px",
                                }}
                            />
                            <p>
                                Converting outdated java code into Kotlin code,
                                applying MVVM architecture, dependency injection
                                and databinding to the layouts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="web-development">
                <div className="top-web-container">
                    <h2>Full-Stack development </h2>
                    <p>
                        Here I had a great experience by learning how to build
                        single page applications with the latest front-end
                        frameworks. Starting with Vue.js, I developed an
                        application called "image board", where anyone can
                        upload a picture in it and save it on AWS and database.
                        In the end, one of the last projects of my course, I had
                        to create a social network webpage by using React.
                    </p>
                </div>
                <div className="bottom-web-container">
                    {/* <Flip classes={["bottom-inner-container"]} /> */}
                    <div className="bottom-inner-container">
                        <h3>Front-end</h3>
                        <ul>
                            <li>JS</li>
                            <li>Vue</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="bottom-inner-container">
                        <h3>Back-end</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Postgresql</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
