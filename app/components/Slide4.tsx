"use client";

import Image from "next/image";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import { SlideHeader, SlideFooter } from "./SlideChrome";

export default function Slide4() {
  return (
    <section className="slide" id="slide-4">
      <div
        className="slide-inner relative overflow-hidden font-primary"
        style={{ background: "var(--slide-bg)" }}
      >
        <SlideHeader section="РЫНОК" page="PAGE (N°004)" theme="light" />

        {/* Title */}
        <WordFadeIn
          words="Крипто набирает обороты."
          className="absolute font-bold"
          style={{
            left: 80,
            top: 104,
            fontSize: 80,
            lineHeight: 1.05,
            color: "var(--text-primary)",
            width: 400,
          }}
        />

        {/* Description */}
        <p
          className="absolute"
          style={{
            left: 80,
            top: 754,
            fontSize: 16,
            lineHeight: 1.5,
            color: "var(--text-secondary)",
            width: 400,
          }}
        >
          С 2025 года работает 115-ФЗ
          <br />
          «О цифровых валютах».
        </p>

        {/* Vertical dividers */}
        <div
          className="absolute w-px"
          style={{
            left: 534,
            top: 84,
            height: 964,
            backgroundColor: "#D5D5D0",
          }}
        />
        <div
          className="absolute w-px"
          style={{
            left: 1016,
            top: 84,
            height: 964,
            backgroundColor: "#D5D5D0",
          }}
        />
        <div
          className="absolute w-px"
          style={{
            left: 1434,
            top: 84,
            height: 964,
            backgroundColor: "#D5D5D0",
          }}
        />

        {/* Image */}
        <div
          className="absolute overflow-hidden"
          style={{
            left: 534,
            top: 65,
            width: 1293,
            height: 599,
          }}
        >
          <Image
            src="/image-27.png"
            alt="Market"
            fill
            className="object-cover"
            sizes="1293px"
          />
        </div>

        {/* Column 1 — ОБЪЁМ ТРАНЗАКЦИЙ */}
        <span
          className="absolute font-bold"
          style={{
            left: 566,
            top: 754,
            fontSize: 13,
            letterSpacing: 1,
            color: "var(--text-primary)",
          }}
        >
          ОБЪЁМ ТРАНЗАКЦИЙ
        </span>
        <span
          className="absolute font-bold"
          style={{
            left: 566,
            top: 794,
            fontSize: 36,
            color: "#685edb",
          }}
        >
          $33.4 млрд
        </span>
        <p
          className="absolute"
          style={{
            left: 566,
            top: 844,
            fontSize: 22,
            lineHeight: 1.3,
            color: "var(--text-secondary)",
            width: 380,
          }}
        >
          крипто-транзакций
          <br />
          в России за 2024
        </p>
        <span
          className="absolute"
          style={{
            left: 566,
            top: 964,
            fontSize: 13,
            color: "#5b5b5b",
          }}
        >
          Chainalysis
        </span>

        {/* Column 2 — ВЛАДЕЛЬЦЫ КРИПТО */}
        <span
          className="absolute font-bold"
          style={{
            left: 1040,
            top: 754,
            fontSize: 13,
            letterSpacing: 1,
            color: "var(--text-primary)",
          }}
        >
          ВЛАДЕЛЬЦЫ КРИПТО
        </span>
        <span
          className="absolute font-bold"
          style={{
            left: 1040,
            top: 794,
            fontSize: 36,
            color: "#685edb",
          }}
        >
          12%
        </span>
        <p
          className="absolute"
          style={{
            left: 1040,
            top: 844,
            fontSize: 22,
            lineHeight: 1.3,
            color: "var(--text-secondary)",
            width: 322,
          }}
        >
          взрослых уже
          <br />
          владеют криптовалютой
        </p>
        <span
          className="absolute"
          style={{
            left: 1040,
            top: 964,
            fontSize: 13,
            color: "#5b5b5b",
          }}
        >
          Росстат / ЦБ РФ
        </span>

        {/* Column 3 — РЕГУЛИРОВАНИЕ */}
        <span
          className="absolute font-bold"
          style={{
            left: 1454,
            top: 751,
            fontSize: 13,
            letterSpacing: 1,
            color: "var(--text-primary)",
          }}
        >
          РЕГУЛИРОВАНИЕ
        </span>
        <span
          className="absolute font-bold"
          style={{
            left: 1454,
            top: 794,
            fontSize: 36,
            color: "#685edb",
          }}
        >
          2027
        </span>
        <p
          className="absolute"
          style={{
            left: 1454,
            top: 844,
            fontSize: 22,
            lineHeight: 1.3,
            color: "var(--text-secondary)",
            width: 380,
          }}
        >
          ЦБ переведёт на
          <br />
          регулируемую инфраструктуру
        </p>
        <span
          className="absolute"
          style={{
            left: 1454,
            top: 964,
            fontSize: 13,
            color: "#5b5b5b",
          }}
        >
          РБК / ЦБ РФ
        </span>

        <SlideFooter page="PAGE (N°004)" theme="light" />
      </div>
    </section>
  );
}
