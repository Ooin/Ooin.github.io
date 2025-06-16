import About from "./About";

const Segment = ({ title, children }) => {
    return (
        <div className="border-2 border-e-cyan-900 rounded-xl ">
            <div>
                <h1 className="">{title}</h1>
            </div>
            <div>{children}</div>
        </div>
    );
};
export default Segment;
