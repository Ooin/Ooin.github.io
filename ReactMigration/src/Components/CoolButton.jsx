import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const CoolButton = ({ linkToContent, linkText, isGithub }) => {

    return (
        <div className="text-2xl rounded-xl text-center border-2 font-[Cascadia_Nerd] shadow-2xl">
            <a href={linkToContent}>
                {linkText}
                {isGithub ? (
                    <FontAwesomeIcon icon={faGithub} />
                ) : (
                    <FontAwesomeIcon icon={faDownload} />
                )}
            </a>
        </div>
    );
};

export default CoolButton;
