"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How soon will you respond?",
    a: "We typically reply within one business day. Support SLAs apply for customers.",
  },
  {
    q: "Do you offer on-site demos?",
    a: "Yes, for qualified schools we can arrange on-site or virtual demos.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We follow privacy-first design with role-based access and encryption.",
  },
  {
    q: "Can I migrate from my current system?",
    a: "Our team assists with data import, setup, and training for smooth onboarding.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_380px_at_50%_20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
          <p className="mt-3 text-white/70">Answers to common questions.</p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-white/5"
                >
                  <span className="font-medium">{f.q}</span>
                  <span className="text-white/60">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? <div className="px-5 pb-5 text-white/70">{f.a}</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


