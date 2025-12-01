// components/Skills.tsx

const skills = [
  "IoT & Embedded Systems",
  "Drone Building & Piloting",
  "Embedded Linux",
  "Core Electronics",
  "PCB Design & Manufacturing",
  "OTA Development",
  "Mission Planner",
  "Flight Controllers",
  "Microcontrollers",
  "Autonomous Navigation",
  "Betaflight",
  "Biomedical Electronics",
  "Raspberry Pi",
  "KiCAD",
  "STM32Cube IDE"

];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Skills
        </h2>
        <p className="mt-3 text-3xl font-semibold text-gray-100">
          Tools & technologies I use.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-xl text-gray-100 backdrop-blur hover:border-violet-400 hover:bg-white/10"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
