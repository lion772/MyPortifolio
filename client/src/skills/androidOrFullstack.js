import { FaMobileAlt, FaRegClock, FaHammer } from "react-icons/fa";

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
                        My routine is based on the following topics:
                    </p>
                    <div className="icons-android-development">
                        <div className="icons-inner-container">
                            <FaRegClock
                                style={{ color: "white", fontSize: "60px" }}
                            />
                            <p>
                                Improving users’ experience - Giving the best
                                quality and comfort to the experienced and
                                recent users.
                            </p>
                        </div>
                        <div className="icons-inner-container">
                            <FaHammer
                                style={{ color: "white", fontSize: "60px" }}
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
                                style={{ color: "white", fontSize: "60px" }}
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
                <h2>Full-Stack development </h2>
                <div></div>
            </div>
        </>
    );
}
