import { Link } from "react-router-dom";

export default function Applications({ name }) {
    console.log("names :", name);
    const myProjects = [
        {
            name: "social-network",
            href: "https://my-page-social-network.herokuapp.com/",
            src: "http://localhost:3000/social-network.png",
        },
        {
            name: "image-board",
            href: "https://tropical-island-image-board.herokuapp.com/",
            src: "http://localhost:3000/image-board-picture.png",
        },
    ];

    const renderMyProject = (arr, name) => {
        const project = arr.find((obj) => obj.name === name);
        console.log(project);
        return (
            <>
                <div className="learn-more">
                    <h2>{name}</h2>
                    <Link to={name}>
                        Learn more <span>👉</span>
                    </Link>
                </div>
                <a id="screenshot-project" href={project.href}>
                    <img src={project.src} />
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
