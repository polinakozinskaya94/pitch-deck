"use client";
import { SlideHeader, SlideFooter } from "./SlideChrome";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function Slide14() {
  return (
    <section className="slide" id="slide-14">
      <div
        className="slide-inner relative overflow-hidden font-primary mesh-slide14"
        style={{ width: 1920, height: 1080 }}
      >
        <SlideHeader section="КОНТАКТЫ" page="PAGE (N°014)" theme="dark" />

        {/* Main content */}
        <WordFadeIn
          words="BitBanker"
          className="absolute font-bold leading-[1]"
          style={{
            left: 80,
            top: 242,
            fontSize: 120,
            color: "#FFFFFF",
          }}
        />
        <h2
          className="absolute font-bold leading-[1]"
          style={{
            left: 80,
            top: 372,
            fontSize: 80,
            color: "#c8c7ff",
          }}
        >
          × ВТБ
        </h2>

        {/* White line */}
        <div
          className="absolute"
          style={{
            left: 80,
            top: 533,
            width: 120,
            height: 3,
            background: "#FFFFFF",
          }}
        />

        <span
          className="absolute font-bold"
          style={{
            left: 80,
            top: 573,
            fontSize: 36,
            color: "#FFFFFF",
          }}
        >
          Следующие шаги
        </span>

        {/* Steps text */}
        <p
          className="absolute font-medium leading-[1.8] whitespace-pre-line"
          style={{
            left: 80,
            top: 643,
            fontSize: 22,
            width: 800,
            color: "#FFFFFF99",
          }}
        >
          {`01   Демо на bitbanker.org — покажем боевую систему:
       сетап → сделка → удержание → экзит. Живой продукт.

02  Техническая сессия — глубокое погружение
       в архитектуру с IT-командой ВТБ

03  POC за 4–6 недель — пилот на выбранном модуле.
       Развёртывание, настройка, тестирование.`}
        </p>

        {/* Right side — Contacts */}
        <span
          className="absolute font-bold"
          style={{
            left: 1200,
            top: 640,
            fontSize: 14,
            letterSpacing: 2,
            color: "#FFFFFF99",
          }}
        >
          КОНТАКТЫ
        </span>
        <p
          className="absolute font-medium leading-[1.8] whitespace-pre-line"
          style={{
            left: 1200,
            top: 680,
            fontSize: 22,
            width: 600,
            color: "#FFFFFF",
          }}
        >
          {`bitbanker.org
Готовы обсудить детали`}
        </p>

        <SlideFooter page="©2026 BITBANKER. ALL RIGHTS RESERVED." theme="dark" />
      </div>
    </section>
  );
}
