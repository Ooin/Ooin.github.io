import { gameJams, type GameJam } from "@/data/gamejams";
import Reveal from "./Reveal";

function GameJamCard({ jam }: { jam: GameJam }) {
  return (
    <Reveal>
      <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
            <i className="fas fa-gamepad text-lg"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {jam.title}
            </h3>
            <span className="text-sm text-gray-500">{jam.year}</span>
          </div>
        </div>
        {jam.theme && (
          <p className="text-xs text-gray-600 italic mb-3">Theme: {jam.theme}</p>
        )}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{jam.description}</p>
        {jam.link && (
          <a
            href={jam.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-2"
          >
            View Project <i className="fas fa-external-link-alt text-xs"></i>
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function GameJams() {
  return (
    <section id="gamejams" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm tracking-widest uppercase">Rapid prototyping</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Game <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Jams</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Quick game development challenges that test creativity under pressure
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameJams.map((jam, index) => (
            <GameJamCard key={index} jam={jam} />
          ))}
        </div>
      </div>
    </section>
  );
}
