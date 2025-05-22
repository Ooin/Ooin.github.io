import { EXPERIENCE } from "../data";

const Experience = () => {
    return (
        <>
            {EXPERIENCE.map((expItem) => (
                <div className="flex items-start p-4 rounded-xl shadow-md w-full bg-white m-2" key={expItem.key}>
                    {/* Columna esquerra: imatge + text */}
                    <div className="flex flex-col items-center w-40">
                        <img
                            src={expItem.logo}
                            alt="Company Logo"
                            className="w-30 h-30 object-contain mb-2 rounded-lg"
                        />
                        <div className="text-center">
                            <p className="text-sm font-semibold text-gray-800">
                                {expItem.company} ({expItem.date})
                            </p>
                            {/* <p className="text-xs text-gray-500">{expItem.company} ({expItem.date})</p> */}
                        </div>
                    </div>

                    {/* Contingut dret: ocupa l'espai restant */}
                    <div className="flex-1 ml-4">
                        <h2 className="text-lg font-bold text-gray-900 mb-2">
                            {expItem.title}
                        </h2>
                        <p className="text-sm text-gray-600">
                            {expItem.description}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Experience;
