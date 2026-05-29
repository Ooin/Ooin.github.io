import { experience, type Role } from "@/data/experience";
import Reveal from "./Reveal";

function TimelineEntry({ entry, index }: { entry: Role; index: number }) {
  return (
    <Reveal delay={index * 150}>
      <div className="relative pl-12 pb-16 last:pb-0 group">
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />
        <div className="absolute left-0 top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-500 border-4 border-gray-900 group-hover:scale-125 transition-transform" />

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gray-700/50 flex items-center justify-center overflow-hidden">
              <img
                src={entry.logo}
                alt={`${entry.company} logo`}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
              <p className="text-gray-400">{entry.company}</p>
            </div>
            <span className="ml-auto text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
              {entry.period}
            </span>
          </div>

          <div
            className="text-gray-400 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: entry.description }}
          />

          {entry.roles?.map((role) => (
            <div key={role.title} className="mt-4 pl-4 border-l-2 border-blue-500/30">
              <h4 className="text-lg font-medium text-gray-300 mb-2">{role.title}</h4>
              <div
                className="text-gray-500 leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: role.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <span className="text-blue-400 text-sm tracking-widest uppercase">Where I&apos;ve worked</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              My professional journey through the tech industry
            </p>
          </div>
        </Reveal>

        <div className="max-w-3xl">
          {experience.map((entry, index) => (
            <TimelineEntry key={index} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
