"use client";

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
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              We would love to hear from you
            </div>
            <h1 className="hero-fade mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Reach Us Now
            </h1>
            <p className="hero-fade mt-4 max-w-prose text-base text-white/70 sm:text-lg">
              Whether you need a product demo, support, or have a partnership idea, our team is here to help.
            </p>
            <div className="hero-fade mt-8 flex flex-wrap gap-3">
              <Button variant="contained" color="primary" sx={{ textTransform: "none", borderRadius: 9999 }} href="#contact">
                Contact Form
              </Button>
              <Button variant="outlined" color="inherit" sx={{ textTransform: "none", borderRadius: 9999, borderColor: "rgba(255,255,255,0.2)" }} href="#info">
                Contact Info
              </Button>
            </div>
          </div>
          <div className="hero-fade relative order-first h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur lg:order-none lg:h-[420px]">
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-2xl bg-gradient-to-tr from-cyan-400/30 via-emerald-400/20 to-violet-400/30 p-10 text-center text-white">
                <div className="text-5xl font-black">👋</div>
                <div className="mt-2 text-sm text-white/80">Say Hello</div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}


