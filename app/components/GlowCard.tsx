"use client";

import React, { useEffect, useRef, type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function GlowCard({ children, className = "", style }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const el = cardRef.current;
      if (!el) return;
      const { clientX: x, clientY: y } = e;
      el.style.setProperty("--x", x.toFixed(2));
      el.style.setProperty("--xp", (x / window.innerWidth).toFixed(2));
      el.style.setProperty("--y", y.toFixed(2));
      el.style.setProperty("--yp", (y / window.innerHeight).toFixed(2));
    };

    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  return (
    <div
      ref={cardRef}
      data-glow
      className={className}
      style={{
        ...style,
        "--base": 280,
        "--spread": 300,
        "--radius": 16,
        "--border": 1.5,
        "--backdrop": "transparent",
        "--backup-border": "rgba(255,255,255,0.2)",
        "--size": 250,
        "--outer": 1,
        "--border-size": "calc(var(--border, 1.5) * 1px)",
        "--spotlight-size": "calc(var(--size, 250) * 1px)",
        "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
        backgroundImage: `radial-gradient(
          var(--spotlight-size) var(--spotlight-size) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(var(--hue, 280) 100% 70% / 0.1), transparent
        )`,
        backgroundSize:
          "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
        backgroundPosition: "50% 50%",
        backgroundAttachment: "fixed",
        border: "var(--border-size) solid var(--backup-border)",
        touchAction: "none",
      } as React.CSSProperties}
    >
      <div data-glow className="glow-outer" />
      {children}
    </div>
  );
}
