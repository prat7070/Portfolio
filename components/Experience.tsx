// components/Experience.tsx

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">

        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Experience
        </h2>

        <p className="mt-3 text-3xl font-semibold text-gray-100">
          My Professional Journey.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Experience Card 1 */}
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900/20 p-8 shadow-xl hover:scale-[1.02] transition">
            
            <h3 className="text-2xl font-bold text-blue-400">Team Captain</h3>
            <p className="text-gray-300 mt-1 text-sm">Team Vajra – RC Drone Club</p>

            <p className="text-gray-400 mt-1 text-xs italic">
              Nov 2022 – Present
            </p>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Worked on building, tuning, and testing high-performance UAVs.
              UAV system integration, autonomous mission development,
              and real-world drone testing for college competitions and R&D projects.
            </p>
          </div>

          {/* Experience Card 2 */}
          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-600/10 to-slate-900/20 p-8 shadow-xl hover:scale-[1.02] transition">
            
            <h3 className="text-2xl font-bold text-emerald-400">R&D Intern</h3>
            <p className="text-gray-300 mt-1 text-sm">Nasan Medical Electronics Pvt.Ltd.</p>

            <p className="text-gray-400 mt-1 text-xs italic">
              Jan 2025 – July 2025
            </p>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Developed embedded and IoT prototypes, performed hardware debugging, built secure communication modules, and contributed to real-world electronics testing and validation for medical device applications.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
