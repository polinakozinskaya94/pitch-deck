"use client";

import { useRef, useEffect, useCallback } from "react";
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
