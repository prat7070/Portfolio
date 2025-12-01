// components/Contact.tsx

import { Mail, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">

        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Contact
        </h2>

        <p className="mt-3 text-3xl font-semibold text-gray-100">
          Let’s Connect.
        </p>

        {/* GRID CARD LAYOUT */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* EMAIL */}
          <a
            href="mailto:your-email@gmail.com"
            className="rounded-3xl bg-gradient-to-br from-purple-700/30 to-blue-900/20 p-8 shadow-lg backdrop-blur-xl border border-white/10 hover:scale-[1.03] transition"
          >
            <div className="flex flex-col items-center text-center text-white">
              <Mail size={34} className="text-cyan-300 mb-4" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="mt-2 text-gray-300 text-sm">psppsp2704@gmail.com</p>
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/prathmesh-patil-7a093a2a1"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-gradient-to-br from-purple-700/30 to-blue-900/20 p-8 shadow-lg backdrop-blur-xl border border-white/10 hover:scale-[1.03] transition"
          >
            <div className="flex flex-col items-center text-center text-white">
              <Linkedin size={34} className="text-cyan-300 mb-4" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <p className="mt-2 text-gray-300 text-sm">Connect with me</p>
            </div>
          </a>

          {/* LOCATION */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Pune,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-gradient-to-br from-purple-700/30 to-blue-900/20 p-8 shadow-lg backdrop-blur-xl border border-white/10 hover:scale-[1.03] transition"
          >
            <div className="flex flex-col items-center text-center text-white">
              <MapPin size={34} className="text-cyan-300 mb-4" />
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="mt-2 text-gray-300 text-sm">Pune, India</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
