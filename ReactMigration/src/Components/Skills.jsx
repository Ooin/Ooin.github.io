import { SKILLS } from "../data";

const Skills = ({}) => {
    return (
        <div>
            {SKILLS.map((skillItem) => (
                <div key={skillItem.title + "_id"}>
                    <h4>{skillItem.title}</h4>
                    <ul>
                        {skillItem.skillList.map((item) => (
                            <li key={item + "_id"}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;