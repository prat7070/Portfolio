// components/Achievements.tsx

export default function Achievements() {
  return (
    <section id="achievements" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Achievements
        </h2>
        <p className="mt-3 text-3xl font-semibold text-gray-100">
          Highlights at a glance.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">

          <div className="rounded-3xl border border-blue-500/25 bg-gradient-to-br from-blue-700/20 to-slate-900/60 p-8 text-center shadow-xl backdrop-blur">
            <div className="text-3xl mb-4">🎮</div>
            <div className="text-3xl font-bold text-blue-400">World Rank 3</div>
            <div className="mt-2 text-sm text-gray-300">Technoxian 9.0 FPV Drone Race 2025</div>
          </div>

          <div className="rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-700/20 to-slate-900/60 p-8 text-center shadow-xl backdrop-blur">
            <div className="text-3xl mb-4">𖥂</div>
            <div className="text-3xl font-bold text-emerald-400">World Rank 5</div>
            <div className="mt-2 text-sm text-gray-300">Technoxian 9.0 Drone Rescue 2025</div>
          </div>

          <div className="rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-700/20 to-slate-900/60 p-8 text-center shadow-xl backdrop-blur">
            <div className="text-3xl mb-4">🏆</div>
            <div className="text-3xl font-bold text-purple-400">Rank 1</div>
            <div className="mt-2 text-sm text-gray-300">Internal SIH 2024</div>
          </div>

          <div className="rounded-3xl border border-sky-500/25 bg-gradient-to-br from-sky-700/20 to-slate-900/60 p-8 text-center shadow-xl backdrop-blur">
            <div className="text-3xl mb-4">✈️</div>
            <div className="text-2xl font-bold text-sky-400">DGCA Certified</div>
            <div className="mt-2 text-sm text-gray-300">Remote Pilot License – Govt. of India</div>
          </div>

          <div className="rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-700/20 to-slate-900/60 p-8 text-center shadow-xl backdrop-blur">
            <div className="text-3xl mb-4">📄</div>
            <div className="text-2xl font-bold text-amber-400">Best Paper</div>
            <div className="mt-2 text-sm text-gray-300">IEEE ICSFT 2026</div>
          </div>

        </div>
      </div>
    </section>
  );
}