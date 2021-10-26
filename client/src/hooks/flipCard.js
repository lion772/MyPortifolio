import React, { useState } from "react";
/* import { useSpring, a } from "@react-spring/web"; */
import ReactCardFlip from "react-card-flip";

export default function Flip({ classes }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    console.log("name of the class: ", classes);
    return (
        <>
            {classes.includes("front") ? (
                <>
                    <ReactCardFlip
                        isFlipped={isFlipped}
                        flipDirection="vertical"
                    >
                        <div
                            className={classes}
                            onClick={handleClick}
                            style={{}}
                        >
                            <p>Front-end</p>
                        </div>

                        <div className={classes} onClick={handleClick}>
                            <ul>
                                <li>JS</li>
                                <li>Vue</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </ReactCardFlip>
                </>
            ) : (
                <>
                    <ReactCardFlip
                        isFlipped={isFlipped}
                        flipDirection="vertical"
                    >
                        <div
                            className={classes}
                            onClick={handleClick}
                            style={{}}
                        >
                            <p>Back-end</p>
                        </div>

                        <div className={classes} onClick={handleClick}>
                            <li>Node.js</li>
                            <li>Postgresql</li>
                        </div>
                    </ReactCardFlip>
                </>
            )}
        </>
    );
}
