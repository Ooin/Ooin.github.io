import { SKILLS } from "../data";

const Skills = ({}) => {
    return (
        <div className="flex space-x-8">
            {SKILLS.map((skillItem) => (
                <div
                    key={skillItem.title + "_id"}
                    className=""
                >
                    <h4 className="text-lg font-semibold mb-2 text-gray-700">{skillItem.title}</h4>
                    <ul className="space-y-1 list-disc list-inside text-gray-600">
                        {skillItem.skillList.map((item) => (
                            <li key={item + "_id"} className="" > {item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;
