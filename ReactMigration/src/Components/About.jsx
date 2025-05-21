import { ABOUT } from "../data";
import CoolButton from "./CoolButton";
import Traits from "./Traits";
import CV from "./../assets/documents/MAC_Curriculum.pdf";

const About = () => {
    return (
        <>
            <p>{ABOUT.aboutDesc}</p>
            <Traits />
            <CoolButton linkText="PDF Resume" linkToContent={CV} />
        </>
    );
};

export default About;
