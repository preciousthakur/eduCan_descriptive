"use client";

import gsap from "gsap";

export function animateHeaderIntro(options: {
  headerEl?: HTMLElement | null;
  logoEl?: HTMLElement | null;
  buttonsContainerEl?: HTMLElement | null;
}) {
  const { headerEl, logoEl, buttonsContainerEl } = options;

  if (headerEl) {
    gsap.fromTo(
      headerEl,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }

  if (logoEl) {
    gsap.fromTo(
      logoEl,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)", delay: 0.1 }
    );
  }

  if (buttonsContainerEl) {
    const buttons = buttonsContainerEl.querySelectorAll("button");
    gsap.fromTo(
      buttons,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out", delay: 0.2 }
    );
  }
}

export function attachButtonHoverGlow(container?: HTMLElement | null) {
  if (!container) return () => {};
  const buttons = Array.from(container.querySelectorAll("button"));

  const onEnter = (btn: Element) => {
    gsap.to(btn, {
      boxShadow: "0 0 24px rgba(255,255,255,0.35)",
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const onLeave = (btn: Element) => {
    gsap.to(btn, { boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.25, ease: "power2.inOut" });
  };

  const enterListeners: Array<() => void> = [];
  const leaveListeners: Array<() => void> = [];

  buttons.forEach((btn) => {
    const enter = () => onEnter(btn);
    const leave = () => onLeave(btn);
    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);
    enterListeners.push(() => btn.removeEventListener("mouseenter", enter));
    leaveListeners.push(() => btn.removeEventListener("mouseleave", leave));
  });

  return () => {
    enterListeners.forEach((off) => off());
    leaveListeners.forEach((off) => off());
  };
}

export function animateDrawerOpen(drawerEl?: HTMLElement | null) {
  if (!drawerEl) return;
  gsap.fromTo(drawerEl, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
}

export function animateDrawerClose(
  drawerEl: HTMLElement | null | undefined,
  onComplete?: () => void
) {
  if (!drawerEl) {
    onComplete?.();
    return;
  }
  gsap.to(drawerEl, { y: -16, opacity: 0, duration: 0.25, ease: "power2.in", onComplete });
}


