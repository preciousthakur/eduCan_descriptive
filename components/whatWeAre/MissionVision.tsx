"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MissionVision() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mv-item",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12 }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_350px_at_20%_50%,rgba(147,197,253,0.12),transparent),radial-gradient(600px_300px_at_80%_30%,rgba(196,181,253,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="mv-item rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-white/70">
              To unify the school ecosystem with intuitive tools that reduce admin work, amplify teaching effectiveness, and create delightful digital experiences for families.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/75">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Streamline operations with automation</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" /> Elevate learning outcomes through data</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" /> Foster transparent communication</li>
            </ul>
          </div>
          <div className="mv-item rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-white/70">
              A future where every school—regardless of size—operates with world-class technology that is secure, simple, and student-first.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/75">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" /> Universal access to quality tools</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" /> Inclusive digital learning environments</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Continuous innovation and openness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


