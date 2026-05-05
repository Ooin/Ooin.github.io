export default function Footer() {
  return (
    <footer id="footer" className="py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Marc Anglés
          </div>

          <div className="flex gap-6">
            {[
              {
                href: "https://www.linkedin.com/in/marc-anglés-castillo-bb640748/",
                icon: "fa-linkedin-in",
                label: "LinkedIn",
              },
              {
                href: "https://github.com/Ooin",
                icon: "fa-github",
                label: "GitHub",
              },
              {
                href: "mailto:m.angles@nakshisoft.com",
                icon: "fa-envelope",
                label: "Email",
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all hover:scale-110"
                aria-label={label}
              >
                <i className={`fab ${icon} text-lg`}></i>
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Marc Anglés Castillo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
