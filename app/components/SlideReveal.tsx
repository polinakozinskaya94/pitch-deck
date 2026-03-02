"use client";

import { useRef, useEffect, useState, type RefObject } from "react";

interface SlideRevealProps {
  children: React.ReactNode;
  root: RefObject<HTMLElement | null>;
}

export default function SlideReveal({ children, root }: SlideRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const rootEl = root.current;
    if (!el || !rootEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root: rootEl, threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [root]);

  return (
    <div ref={ref} className="slide-reveal" data-in-view={inView || undefined}>
      {children}
    </div>
  );
}
