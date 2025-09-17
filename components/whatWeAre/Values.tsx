"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { School, Security, Speed, Groups } from "@mui/icons-material";

type ValueItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

const values: ValueItem[] = [
  {
    title: "Student-Centered",
    description: "Every feature is designed to enhance student learning and well-being.",
    icon: <School className="text-cyan-300" />,
  },
  {
    title: "Secure by Design",
    description: "Privacy-first architecture with robust safeguards and role-based access.",
    icon: <Security className="text-emerald-300" />,
  },
  {
    title: "Performance",
    description: "Fast, responsive, and reliable experiences across devices and networks.",
    icon: <Speed className="text-violet-300" />,
  },
  {
    title: "Collaboration",
    description: "Built to bring admins, teachers, parents, and students together.",
    icon: <Groups className="text-amber-300" />,
  },
];

export default function Values() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".value-card",
        { opacity: 0, y: 24, rotateX: -6 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_10%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_90%_60%,rgba(16,185,129,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
          <p className="mt-3 text-white/70">
            Principles that guide how we build, ship, and support our platform.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="value-card relative h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-transform hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                {v.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-white/70">{v.description}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


