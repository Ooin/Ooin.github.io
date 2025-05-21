import CoolButton from "./CoolButton";
import { PROJECTS } from "../data";
const Projects = () => {
    return (
        <>
            {PROJECTS.map((projItem) => (
                <article key={projItem.key}>
                    <h3>{projItem.projectName}</h3>
                    <a
                        href={projItem.projectLink}
                        target="_blank"
                    >
                        <img src={projItem.image} />
                    </a>
                    <p>{projItem.description}</p>
                </article>
            ))}

            <CoolButton
                linkText="More on Github"
                linkToContent="https://github.com/ooin"
            />
        </>
    );
};

export default Projects;
