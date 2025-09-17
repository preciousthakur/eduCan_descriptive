"use client";

import { Email, Phone, SupportAgent, CalendarMonth } from "@mui/icons-material";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const cards = [
  {
    title: "Sales & Demo",
    description: "Schedule a walkthrough of our platform for your school.",
    icon: <CalendarMonth className="text-cyan-300" />,
    cta: { label: "Book a demo", href: "#contact" },
  },
  {
    title: "Support",
    description: "Existing customer? Our team is ready to help.",
    icon: <SupportAgent className="text-emerald-300" />,
    cta: { label: "Get support", href: "#contact" },
  },
  {
    title: "Email",
    description: "Prefer writing? We respond within one business day.",
    icon: <Email className="text-violet-300" />,
    cta: { label: "hello@school.io", href: "mailto:hello@school.io" },
  },
  {
    title: "Phone",
    description: "Talk to us Mon–Fri, 9am–6pm IST.",
    icon: <Phone className="text-amber-300" />,
    cta: { label: "+91 98765 43210", href: "tel:+919876543210" },
  },
];

export default function ContactCards() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 24, rotateX: -6 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.6, ease: "power3.out", stagger: 0.08 }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="info" ref={ref} className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_10%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_90%_60%,rgba(16,185,129,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Talk to our team</h2>
          <p className="mt-3 text-white/70">Choose the best way to reach us.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <a key={c.title} href={c.cta.href} className="contact-card group relative block h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-transform hover:-translate-y-1 hover:bg-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                {c.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-white/70">{c.description}</p>
              <div className="mt-4 text-sm text-cyan-300">{c.cta.label} →</div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


