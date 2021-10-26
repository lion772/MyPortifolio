import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar({ contact }) {
    const [isSideNavOn, setSideNav] = useState(false);

    const handleSideNav = () => {
        setSideNav(!isSideNavOn);
    };

    console.log("contact is: ", contact);

    return (
        <>
            <nav>
                <div>
                    <ul className={`${!contact ? "nav-items" : "nav-contact"}`}>
                        {!contact ? (
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
                        ) : (
                            ""
                        )}

                        <span onClick={handleSideNav}>
                            {isSideNavOn ? (
                                <>
                                    <li id="burguer-menu">
                                        <FaBars />
                                    </li>
                                    <div className="overlay"></div>
                                    <div className="side-nav on">
                                        {!contact ? (
                                            <Link to="/contact">Contact</Link>
                                        ) : (
                                            <Link to="/">
                                                Back to main page
                                            </Link>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <li id="burguer-menu">
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
