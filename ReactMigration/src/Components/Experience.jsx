import { EXPERIENCE } from "../data";

const Experience = () => {
    return (
        <>
            {EXPERIENCE.map((expItem) => (
                <div key={expItem.key}>
                    <div className="flex">
                        <div>
                            <img src={expItem.logo} alt="Company Logo" />
                        </div>
                        <div>
                            <header>
                                <h4>{expItem.title}</h4>
                                <p>
                                    <i>
                                        {expItem.company} ({expItem.date})
                                    </i>
                                </p>
                            </header>
                        </div>
                    </div>
                    <p>{expItem.description}</p>
                </div>
            ))}
        </>
    );
};

export default Experience;
