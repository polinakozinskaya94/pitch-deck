"use client";

import Image from "next/image";
import { SlideHeader, SlideFooter } from "./SlideChrome";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function Slide9() {
  return (
    <section className="slide" id="slide-9">
      <div
        className="slide-inner font-primary relative overflow-hidden mesh-slide9"
        style={{ width: 1920, height: 1080 }}
      >
        <SlideHeader section="12 / BB.PRO" page="PAGE (N°009)" theme="dark" />

        {/* Title */}
        <WordFadeIn
          words="B2B"
          className="absolute font-bold leading-[1.05] text-white"
          style={{ left: 80, top: 129, fontSize: 80, letterSpacing: -0.5 }}
        />
        <p
          className="absolute leading-[1.5] whitespace-pre-line"
          style={{
            left: 80,
            top: 236,
            fontSize: 20,
            color: "rgba(255,255,255,0.8)",
            width: 600,
          }}
        >
          {`Для экспортёров, ВЭД-клиентов, инвестфондов,
Private Banking`}
        </p>

        {/* Column 1 — РАСЧЁТЫ */}
        <div
          className="absolute flex flex-col backdrop-blur-[20px] bg-white/[0.13] border border-white/20 rounded-[16px]"
          style={{ left: 80, top: 342, width: 540, height: 637, padding: 36, gap: 20 }}
        >
          <GlowingEffect spread={40} glow proximity={200} inactiveZone={0.01} borderWidth={3} disabled={false} />
          <div className="relative shrink-0" style={{ width: 214, height: 214 }}>
            <Image
              src="/image-17.png"
              alt="Расчёты"
              width={214}
              height={214}
              className="object-cover rounded-xl"
            />
          </div>
          <span
            className="font-bold tracking-[3px] text-white"
            style={{ fontSize: 24 }}
          >
            РАСЧЁТЫ
          </span>
          <span
            className=""
            style={{ fontSize: 20, color: "rgba(255,255,255,0.8)" }}
          >
            ВЭД / Trade
          </span>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`Трансграничные платежи
через стейблкоин (VARA, ОАЭ)`}
          </p>
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`OTC-деск для крупных сделок
с агрегацией ликвидности`}
          </p>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4] whitespace-pre-line"
            style={{ fontSize: 18, color: "rgba(255,255,255,0.73)" }}
          >
            {`0.5–1% on-ramp
0.3–0.5% off-ramp`}
          </p>
        </div>

        {/* Column 2 — ХРАНЕНИЕ */}
        <div
          className="absolute flex flex-col backdrop-blur-[20px] bg-white/[0.13] border border-white/20 rounded-[16px]"
          style={{ left: 650, top: 342, width: 540, height: 637, padding: 36, gap: 20 }}
        >
          <GlowingEffect spread={40} glow proximity={200} inactiveZone={0.01} borderWidth={3} disabled={false} />
          <div className="relative shrink-0" style={{ width: 214, height: 214 }}>
            <Image
              src="/image-18.png"
              alt="Хранение"
              width={214}
              height={214}
              className="object-cover rounded-xl"
            />
          </div>
          <span
            className="font-bold tracking-[3px] text-white"
            style={{ fontSize: 24 }}
          >
            ХРАНЕНИЕ
          </span>
          <span
            className=""
            style={{ fontSize: 20, color: "rgba(255,255,255,0.8)" }}
          >
            Custody
          </span>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`Multi-sig, cold storage,
автоматический хеджинг`}
          </p>
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`Мульти-валютные счета:
фиат + крипто в одном кабинете`}
          </p>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4] whitespace-pre-line"
            style={{ fontSize: 18, color: "rgba(255,255,255,0.73)" }}
          >
            Custody fee
            {"\n"}FX spread
          </p>
        </div>

        {/* Column 3 — ДОХОДНОСТЬ */}
        <div
          className="absolute flex flex-col backdrop-blur-[20px] bg-white/[0.13] border border-white/20 rounded-[16px]"
          style={{ left: 1220, top: 342, width: 540, height: 637, padding: 36, gap: 20 }}
        >
          <GlowingEffect spread={40} glow proximity={200} inactiveZone={0.01} borderWidth={3} disabled={false} />
          <div className="relative shrink-0" style={{ width: 214, height: 214 }}>
            <Image
              src="/image-19.png"
              alt="Доходность"
              width={214}
              height={214}
              className="object-cover rounded-xl"
            />
          </div>
          <span
            className="font-bold tracking-[3px] text-white"
            style={{ fontSize: 24 }}
          >
            ДОХОДНОСТЬ
          </span>
          <span
            className=""
            style={{ fontSize: 20, color: "rgba(255,255,255,0.8)" }}
          >
            Yield
          </span>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`Стейкинг и yield-продукты
для портфелей Private Banking`}
          </p>
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`ERP-интеграция:
1С, SAP через API`}
          </p>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4] whitespace-pre-line"
            style={{ fontSize: 18, color: "rgba(255,255,255,0.73)" }}
          >
            Доход от стейкинга
          </p>
        </div>

        <SlideFooter page="PAGE (N°009)" theme="dark" />
      </div>
    </section>
  );
}
