import { EDUCATION } from "../data";

const Education = () => {
    return (
        <>
            {EDUCATION.map((edItem) => (
                <div key={edItem.key}>
                    <div>
                        <div >
                            <img
                                src={edItem.logo}
                                alt="Company Logo"
                                class="logo"
                            />
                        </div>
                        <div >
                            <header>
                                <h4>{edItem.description}</h4>
                                <p>
                                    <i>
                                        {edItem.institution} ({edItem.date})
                                    </i>
                                </p>
                            </header>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Education;