import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar({ isContact, isProject }) {
    const [isSideNavOn, setSideNav] = useState(false);

    const handleSideNav = () => {
        setSideNav(!isSideNavOn);
    };
    function checkPropsClass() {
        if (isContact) {
            return "nav-contact";
        } else if (isProject) {
            return "nav-project";
        } else {
            return "nav-items";
        }
    }

    function checkPropsLinks() {
        if (!isContact && !isProject) {
            return (
                <>
                    <a href="#about">
                        <li>About</li>
                    </a>
                    <a href="#android">
                        <li>Android</li>
                    </a>
                    <a href="#full-stack">
                        <li>Full-stack</li>
                    </a>
                </>
            );
        }
    }

    const checkEitherContactOrProject = () => {
        return (
            <>
                {!isContact && !isProject ? (
                    <>
                        <Link to="/projects">Go to projects</Link>
                        <Link to="/contact">Go to contact</Link>
                    </>
                ) : (
                    <>
                        {isContact ? (
                            <>
                                <Link to="/projects">Go to projects</Link>
                                <Link to="/">Back to main page</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/contact">Go to contact</Link>
                                <Link to="/">Back to main page</Link>
                            </>
                        )}
                    </>
                )}
            </>
        );
    };

    console.log("contact is: ", isContact);
    console.log(" isProject : ", isProject);

    return (
        <>
            <nav>
                <div>
                    <ul className={checkPropsClass()}>
                        {checkPropsLinks()}

                        <span onClick={handleSideNav}>
                            {isSideNavOn ? (
                                <>
                                    <span id="burguer-menu">
                                        <FaBars />
                                    </span>
                                    <div className="overlay"></div>
                                    <div className="side-nav on">
                                        {checkEitherContactOrProject()}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <li id="burguer-menu-contact">
                                        <FaBars />
                                    </li>
                                    <div className="side-nav hidden"></div>
                                </>
                            )}
                        </span>
                    </ul>
                </div>
            </nav>
        </>
    );
}
