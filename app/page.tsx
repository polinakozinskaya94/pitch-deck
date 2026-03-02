"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Slide7 from "./components/Slide7";
import Slide8 from "./components/Slide8";
import Slide9 from "./components/Slide9";
import Slide10 from "./components/Slide10";
import Slide11 from "./components/Slide11";
import Slide12 from "./components/Slide12";
import Slide13 from "./components/Slide13";
import Slide14 from "./components/Slide14";
import SlideReveal from "./components/SlideReveal";

const TOTAL_SLIDES = 14;

export default function Page() {
  const containerRef = useRef<HTMLElement>(null);
  const currentSlide = useRef(0);
  const isScrolling = useRef(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_PASSWORD) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const goTo = useCallback((index: number) => {
    const el = containerRef.current;
    if (!el || isScrolling.current) return;
    const clamped = Math.max(0, Math.min(index, TOTAL_SLIDES - 1));
    if (clamped === currentSlide.current) return;

    isScrolling.current = true;
    currentSlide.current = clamped;
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });

    setTimeout(() => { isScrolling.current = false; }, 700);
  }, []);

  const next = useCallback(() => goTo(currentSlide.current + 1), [goTo]);
  const prev = useCallback(() => goTo(currentSlide.current - 1), [goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta > 0) next();
      else if (delta < 0) prev();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScrollEnd = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      currentSlide.current = idx;
    };

    el.addEventListener("scrollend", onScrollEnd);
    return () => el.removeEventListener("scrollend", onScrollEnd);
  }, []);

  useEffect(() => {
    const updateScale = () => {
      // Small adjustment to force Next.js fast refresh
      const availableWidth = window.innerWidth * 0.95;
      const availableHeight = window.innerHeight * 0.95;
      const scale = Math.min(availableWidth / 1920, availableHeight / 1080);
      document.documentElement.style.setProperty('--slide-scale', scale.toString());
    };
    
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--slide-bg)] font-primary">
        <div className="w-[400px] bg-white p-10 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <h2 className="mb-8 text-center text-[20px] font-bold tracking-[2px] text-[var(--text-primary)]">BITBANKER PITCH DECK</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-none bg-[#F2F2F0] p-4 text-[16px] text-[#1A1A1A] outline-none"
              placeholder="Enter password"
            />
            {error && <span className="text-[14px] text-red-500">Incorrect password</span>}
            <button
              type="submit"
              className="bg-[var(--right-panel)] p-4 text-[16px] font-medium tracking-[1px] text-white transition-colors hover:bg-[#7245ed]"
            >
              ACCESS
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <main className="slides-container" ref={containerRef}>
      <SlideReveal root={containerRef}><Slide1 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide2 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide3 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide4 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide5 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide6 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide7 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide8 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide9 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide10 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide11 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide12 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide13 /></SlideReveal>
      <SlideReveal root={containerRef}><Slide14 /></SlideReveal>
    </main>
  );
}
