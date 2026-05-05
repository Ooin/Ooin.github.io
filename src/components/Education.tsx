import { education, type Education } from "@/data/education";
import Reveal from "./Reveal";

function EducationCard({ entry, index }: { entry: Education; index: number }) {
  return (
    <Reveal delay={index * 100}>
      <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-gray-700/50 flex-shrink-0 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
            <img
              src={entry.logo}
              alt={`${entry.institution} logo`}
              className="w-full h-full object-contain p-2"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
              {entry.title}
            </h3>
            <p className="text-gray-400 text-sm">{entry.institution}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm tracking-widest uppercase">Academic background</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Education</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((entry, index) => (
            <EducationCard key={index} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
