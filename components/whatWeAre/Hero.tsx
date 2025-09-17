"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_80%_40%,rgba(139,92,246,0.2),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex hero-fade items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Empowering Schools with Unified Technology
            </div>
            <h1 className="hero-fade mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              What We Are
            </h1>
            <p className="hero-fade mt-4 max-w-prose text-base text-white/70 sm:text-lg">
              We are a modern school platform engineered to streamline administration, enrich teaching, and delight parents and students with a seamless digital experience.
            </p>
            <div className="hero-fade mt-8 flex flex-wrap gap-3">
              <Button variant="contained" color="primary" sx={{ textTransform: "none", borderRadius: 9999 }}>
                Explore Modules
              </Button>
              <Button variant="outlined" color="inherit" sx={{ textTransform: "none", borderRadius: 9999, borderColor: "rgba(255,255,255,0.2)" }}>
                Our Story
              </Button>
            </div>
            <div className="hero-fade mt-8 flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Trusted by forward-thinking schools
              </div>
            </div>
          </div>
          <div className="hero-fade relative order-first h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur lg:order-none lg:h-[420px]">
            <Image
              src="/school-hero.jpg"
              alt="School platform preview"
              fill
              priority
              className="object-cover object-center opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}


