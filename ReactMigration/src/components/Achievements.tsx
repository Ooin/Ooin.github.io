import { achievements } from "@/data/achievements";
import Reveal from "./Reveal";

function AchievementCard({ icon, title, description, index }: { icon: string; title: string; description: string; index: number }) {
  return (
    <Reveal delay={index * 100}>
      <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
          <i className={`fas ${icon} text-xl`}></i>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </Reveal>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm tracking-widest uppercase">Why hire me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Key <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A snapshot of what I bring to the table
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
