import { currentlyPlaying } from "@/data/currently-playing";
import Reveal from "./Reveal";

export default function CurrentlyPlaying() {
  return (
    <section id="currently-playing" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm tracking-widest uppercase">What I'm playing</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Currently <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Playing</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-48 h-64 md:h-48 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={currentlyPlaying.image}
                  alt={currentlyPlaying.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                    <i className="fas fa-gamepad text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{currentlyPlaying.title}</h3>
                    <p className="text-sm text-gray-400">{currentlyPlaying.platform}</p>
                  </div>
                </div>
                {currentlyPlaying.hoursPlayed && (
                  <p className="text-sm text-gray-500 mb-4">
                    <i className="fas fa-clock mr-2"></i>
                    {currentlyPlaying.hoursPlayed} hours played
                  </p>
                )}
                <p className="text-gray-400 leading-relaxed">{currentlyPlaying.review}</p>
                {currentlyPlaying.steamLink && (
                  <a
                    href={currentlyPlaying.steamLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <i className="fab fa-steam text-lg"></i>
                    View on Steam
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
