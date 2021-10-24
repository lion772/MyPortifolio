import { useEffect, useState } from "react";

export default function Header() {
    useEffect(() => {
        //console.log("Header is mounted!");
    }, []);

    return (
        <>
            <header>
                <nav>
                    <ul className="nav-items">
                        <li>Work</li>
                        <li>Experience</li>
                        <li>About</li>
                    </ul>
                </nav>
                <div className="first-container">
                    <h1>Hey, I&apos;m William</h1>
                    <p>
                        Full-Stack development background and <br />
                        working soon as Expert digital interfaces at Coac.
                    </p>
                </div>
            </header>
        </>
    );
}
