import { about } from "@/data/about";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-gray-950 opacity-80" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-xl animate-pulse-glow" />
            <img
              src="/images/avatars/avatar.jpg"
              alt={about.name}
              className="relative w-36 h-36 rounded-full object-cover border-4 border-blue-400/50 shadow-2xl"
            />
          </div>
        </div>

        <p className="text-blue-400 text-sm tracking-widest uppercase mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Hello World, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient">
            {about.name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light mb-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {about.title}
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {about.tagline}
        </p>

        <div className="mt-12 flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#about"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Discover More
          </a>
          <a
            href={about.pdfResume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-full transition-all hover:scale-105"
          >
            Download CV <i className="fas fa-download ml-2 text-sm"></i>
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-gray-300 transition-colors">
            <i className="fas fa-chevron-down text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
