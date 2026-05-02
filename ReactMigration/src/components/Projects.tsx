import { projects, type Project } from "@/data/projects";
import Reveal from "./Reveal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 100}>
      <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2"
              >
                View Project <i className="fas fa-external-link-alt text-sm"></i>
              </a>
            ) : (
              <span className="text-gray-400 italic">Personal Project</span>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm tracking-widest uppercase">Things I&apos;ve built</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my work spanning game development, web apps, and creative experiments
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <Reveal>
          <div className="text-center">
            <a
              href="https://github.com/ooin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 rounded-full text-gray-300 hover:text-white transition-all hover:scale-105"
            >
              <i className="fab fa-github text-lg"></i>
              See More on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
