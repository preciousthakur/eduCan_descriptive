"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Section from "@/Common/Section";

const CommonModule: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 24, scale: 0.98, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        [headingRef.current, textRef.current],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12, delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/school.png)` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <Section maxWidth={"lg"} py={0}>
        <div
          ref={containerRef}
          className="relative z-10 grid h-screen w-full place-items-center p-4"
        >
          <div
            ref={cardRef}
            className="max-w-4xl w-full rounded-2xl border border-white/20 bg-white/10 p-6 md:p-10 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <h1
              ref={headingRef}
              className="text-2xl md:text-4xl font-semibold tracking-tight text-white"
            >
              Common Module (shared features across all roles)
            </h1>
            <p
              ref={textRef}
              className="mt-4 md:mt-6 text-sm md:text-base leading-relaxed text-white/90"
            >
              The Common Module provides a unified set of features accessible to all users—Super Admins, School Admins, Teachers, Students, and Parents. It includes shared tools such as secure login, profile management, notifications, messaging, and document sharing to ensure smooth communication and consistency across the platform. By offering a standardized experience, this module enhances collaboration, streamlines daily interactions, and ensures that every role can easily access essential functions within the system.
            </p>
          </div>
        </div>
      </Section>

      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
    </div>
  );
};

export default CommonModule;


