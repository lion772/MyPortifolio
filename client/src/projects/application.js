import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Applications({ name }) {
    console.log("names :", name);
    let project;
    const myProjects = [
        {
            name: "social-network",
            href: "https://my-page-social-network.herokuapp.com/",
            src: "http://localhost:3000/social-network.png",
            logo: "http://localhost:3000/logo.png",
        },
        {
            name: "image-board",
            href: "https://tropical-island-image-board.herokuapp.com/",
            src: "http://localhost:3000/image-board-picture.png",
        },
    ];

    /* function handleClick() {
        console.log("clicked", project);
    } */

    const renderMyProject = (arr, name) => {
        project = arr.find((obj) => obj.name === name);
        console.log(project);
        return (
            <>
                <div className="learn-more">
                    <div className="logo-title-project">
                        <img id="logo" src={project.logo} />
                        <h2>
                            {name.charAt(0).toUpperCase() +
                                name.slice(1).replace("-", " ")}
                        </h2>
                    </div>

                    <Link to={`/project/${name}`}>
                        Learn more{" "}
                        <span>
                            <MdOutlineArrowForwardIos />
                        </span>
                    </Link>
                </div>
                <a id="screenshot-project" href={project.href}>
                    <img id="social-network-picture" src={project.src} />
                </a>
            </>
        );
    };

    return (
        <div className="application-container">
            <div className="application-inner-container">
                {renderMyProject(myProjects, name)}
            </div>
        </div>
    );
}
