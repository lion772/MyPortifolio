import Lottie from "./lottie";
import AndroidOrFullstack from "./androidOrFullstack";

export default function Skills() {
    return (
        <div className="skills-container">
            <h2>Skills </h2>

            <div className="introduction">
                <div className="introduction-paragraph">
                    <p>
                        In Brazil I worked as android developer for 6 months at
                        Smart Pos, but later on decided to start a new journey
                        in Germany and joined Spiced Academy course, in order to
                        become a Full-Stack developer and go deeper into the
                        real meaning of becoming a good developer.
                    </p>
                </div>
                <Lottie />
            </div>
            <AndroidOrFullstack />
        </div>
    );
}
