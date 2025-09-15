"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineSlide from "./TimelineSlide";
import { TimelineJourneyProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineJourney({ steps, className }: TimelineJourneyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = steps.length;
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  slideRefs.current = [];

  const addSlideRef = useCallback((el: HTMLDivElement | null) => {
    if (el && !slideRefs.current.includes(el)) {
      slideRefs.current.push(el);
    }
  }, []);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const stepToY = (idx: number) => containerTop + idx * window.innerHeight;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const next = Math.min(activeIndex + 1, total - 1);
        setActiveIndex(next);
        window.scrollTo({ top: stepToY(next), behavior: "smooth" });
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = Math.max(activeIndex - 1, 0);
        setActiveIndex(prev);
        window.scrollTo({ top: stepToY(prev), behavior: "smooth" });
      }
    },
    [activeIndex, total]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>("[data-tj-slide]");

      // Make all slides overlap in the same viewport
      slides.forEach((s, i) => {
        gsap.set(s, { position: "absolute", inset: 0, zIndex: i === 0 ? 2 : 1, opacity: i === 0 ? 1 : 0 });
      });

      // Master timeline: each slide rises from bottom, previous fades up
      const master = gsap.timeline({ paused: true });
      slides.forEach((slide, i) => {
        const image = slide.querySelector<HTMLElement>("[data-tj-image]");
        const text = slide.querySelector<HTMLElement>("[data-tj-text]");

        // Entrance for current slide
        master.addLabel(`enter-${i}`);
        master.to(slide, { zIndex: 3, duration: 0 }, "<");
        master.fromTo(
          image,
          { y: 80, opacity: 0, scale: 1.02 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "<"
        );
        master.fromTo(
          text,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        );
        master.to(image, { scale: 1.05, duration: 0.6, ease: "power1.out" }, "<0.2");

        // Exit previous slide, if any
        if (i > 0) {
          const prev = slides[i - 1];
          master.to(prev, { y: -40, opacity: 0, duration: 0.5, ease: "power2.inOut" }, "<0.0");
          master.to(prev, { zIndex: 1, duration: 0 }, ">");
          master.set(prev, { clearProps: "y" });
        }

        // Small hold between slides
        master.addPause(">+=0.1");
      });

      const totalScroll = slides.length * window.innerHeight;

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          master.progress(self.progress);
          const index = Math.round(self.progress * (slides.length - 1));
          setActiveIndex(index);
        },
      });
    }, container);

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      ctx.revert();
    };
  }, [onKey]);

  const slides = useMemo(() => steps.map((step, idx) => (
    <div
      key={step.id}
      ref={addSlideRef}
      data-tj-slide
      className="w-full h-[100vh] flex items-center"
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${idx + 1} of ${total}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <TimelineSlide step={step} isActive={activeIndex === idx} />
      </div>
    </div>
  )), [steps, activeIndex, total, addSlideRef]);

  return (
    <div
      ref={containerRef}
      className={"w-full relative h-[100vh] overflow-hidden " + (className ?? "")}
      aria-label="SMS Workflow Timeline"
    >
      <div className="w-full h-full relative">{slides}</div>
    </div>
  );
}


