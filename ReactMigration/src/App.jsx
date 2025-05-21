import Segment from "./Components/Segment";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Education from "./Components/Education"

function App() {
    return (
        <div className="">
            <div className="flex h-screen">
                <Header />
                <main className="flex-1 p-6 overflow-auto w-fit bg-amber-300">
                    <Segment title={"About"}>
                        <About />
                    </Segment>
                    <Segment title="Skills">
                        <Skills />
                    </Segment>
                    <Segment title="Experience">
                        <Experience />
                    </Segment>
                    <Segment title="Projects">
                        <Projects />
                    </Segment>
                    <Segment title="Education">
                        <Education />
                    </Segment>
                </main>
            </div>
        </div>
    );
}

export default App;
