// components/Projects.tsx

const projects = [
  {
    title: "Autonomous Quadcopter",
    description: "Autonomous quadcopter built for short-range delivery using CrossFlight FC, waypoint navigation, and a custom low-cost telemetry module, enabling precise autonomous flights with reliable real-time mission data.",
    tech: ["CrossFlight FC", "Waypoint Navigation", "Telemetry Module", "Embedded Systems", "Mission Control"],
  },
  {
    title: "3-Inch FPV Racing Drone",
    description: "Lightweight 3-inch FPV drone engineered for indoor and tight-space flying, featuring SpeedyBee Mini FC, refined PID tuning, and optimized power efficiency for stable, agile, and precise maneuvering.",
    tech: ["SpeedyBee Mini FC", "FPV System", "PID Tuning", "Lightweight Frame"],
  },
  {
    title: "5-Inch FPV Racing Drone",
    description: "High-speed 5-inch FPV racing drone built on SpeedyBee F405 V3, custom-tuned for rapid acceleration, sharp cornering, and stable control, delivering competitive performance in aggressive racing environments.",
    tech: ["SpeedyBee F405 V3 FC", "FPV System", "PID Tuning", "Racing Frame"],
  },
  {
    title: "Quadcopter for Payload Delivery",
    description: "Built and configured a Pixhawk-based quadcopter, optimizing tuning, control, and stability, and integrating a reliable gripping mechanism for efficient and accurate payload delivery missions.",
    tech: ["Pixhawk FC", "Mission Planner", "Optimized Gripping Mechanism", "Accurate Control"],
  },
  {
    title: "Raspberry Pi Custom OS",
    description: "Developed a customized Linux-based OS on Raspberry Pi, enabling tailored performance, secure operation, and seamless integration for specialized medical workflows and device-specific healthcare applications.",
    tech: ["Raspberry Pi", "Linux Kernel", "Custom OS Build", "Device Drivers", "Yocto"],
  },
  {
    title: "Raspberry Pi OTA Updates",
    description: "Implemented seamless remote OS updates for Raspberry Pi systems using Mender and Balena, enabling reliable OTA deployment, version control, and secure device fleet management.",
    tech: ["Raspberry Pi", "Linux OS", "Mender", "Balena", "OTA Update Pipelines", "Docker", "Device Management","Deployment Automation" ],
  },
  {
    title: "UART Firmware Flashing System",
    description: "Designed a Raspberry Pi–based UART flashing system to update STM32F401CCU6 firmware without external programmers, enabling faster development, automated deployment, and efficient embedded workflow integration.",
    tech: ["Raspberry Pi", "STM32F401CCU6", "Python Scripts", "STM32 Bootloader", "Embedded Firmware"],
  },
  {
    title: "STM32 Stepper Motor Control",
    description: "Programmed an STM32-based control system to drive a stepper motor with high precision, enabling accurate and consistent actuation required for an automated CPR device’s mechanical operation.",
    tech: ["STM32 MCU", "Stepper Motor Driver", "PWM Control", "Timer Configuration", "Serial Debugging"],
  },
  {
    title: "Medical Sensor Integration System",
    description: "Interfaced OEM medical sensors like SpO₂ with Raspberry Pi and STM32, enabling real-time patient monitoring, reliable signal acquisition, and seamless integration into ventilator and defibrillator systems.",
    tech: ["Raspberry Pi", "STM32 MCU", "OEM Medical Sensors (SpO₂, Pressure, Flow)", "ADC Interfaces", "Real-Time Data Processing"],
  },
  {
    title: "WL4400 MODBUS Data Logger",
    description: "Developed an Arduino-based system to extract real-time operational data from the WL4400 using RS485 MODBUS, enabling reliable monitoring, logging, and on-site industrial diagnostics.",
    tech: ["Arduino UNO", "RS485 Transceiver", "MODBUS RTU", "Data Logging", "Industrial Monitoring"],
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
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-violet-400 hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-gray-100">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-2 py-1 text-xs text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-4 inline-block text-sm text-violet-300 hover:text-violet-200"
                >
                  View Project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
