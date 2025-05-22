import CoolButton from "./CoolButton";
import { PROJECTS } from "../data";
const Projects = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
                {PROJECTS.map((projItem) => (
                    <a
                        key={projItem.key}
                        href={projItem.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 m-1"
                    >
                        <img
                            src={projItem.image}
                            className="w-full h-48 object-cover"
                        />

                        {/* Descripció */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                {projItem.projectName}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {projItem.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
            <CoolButton
                linkText="More on Github"
                linkToContent="https://github.com/ooin"
                isGithub={true}
            />
        </>
    );
};

export default Projects;
