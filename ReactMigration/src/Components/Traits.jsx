import { TRAITS } from "../data";

const Traits = () => {
    let traitList;
    
    return (
        <>
        <h4>{TRAITS.title}</h4>
          {/* {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcepts key={conceptItem.title} {...conceptItem} />
        ))} */}
        {TRAITS.traitList.map((item) => (
            <h1 key={item+"_id"}>{item}</h1>
        ))}
        </>
    );
};

export default Traits;
