"use client";

import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Section from "@/Common/Section";
import {
  animateHeaderIntro,
  attachButtonHoverGlow,
  animateDrawerOpen,
  animateDrawerClose,
} from "@/Common/gsap/headerAnimations";

export default function Header() {
  const headerRef = React.useRef<HTMLDivElement | null>(null);
  const logoRef = React.useRef<HTMLDivElement | null>(null);
  const buttonsContainerRef = React.useRef<HTMLDivElement | null>(null);
  const mobileDrawerRef = React.useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const desktopHoverCleanupRef = React.useRef<null | (() => void)>(null);
  const drawerHoverCleanupRef = React.useRef<null | (() => void)>(null);

  React.useEffect(() => {
    animateHeaderIntro({
      headerEl: headerRef.current as HTMLElement | null,
      logoEl: logoRef.current as HTMLElement | null,
      buttonsContainerEl: buttonsContainerRef.current as HTMLElement | null,
    });

    if (buttonsContainerRef.current) {
      desktopHoverCleanupRef.current = attachButtonHoverGlow(buttonsContainerRef.current);
    }

    return () => {
      desktopHoverCleanupRef.current?.();
    };
  }, []);

  const openDrawer = React.useCallback(() => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      animateDrawerOpen(mobileDrawerRef.current as HTMLElement | null);
      drawerHoverCleanupRef.current = attachButtonHoverGlow(mobileDrawerRef.current);
    });
  }, []);

  const closeDrawer = React.useCallback(() => {
    animateDrawerClose(mobileDrawerRef.current, () => setIsOpen(false));
    drawerHoverCleanupRef.current?.();
  }, []);

  return (
    <header className="absolute top-0 z-40 w-full">
      <Section maxWidth="lg" py={0}>
        <div
          ref={headerRef}
          className="mt-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
        >
        <div className="flex items-center justify-between">
          <div ref={logoRef} className="select-none">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/90">
              <span className="text-sm font-semibold tracking-wider">SMS</span>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex" ref={buttonsContainerRef}>
            <Button
            // sx={{textTransform:"none"}}
              variant="contained"
              color="inherit"
              className="!rounded-xl !bg-white/10 !px-4 !py-2 !text-white hover:!bg-white/10 !normal-case"
            >
              What we Are?
            </Button>
            <Button
              variant="contained"
              color="inherit"
              className="!rounded-xl !bg-white/10 !px-4 !py-2 !text-white hover:!bg-white/20 !normal-case"
            >
              Reach Us Now!
            </Button>
          </div>

          <div className="md:hidden">
            <IconButton
              aria-label="open menu"
              onClick={openDrawer}
              className="!text-white/90"
              size="large"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        </div>
      </Section>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={closeDrawer}>
          <div
            ref={mobileDrawerRef}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto mt-4 w-[92%] max-w-md rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/90">
                <span className="text-sm font-semibold tracking-wider">SMSS</span>
              </div>
              <IconButton aria-label="close menu" onClick={closeDrawer} className="!text-white/90">
                <CloseIcon />
              </IconButton>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <Button
                fullWidth
                variant="contained"
                color="inherit"
                className="!rounded-xl !bg-white/10 !px-4 !py-3 !text-white hover:!bg-white/20"
                onClick={closeDrawer}
              >
                About
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="inherit"
                className="!rounded-xl !bg-white/10 !px-4 !py-3 !text-white hover:!bg-white/20"
                onClick={closeDrawer}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


