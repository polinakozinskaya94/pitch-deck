"use client";

import Image from "next/image";
import { SlideHeader, SlideFooter } from "./SlideChrome";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function Slide10() {
  return (
    <section className="slide" id="slide-10">
      <div
        className="slide-inner font-primary relative overflow-hidden mesh-slide10"
        style={{ width: 1920, height: 1080 }}
      >
        <SlideHeader section="13 / BB.WALLET" page="PAGE (N°010)" theme="dark" />

        {/* Title */}
        <WordFadeIn
          words="B2C"
          className="absolute font-bold leading-[1.05] text-white"
          style={{ left: 80, top: 114, fontSize: 80, letterSpacing: -0.5 }}
        />
        <p
          className="absolute leading-[1.5]"
          style={{
            left: 80,
            top: 224,
            fontSize: 20,
            color: "rgba(255,255,255,0.8)",
            width: 808,
          }}
        >
          Подходит от новичка до профессионала
        </p>

        {/* Column 1 — КУПИТЬ */}
        <div
          className="absolute flex flex-col backdrop-blur-[20px] bg-white/[0.13] border border-white/20 rounded-[16px]"
          style={{ left: 80, top: 319, width: 540, height: 690, padding: 36, gap: 18 }}
        >
          <GlowingEffect spread={40} glow proximity={200} inactiveZone={0.01} borderWidth={3} disabled={false} />
          <div className="relative shrink-0" style={{ width: 214, height: 214 }}>
            <Image
              src="/image-20.png"
              alt="Купить"
              width={214}
              height={214}
              className="object-cover rounded-xl"
            />
          </div>
          <span
            className="font-bold tracking-[3px] text-white shrink-0"
            style={{ fontSize: 24 }}
          >
            КУПИТЬ
          </span>
          <span
            className="shrink-0"
            style={{ fontSize: 20, color: "rgba(255,255,255,0.8)" }}
          >
            Buy &amp; Swap
          </span>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`Покупка BTC, USDT, ETH\nв два тапа`}
          </p>
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`Мгновенный обмен\nRUB ↔ BTC ↔ USDT`}
          </p>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4]"
            style={{ fontSize: 18, color: "rgba(255,255,255,0.73)" }}
          >
            Прозрачные комиссии и выгодный курс
          </p>
        </div>

        {/* Column 2 — ПЛАТИТЬ */}
        <div
          className="absolute flex flex-col backdrop-blur-[20px] bg-white/[0.13] border border-white/20 rounded-[16px]"
          style={{ left: 650, top: 319, width: 540, height: 690, padding: 36, gap: 18 }}
        >
          <GlowingEffect spread={40} glow proximity={200} inactiveZone={0.01} borderWidth={3} disabled={false} />
          <div className="relative shrink-0" style={{ width: 214, height: 214 }}>
            <Image
              src="/image-21.png"
              alt="Платить"
              width={214}
              height={214}
              className="object-cover rounded-xl"
            />
          </div>
          <span
            className="font-bold tracking-[3px] text-white shrink-0"
            style={{ fontSize: 24 }}
          >
            ПЛАТИТЬ
          </span>
          <span
            className="shrink-0"
            style={{ fontSize: 20, color: "rgba(255,255,255,0.8)" }}
          >
            Spend
          </span>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`Карта с автообменом:\nплатишь картой,\nкрипто → рубли автоматически`}
          </p>
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`Единый баланс:\nRUB + BTC + USDT\nна одном экране`}
          </p>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4]"
            style={{ fontSize: 18, color: "rgba(255,255,255,0.73)" }}
          >
            Interchange + FX spread
          </p>
        </div>

        {/* Column 3 — ЗАРАБОТАТЬ */}
        <div
          className="absolute flex flex-col backdrop-blur-[20px] bg-white/[0.13] border border-white/20 rounded-[16px]"
          style={{ left: 1220, top: 319, width: 540, height: 690, padding: 36, gap: 18 }}
        >
          <GlowingEffect spread={40} glow proximity={200} inactiveZone={0.01} borderWidth={3} disabled={false} />
          <div className="relative shrink-0" style={{ width: 225, height: 213 }}>
            <Image
              src="/image-22.png"
              alt="Заработать"
              width={225}
              height={213}
              className="object-cover rounded-xl"
            />
          </div>
          <span
            className="font-bold tracking-[3px] text-white shrink-0"
            style={{ fontSize: 24 }}
          >
            ЗАРАБОТАТЬ
          </span>
          <span
            className="shrink-0"
            style={{ fontSize: 20, color: "rgba(255,255,255,0.8)" }}
          >
            Earn
          </span>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4] whitespace-pre-line text-white"
            style={{ fontSize: 20 }}
          >
            {`Savings & Staking:\nвклады в рублях +\nдоходность по крипто`}
          </p>
          <p
            className="leading-[1.4] text-white"
            style={{ fontSize: 20 }}
          >
            Реферальная программа
          </p>
          <div className="w-full h-px shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p
            className="leading-[1.4]"
            style={{ fontSize: 18, color: "rgba(255,255,255,0.73)" }}
          >
            Комиссия с yield-продуктов
          </p>
        </div>

        <SlideFooter page="PAGE (N°010)" theme="dark" />
      </div>
    </section>
  );
}
