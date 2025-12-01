// components/Resume.tsx

const resumes = [
  {
    label: "UAV",
    file: "/Prathmesh Patil UAV Resume.pdf", // 👈 change to your real file name
    icon: "🚀",
    accent:
      "border-blue-400/50 shadow-[0_0_40px_rgba(59,130,246,0.35)] from-blue-500/20",
    pillColor: "bg-blue-600",
  },
  {
    label: "Electronics",
    file: "/Prathmesh Patil Electronics Resume.pdf", // 👈 change to your real file name
    icon: "📄",
    accent:
      "border-emerald-400/50 shadow-[0_0_40px_rgba(16,185,129,0.35)] from-emerald-500/20",
    pillColor: "bg-emerald-600",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90 border border-cyan-500/20 p-8 md:p-10">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-semibold">
              <span>📄</span>
              <span>Download My Resume</span>
            </div>
            <p className="mt-3 text-sm text-gray-300">
              Choose the version that matches what you&apos;re looking for.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {resumes.map((resume) => (
              <a
                key={resume.label}
                href={resume.file}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`flex flex-col items-center justify-center rounded-3xl border bg-gradient-to-br ${resume.accent} to-slate-900/80 p-8 text-center backdrop-blur-xl hover:translate-y-1 hover:shadow-[0_0_55px_rgba(59,130,246,0.5)] transition`}
              >
                <div className="text-4xl mb-4">{resume.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {resume.label}
                </h3>

                {/* PDF pill */}
                <div className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium text-white bg-opacity-90">
                  <span className={`inline-flex items-center gap-2 ${resume.pillColor} rounded-full px-4 py-1`}>
                    <span>📥</span>
                    <span>PDF</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-amber-300">
            💡 Click any card to download instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
