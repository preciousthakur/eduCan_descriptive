"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

type Stat = { label: string; value: number; suffix?: string };

const baseStats: Stat[] = [
  { label: "Schools Onboarded", value: 120, suffix: "+" },
  { label: "Active Users", value: 48000, suffix: "+" },
  { label: "Avg. Uptime", value: 99.9, suffix: "%" },
  { label: "Features Delivered", value: 250, suffix: "+" },
];

function useCountTo(target: number, durationMs = 1600) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current || startedRef.current) return;
    startedRef.current = true;
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration: durationMs / 1000,
      ease: "power2.out",
      onUpdate: () => setCount(obj.val),
    });
    return () => tween.kill();
  }, [target, durationMs]);

  return { ref, count };
}

export default function Stats() {
  const stats = useMemo(() => baseStats, []);
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(251,191,36,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => {
            const { ref, count } = useCountTo(s.value);
            const pretty = s.value % 1 === 0 ? Math.round(count).toLocaleString() : count.toFixed(1);
            return (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
                <div className="text-3xl font-bold tracking-tight">
                  <span ref={ref}>{pretty}</span>
                  {s.suffix ? <span className="text-white/70">{s.suffix}</span> : null}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


