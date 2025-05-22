import { EDUCATION } from "../data";

const Education = () => {
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {EDUCATION.map((edItem) => (
                    <div key={edItem.key} className="w-48 h-48 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center">
                        {/* Logo */}
                        <img
                            src={edItem.logo}
                            alt="Logo estudi"
                            className="w-16 h-16 mb-3 object-contain"
                        />

                        {/* Nom de l’estudi */}
                        <h3 className="text-sm font-semibold text-gray-800 mb-1">
                            {edItem.description}
                        </h3>

                        {/* Data */}
                        <p className="text-xs text-gray-500">{edItem.institution} ({edItem.date})</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Education;
