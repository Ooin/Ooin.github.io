import avatarPic from "./../assets/images/avatars/avatar.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Header = () => {
    return (
        <aside className="flex flex-col w-64 h-screen bg-gray-800 text-white p-4 font-[Cascadia_Nerd]">
            <div className="">
                <img className="rounded-4xl mt-1 mb-3" src={avatarPic} alt="" />
                <h1 className="text-justify text-">
                    Hi! I'm <strong>Marc Anglés</strong>,<br />
                    aspiring Game Developer, <br />
                    board game aficionado, maker & inline skater.
                </h1>
            </div>
            <div className="mt-auto flex justify-around pt-4">
                <a
                    href="https://github.com/Ooin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    <FaGithub size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/marc-anglés-castillo-bb640748/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    <FaLinkedin size={20} />
                </a>
                <a
                    href="mailto:m.angles@nakshisoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    <MdOutlineMailOutline size={20} />
                </a>
            </div>
        </aside>
    );
};

export default Header;
