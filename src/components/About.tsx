"use client";

import { about } from "@/data/about";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <span className="text-blue-400 text-sm tracking-widest uppercase">Get to know me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16">
          <Reveal>
            <div
              className="text-gray-400 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: about.description }}
            />
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-white">Personal Traits</h3>
              <div className="flex flex-wrap gap-3">
                {about.personalTraits.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-default"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
