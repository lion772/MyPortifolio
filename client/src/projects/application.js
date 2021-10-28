import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Applications({ name, list }) {
    console.log("names :", name);
    console.log("list :", list);
    let project;

    const renderMyProject = () => {
        project = list.find((obj) => obj.name === name);
        console.log("projects: ", project);
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
                {renderMyProject()}
            </div>
        </div>
    );
}
