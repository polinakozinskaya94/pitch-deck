"use client";
import { SlideHeader, SlideFooter } from "./SlideChrome";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function Slide13() {
  return (
    <section className="slide" id="slide-13">
      <div
        className="slide-inner relative overflow-hidden font-primary"
        style={{ background: "#F2F2F0", width: 1920, height: 1080 }}
      >
        <SlideHeader section="ПЛАТФОРМА" page="PAGE (N°013)" theme="light" />

        {/* Left column — Title */}
        <WordFadeIn
          words="Работающий продукт"
          className="absolute font-bold leading-[1.1]"
          style={{
            left: 80,
            top: 135,
            fontSize: 80,
            width: 750,
            color: "#1A1A1A",
          }}
        />

        {/* Left column — Subtitle */}
        <p
          className="absolute leading-[1.5] whitespace-pre-line"
          style={{
            left: 80,
            top: 809,
            fontSize: 24,
            width: 500,
            color: "#999999",
          }}
        >
          {`Модульная архитектура позволяет
запускать продукты под ключ
за недели, а не месяцы.`}
        </p>

        {/* Vertical divider */}
        <div
          className="absolute"
          style={{
            left: 880,
            top: 90,
            width: 1,
            height: 900,
            background: "#D5D5D0",
          }}
        />

        {/* Right column — KPI Row 1 */}
        <span
          className="absolute font-bold"
          style={{
            left: 940,
            top: 184,
            fontSize: 14,
            letterSpacing: 2,
            color: "#999999",
          }}
        >
          ПОЛЬЗОВАТЕЛЕЙ
        </span>
        <span
          className="absolute font-bold"
          style={{
            left: 940,
            top: 209,
            fontSize: 72,
            color: "#7245ed",
          }}
        >
          100K+
        </span>
        <div
          className="absolute"
          style={{
            left: 940,
            top: 304,
            width: 860,
            height: 1,
            background: "#D5D5D0",
          }}
        />

        {/* KPI Row 2 */}
        <span
          className="absolute font-bold"
          style={{
            left: 940,
            top: 334,
            fontSize: 14,
            letterSpacing: 2,
            color: "#999999",
          }}
        >
          ОБОРОТ 2025
        </span>
        <span
          className="absolute font-bold"
          style={{
            left: 940,
            top: 359,
            fontSize: 72,
            color: "#7245ed",
          }}
        >
          80 млрд ₽
        </span>
        <div
          className="absolute"
          style={{
            left: 940,
            top: 454,
            width: 860,
            height: 1,
            background: "#D5D5D0",
          }}
        />

        {/* KPI Row 3 */}
        <span
          className="absolute font-bold"
          style={{
            left: 940,
            top: 484,
            fontSize: 14,
            letterSpacing: 2,
            color: "#999999",
          }}
        >
          WHITE-LABEL КЛИЕНТОВ
        </span>
        <span
          className="absolute font-bold"
          style={{
            left: 940,
            top: 509,
            fontSize: 72,
            color: "#7245ed",
          }}
        >
          40+
        </span>
        <div
          className="absolute"
          style={{
            left: 940,
            top: 604,
            width: 860,
            height: 1,
            background: "#D5D5D0",
          }}
        />

        {/* KPI Row 4 */}
        <span
          className="absolute font-bold"
          style={{
            left: 940,
            top: 634,
            fontSize: 14,
            letterSpacing: 2,
            color: "#999999",
          }}
        >
          UPTIME
        </span>
        <span
          className="absolute font-bold"
          style={{
            left: 940,
            top: 659,
            fontSize: 72,
            color: "#7245ed",
          }}
        >
          24/7
        </span>
        <div
          className="absolute"
          style={{
            left: 940,
            top: 754,
            width: 860,
            height: 1,
            background: "#D5D5D0",
          }}
        />

        {/* KPI Row 5 */}
        <span
          className="absolute font-bold"
          style={{
            left: 940,
            top: 784,
            fontSize: 14,
            letterSpacing: 2,
            color: "#999999",
          }}
        >
          ЮРИСДИКЦИИ
        </span>
        <span
          className="absolute font-bold"
          style={{
            left: 940,
            top: 809,
            fontSize: 72,
            color: "#7245ed",
          }}
        >
          3 страны
        </span>

        {/* 5 dots */}
        {[242, 392, 542, 692, 842].map((y) => (
          <div
            key={y}
            className="absolute rounded-full"
            style={{
              left: 1760,
              top: y,
              width: 12,
              height: 12,
              background: "#27272a",
            }}
          />
        ))}

        <SlideFooter page="PAGE (N°013)" theme="light" />
      </div>
    </section>
  );
}
