"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { TimelineStep } from "./types";

interface TimelineSlideProps {
  step: TimelineStep;
  isActive: boolean;
}

export default function TimelineSlide({ step, isActive }: TimelineSlideProps) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const imageEl = imageRef.current;
    const textEl = textRef.current;

    if (!imageEl || !textEl) return;

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      imageEl,
      { y: 80, opacity: 0, scale: 1.02 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    ).fromTo(
      textEl,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.35"
    ).to(imageEl, { scale: 1.05, duration: 0.6, ease: "power1.out" }, 0.2);

    if (isActive) {
      tl.play();
    } else {
      tl.reverse(0);
    }

    return () => {
      tl.kill();
    };
  }, [isActive]);

  return (
    <section
      aria-label={`Step ${step.stepNumber}: ${step.title}`}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
    >
      <div ref={imageRef} className="relative w-full aspect-[8/5] overflow-hidden rounded-xl bg-neutral-900">
        <Image
          src={step.imageUrl}
          alt={step.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={step.stepNumber === 1}
        />
      </div>

      <div ref={textRef} className="w-full">
        <div className="text-sm uppercase tracking-wide text-neutral-400 mb-1">Step {step.stepNumber}</div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-3">{step.title}</h3>
        <p className="text-neutral-300 mb-4">{step.description}</p>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-full text-xs bg-neutral-800/70 border border-neutral-700">Role: {step.role}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {step.capabilities.map((cap) => (
            <span
              key={cap.id}
              className="px-2.5 py-1 rounded-full text-xs bg-neutral-800/60 border border-neutral-700"
            >
              {cap.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


