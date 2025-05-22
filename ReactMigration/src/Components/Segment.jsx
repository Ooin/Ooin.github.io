import About from "./About";

const Segment = ({ title, children }) => {
    return (
        <div className="border-2 border-e-cyan-900 rounded-xl m-2 pr-5">
            <div className="m-5 text-3xl underline-offset-8 underline">
                <h1>{title}</h1>
            </div>
            <div className="m-4">{children}</div>
        </div>
    );
};
export default Segment;
