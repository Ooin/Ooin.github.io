import { skills } from "@/data/skills";
import Reveal from "./Reveal";

interface SkillCardProps {
  title: string;
  items: string[];
  icon: string;
  color: string;
  delay?: number;
}

function SkillCard({ title, items, icon, color, delay = 0 }: SkillCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-xl bg-${color}/10 flex items-center justify-center text-${color} group-hover:bg-${color}/20 transition-colors`}>
            <i className={`fas ${icon} text-lg`}></i>
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-sm hover:bg-blue-500/10 hover:text-blue-300 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm tracking-widest uppercase">What I bring to the table</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A versatile toolkit built over years of diverse development experience
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Game Development" items={skills.gameDev} icon="fa-gamepad" color="blue-400" delay={0} />
          <SkillCard title="Enterprise Tech" items={skills.enterprise} icon="fa-server" color="green-400" delay={100} />
          <SkillCard title="Tools & IDEs" items={skills.tools} icon="fa-tools" color="yellow-400" delay={200} />
          <SkillCard title="Soft Skills" items={skills.soft} icon="fa-brain" color="purple-400" delay={300} />
          <SkillCard title="Spoken Languages" items={skills.spoken} icon="fa-language" color="pink-400" delay={400} />
        </div>
      </div>
    </section>
  );
}
