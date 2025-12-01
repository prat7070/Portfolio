// components/About.tsx

export default function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          About
        </h2>
        <p className="mt-3 text-3xl font-semibold text-gray-100">
          A little about who I am.
        </p>
        <p className="mt-6 max-w-4xl text-m sm:text-lg md:text-l lg:text-xl text-gray-300">

          I&apos;m Prathmesh Patil, an Electronics & UAV Engineer driven by the challenge of creating high performance drones and intelligent electronic systems.I love transforming technical ideas into practical, user-friendly solutions through thoughtful design, precise engineering, and a strong focus on performance and reliability.
        </p>
      {/* Stats Boxes */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">

          {/* Projects Box */}
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-blue-900/10 p-8 text-center shadow-xl backdrop-blur">
            <div className="text-3xl mb-4">🚀</div>
            <div className="text-4xl font-bold text-blue-400">20+</div>
            <div className="mt-2 text-gray-300 text-lg">Projects</div>
          </div>

          {/* Experience Box */}
          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-600/10 to-emerald-900/10 p-8 text-center shadow-xl backdrop-blur">
            <div className="text-3xl mb-4">⭐</div>
            <div className="text-4xl font-bold text-emerald-400">3+ Yrs</div>
            <div className="mt-2 text-gray-300 text-lg">Experience</div>
          </div>

        </div>

      </div>
    </section>
  );
}