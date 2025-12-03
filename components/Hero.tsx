// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center pt-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-4 sm:px-6 md:px-0 md:flex-row md:items-center">
        {/* LEFT: TEXT */}
        <div className="flex-1 space-y-6">
          <p className="text-xl uppercase tracking-[0.3em] text-violet-400">
            Electronics & UAV Engineer
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Prathmesh Patil.
            </span>
          </h1>

          <p className="max-w-2xl text-sm text-gray-300 sm:text-base">
            I engineer high performance drones and smart electronics.
          </p>
        </div>

        {/* RIGHT: CARD */}
        <div className="mt-10 flex-1 md:mt-0 md:ml-auto md:flex md:justify-end ml-4">
          <div className="relative mx-auto h-80 w-80 max-w-xs rounded-3xl border border-violet-500/20 bg-gradient-to-tr from-violet-500/10 via-slate-900 to-emerald-500/10 p-[1px] shadow-xl">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-black">
              <Image
                src="/profile2.JPG"
                alt="Prathmesh Patil"
                width={240}
                height={240}
                className="mb-4 h-60 w-60 rounded-full object-cover"
              />

              <p className="text-sm font-medium text-gray-100">
                Prathmesh Patil
              </p>
              <p className="text-xs text-gray-400">Electronics & UAV Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
