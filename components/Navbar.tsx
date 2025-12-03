// components/Navbar.tsx

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        
        {/* Name / Logo */}
        <a
          href="#"
          className="text-xl font-bold text-white tracking-wide hover:text-violet-400 transition"
        >
          Prathmesh Patil
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#achievements" className="hover:text-white transition">Achievements</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a
            href="#resume"
            className="px-3 py-1 rounded-lg border border-violet-400 text-violet-300 hover:bg-violet-500/20 transition"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
