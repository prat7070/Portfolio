// components/Projects.tsx

const projects = [
  {
    title: "Autonomous Quadcopter",
    category: "UAV / Autonomy",
    icon: "🛰️",
    description:
      "Autonomous quadcopter built for short-range delivery using CrossFlight FC, waypoint navigation, and a custom low-cost telemetry module, enabling precise autonomous flights with reliable real-time mission data.",
    tech: [
      "CrossFlight FC",
      "Waypoint Navigation",
      "Telemetry Module",
      "Embedded Systems",
      "Mission Control",
    ],
  },
  {
    title: "3-Inch FPV Racing Drone",
    category: "FPV / Drones",
    icon: "⚡",
    description:
      "Lightweight 3-inch FPV drone engineered for indoor and tight-space flying, featuring SpeedyBee Mini FC, refined PID tuning, and optimized power efficiency for stable, agile, and precise maneuvering.",
    tech: ["SpeedyBee Mini FC", "FPV System", "PID Tuning", "Lightweight Frame"],
  },
  {
    title: "5-Inch FPV Racing Drone",
    category: "FPV / Racing",
    icon: "🏁",
    description:
      "High-speed 5-inch FPV racing drone built on SpeedyBee F405 V3, custom-tuned for rapid acceleration, sharp cornering, and stable control, delivering competitive performance in aggressive racing environments.",
    tech: ["SpeedyBee F405 V3 FC", "FPV System", "PID Tuning", "Racing Frame"],
  },
  {
    title: "Quadcopter for Payload Delivery",
    category: "UAV / Payload",
    icon: "📦",
    description:
      "Pixhawk-based quadcopter with optimized tuning, control, and stability, plus a reliable gripping mechanism for efficient and accurate payload delivery missions.",
    tech: ["Pixhawk FC", "Mission Planner", "Gripping Mechanism", "Flight Control"],
  },
  {
    title: "Raspberry Pi Custom OS",
    category: "Embedded Linux",
    icon: "🐧",
    description:
      "Customized Linux-based OS on Raspberry Pi, enabling tailored performance, secure operation, and seamless integration for specialized medical workflows and device-specific healthcare applications.",
    tech: ["Raspberry Pi", "Linux Kernel", "Custom OS", "Device Drivers", "Yocto"],
  },
  {
    title: "Raspberry Pi OTA Updates",
    category: "IoT / OTA",
    icon: "☁️",
    description:
      "Seamless remote OS updates for Raspberry Pi systems using Mender and Balena, enabling reliable OTA deployment, version control, and secure device fleet management.",
    tech: [
      "Raspberry Pi",
      "Linux OS",
      "Mender",
      "Balena",
      "OTA Pipelines",
      "Docker",
      "Device Management",
    ],
  },
  {
    title: "UART Firmware Flashing System",
    category: "Tooling / Firmware",
    icon: "🧰",
    description:
      "Raspberry Pi–based UART flashing system to update STM32F401CCU6 firmware without external programmers, enabling faster development and automated deployment.",
    tech: [
      "Raspberry Pi",
      "STM32F401CCU6",
      "Python",
      "STM32 Bootloader",
      "Embedded Firmware",
    ],
  },
  {
    title: "STM32 Stepper Motor Control",
    category: "Motion Control",
    icon: "⚙️",
    description:
      "STM32-based system to drive a stepper motor with high precision, enabling accurate and consistent actuation for an automated CPR device.",
    tech: [
      "STM32 MCU",
      "Stepper Driver",
      "PWM Control",
      "Timers",
      "Serial Debugging",
    ],
  },
  {
    title: "Medical Sensor Integration System",
    category: "MedTech",
    icon: "🩺",
    description:
      "Interfaced OEM medical sensors like SpO₂ with Raspberry Pi and STM32, enabling real-time patient monitoring and seamless integration into ventilator and defibrillator systems.",
    tech: [
      "Raspberry Pi",
      "STM32 MCU",
      "SpO₂ / Pressure / Flow",
      "ADC Interfaces",
      "Real-Time Processing",
    ],
  },
  {
    title: "WL4400 MODBUS Data Logger",
    category: "Industrial",
    icon: "🏭",
    description:
      "Arduino-based system to extract real-time operational data from the WL4400 using RS485 MODBUS, supporting monitoring, logging, and on-site diagnostics.",
    tech: [
      "Arduino UNO",
      "RS485",
      "MODBUS RTU",
      "Data Logging",
      "Industrial Monitoring",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Projects
        </h2>
        <p className="mt-3 text-3xl font-semibold text-gray-100">
          Things I&apos;ve built.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          A mix of UAV systems, embedded Linux, IoT tooling, and real-world
          electronics work.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/90 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-violet-400/80 hover:shadow-[0_18px_45px_rgba(124,58,237,0.45)]"
            >
              {/* subtle top highlight */}
              <div className="pointer-events-none absolute inset-x-0 -top-24 h-32 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-violet-200">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-gray-100">
                    {project.title}
                  </h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-lg">
                  <span>{project.icon}</span>
                </div>
              </div>

              <p className="relative mt-3 line-clamp-4 text-sm text-gray-300">
                {project.description}
              </p>

              <div className="relative mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
