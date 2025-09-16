"use client";

import React from "react";
import gsap from "gsap";
import Section from "@/Common/Section";

export default function Banner() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    gsap.set(containerRef.current, { opacity: 0, y: 16 });
    gsap.set(textRef.current, { opacity: 0, y: 12, scale: 0.98 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(containerRef.current, { opacity: 1, y: 0, duration: 0.8 })
      .to(
        textRef.current,
        { opacity: 1, y: 0, scale: 1, duration: 0.9 },
        "<+0.1"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/school.png)` }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <Section maxWidth={"lg"} py={0}>
        <div
          ref={containerRef}
          className="relative z-10 flex h-screen w-full items-center justify-center"
        >
          <div ref={textRef} className="px-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Your School, One-Stop Solution
            </h1>
          </div>
        </div>
      </Section>
    </div>
  );
}


