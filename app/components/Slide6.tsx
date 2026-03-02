"use client";

import Image from "next/image";
import { SlideHeader, SlideFooter } from "./SlideChrome";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function Slide6() {
  return (
    <section className="slide" id="slide-6">
      <div
        className="slide-inner relative overflow-hidden" style={{ width: 1920, height: 1080, minWidth: 1920, minHeight: 1080, maxWidth: 1920, maxHeight: 1080, flexShrink: 0, background: "#FFFFFF" }}
      >
        <SlideHeader section="АРХИТЕКТУРА" page="PAGE (N°006)" theme="light" />

        {/* Left column — Title */}
        <WordFadeIn
          words="Модульная архитектура"
          className="font-primary absolute font-bold leading-[1.05] text-[#1A1A1A]"
          style={{ left: 80, top: 100, fontSize: 80, width: 550 }}
        />
        <p
          className="font-primary absolute text-[#999999]"
          style={{ left: 80, top: 332, fontSize: 18 }}
        >
          Подключайте только то, что нужно
        </p>
        <p
          className="font-primary absolute text-[#999999] leading-[1.5]"
          style={{ left: 80, top: 372, fontSize: 16, width: 450 }}
        >
          14 микросервисов — каждый независимый,{"\n"}со своей базой данных и API.
        </p>

        {/* Separator line */}
        <div
          className="absolute bg-[#E0E0E0]"
          style={{ left: 80, top: 432, width: 450, height: 1 }}
        />

        {/* Как работает */}
        <p
          className="font-primary absolute font-semibold text-[#1A1A1A]"
          style={{ left: 80, top: 481, fontSize: 18 }}
        >
          Как работает:
        </p>
        <p
          className="font-primary absolute text-[#151515] leading-[1.7] whitespace-pre-line"
          style={{ left: 80, top: 521, fontSize: 18, width: 681 }}
        >
          {`•  Каждый модуль может работать сам по себе,
   со своими адаптерами

•  Или через наш оркестратор,
   который управляет всем flow

•  Если у вас есть свой оркестратор —
   наш модуль подключается к нему
   Если нет — мы даём готовый`}
        </p>

        {/* Bottom note */}
        <p
          className="font-primary absolute text-[#999999] leading-[1.6] whitespace-pre-line"
          style={{ left: 80, top: 854, fontSize: 16, width: 550 }}
        >
          {`Не ломает существующие системы.
Не нужно выкидывать ABS, ДБО, 1С.
Встраивается через API.`}
        </p>

        {/* Center — architecture diagram image */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 915, top: 188, width: 753, height: 753 }}
        >
          <Image
            src="/image-15.png"
            alt="Architecture diagram"
            fill
            className="object-contain"
          />
        </div>

        {/* CORE KERNEL label — positioned over/inside the diagram area */}
        <div
          className="font-primary absolute flex items-center justify-center font-extrabold leading-[1.05] tracking-[-1px] text-center text-[#685edb] whitespace-pre-line"
          style={{ left: 1111.5, top: 504, width: 350, height: 121, fontSize: 48 }}
        >
          CORE{"\n"}KERNEL
        </div>

        {/* 8 service labels around the circle */}
        <span
          className="font-primary absolute block font-bold text-[#3A3A3A]"
          style={{ left: 1021, top: 183.5, width: 116, fontSize: 24, textAlign: "center" }}
        >
          Exchange
        </span>
        <span
          className="font-primary absolute block font-bold text-[#3A3A3A]"
          style={{ left: 1441, top: 184.5, width: 123, fontSize: 24, textAlign: "center" }}
        >
          Reporting
        </span>
        <span
          className="font-primary absolute block font-bold text-right text-[#3A3A3A]"
          style={{ left: 723, top: 409, width: 192, fontSize: 24 }}
        >
          FX Engine
        </span>
        <span
          className="font-primary absolute block font-bold text-[#3A3A3A]"
          style={{ left: 1672, top: 409, width: 100, fontSize: 24 }}
        >
          Custody
        </span>
        <span
          className="font-primary absolute block font-bold text-right text-[#3A3A3A]"
          style={{ left: 795, top: 710, width: 93, fontSize: 24 }}
        >
          Cards
        </span>
        <span
          className="font-primary absolute block font-bold text-right text-[#3A3A3A]"
          style={{ left: 1672, top: 710, width: 140, fontSize: 24 }}
        >
          Compliance
        </span>
        <span
          className="font-primary absolute block font-bold text-right text-[#3A3A3A]"
          style={{ left: 1021, top: 938, width: 134, fontSize: 24 }}
        >
          Payments
        </span>
        <span
          className="font-primary absolute block font-bold text-center text-[#3A3A3A]"
          style={{ left: 1434, top: 935, width: 69, fontSize: 24 }}
        >
          P2P
        </span>

        <SlideFooter page="PAGE (N°006)" theme="light" />
      </div>
    </section>
  );
}
