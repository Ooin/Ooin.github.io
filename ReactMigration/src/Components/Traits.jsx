import { TRAITS } from "../data";

const Traits = () => {
    let traitList;

    return (
        <div className="m-2">
            <h4 className="text-xl">{TRAITS.title}</h4>
            <div className="flex justify-baseline flex-wrap text-m">
                {/* {CORE_CONCEPTS.map((conceptItem) => (
                <CoreConcepts key={conceptItem.title} {...conceptItem} />
                ))} */}
                {TRAITS.traitList.map((item) => (
                    <h1 key={item + "_id"} className="bg-cyan-900 text-amber-300 border-1 rounde rounded-xl border-amber-300 shadow-2xl p-1 mx-0.5 my-1 p-0.9">
                        {item}
                    </h1>
                ))}
            </div>
        </div>
    );
};

export default Traits;
