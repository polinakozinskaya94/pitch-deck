"use client";

import { SlideHeader, SlideFooter } from "./SlideChrome";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function Slide5() {
  return (
    <section className="slide" id="slide-5">
      <div className="slide-inner relative overflow-hidden mesh-slide5">
        <SlideHeader section="BUILD VS BUY" page="PAGE (N°005)" theme="dark" />

        {/* === Title left side === */}
        <WordFadeIn
          words="Зачем строить,"
          className="font-primary absolute font-bold leading-[1.1] text-white"
          style={{ left: 80, top: 238, fontSize: 80, width: 380 }}
        />
        <WordFadeIn
          words="если можно купить?"
          className="font-primary absolute font-bold leading-[1.1]"
          style={{ left: 80, top: 414, fontSize: 80, width: 700, color: "#ababff" }}
          delay={0.2}
        />

        {/* === Left bottom "СТРОИТЬ САМИМ" section === */}
        <span
          className="font-primary absolute font-bold tracking-[2px]"
          style={{ left: 94, top: 696, fontSize: 12, color: "rgba(255,255,255,0.53)" }}
        >
          СТРОИТЬ САМИМ
        </span>
        <p
          className="font-primary absolute"
          style={{ left: 94, top: 732.5, fontSize: 22, color: "rgba(255,255,255,0.67)" }}
        >
          × 18–24 месяца на разработку
        </p>
        <p
          className="font-primary absolute"
          style={{ left: 94, top: 769.76, fontSize: 22, color: "rgba(255,255,255,0.67)" }}
        >
          × $5M+ инвестиций в IT
        </p>
        <p
          className="font-primary absolute"
          style={{ left: 542, top: 731, fontSize: 22, color: "rgba(255,255,255,0.67)" }}
        >
          × Найм 50+ специалистов
        </p>
        <p
          className="font-primary absolute"
          style={{ left: 542, top: 768.26, fontSize: 22, color: "rgba(255,255,255,0.67)" }}
        >
          × Риск устаревания технологий
        </p>

        {/* === Bottom note === */}
        <p
          className="font-primary absolute font-medium tracking-[1px] leading-[1.6] whitespace-pre-line"
          style={{ left: 80, top: 925, fontSize: 16, width: 648, color: "rgba(255,255,255,0.47)" }}
        >
          {`ГОТОВАЯ ПЛАТФОРМА — БЫСТРЕЕ, ДЕШЕВЛЕ, НАДЁЖНЕЕ.
ФОКУС НА БИЗНЕСЕ, А НЕ НА ИНФРАСТРУКТУРЕ.`}
        </p>

        {/* === Right side label === */}
        <span
          className="font-primary absolute font-bold tracking-[2px] text-white"
          style={{ left: 882, top: 146, fontSize: 12 }}
        >
          BITBANKER: ГОТОВОЕ РЕШЕНИЕ
        </span>

        {/* === Glass Card 1 "Запуск" === */}
        <div
          className="absolute rounded-[16px] border-[1.5px] backdrop-blur-[20px] bg-white/[0.13]"
          style={{
            left: 882,
            top: 178,
            width: 395,
            height: 209,
            borderColor: "rgba(255,255,255,0.33)",
          }}
        >
          <h2
            className="font-primary absolute font-bold text-white"
            style={{ left: 24, top: 24, fontSize: 28 }}
          >
            Запуск
          </h2>
          <p
            className="font-primary absolute font-medium leading-[1.4] whitespace-pre-line"
            style={{ left: 24, top: 76, fontSize: 22, width: 300, color: "rgba(255,255,255,0.8)" }}
          >
            {"За 3 месяца\nс нуля до продакшена"}
          </p>
        </div>

        {/* === Glass Card 2 "Экономия" === */}
        <div
          className="absolute rounded-[16px] border-[1.5px] backdrop-blur-[20px] bg-white/[0.13]"
          style={{
            left: 1045,
            top: 352,
            width: 395,
            height: 209,
            borderColor: "rgba(255,255,255,0.33)",
          }}
        >
          <h2
            className="font-primary absolute font-bold text-white"
            style={{ left: 24, top: 24, fontSize: 28 }}
          >
            Экономия
          </h2>
          <p
            className="font-primary absolute font-medium leading-[1.4] whitespace-pre-line"
            style={{ left: 24, top: 76, fontSize: 22, width: 300, color: "rgba(255,255,255,0.8)" }}
          >
            {"$0 на разработку ядра\nвместо $5M+"}
          </p>
        </div>

        {/* === Glass Card 3 "Команда" === */}
        <div
          className="absolute rounded-[16px] border-[1.5px] backdrop-blur-[20px] bg-white/[0.13]"
          style={{
            left: 1207,
            top: 526,
            width: 395,
            height: 209,
            borderColor: "rgba(255,255,255,0.33)",
          }}
        >
          <h2
            className="font-primary absolute font-bold text-white"
            style={{ left: 24, top: 24, fontSize: 28 }}
          >
            Команда
          </h2>
          <p
            className="font-primary absolute font-medium leading-[1.4] whitespace-pre-line"
            style={{ left: 24, top: 76, fontSize: 22, width: 300, color: "rgba(255,255,255,0.8)" }}
          >
            {"100+ инженеров\nуже в команде"}
          </p>
        </div>

        {/* === Glass Card 4 "Обновления" === */}
        <div
          className="absolute rounded-[16px] border-[1.5px] backdrop-blur-[20px] bg-white/[0.13]"
          style={{
            left: 1370,
            top: 701,
            width: 418,
            height: 232,
            borderColor: "rgba(255,255,255,0.33)",
          }}
        >
          <h2
            className="font-primary absolute font-bold text-white"
            style={{ left: 24, top: 24, fontSize: 28 }}
          >
            Обновления
          </h2>
          <p
            className="font-primary absolute font-medium leading-[1.4] whitespace-pre-line"
            style={{ left: 24, top: 76, fontSize: 22, width: 330, color: "rgba(255,255,255,0.8)" }}
          >
            {"Постоянные релизы\nБез дополнительных затрат"}
          </p>
        </div>

        <SlideFooter page="PAGE (N°005)" theme="dark" />
      </div>
    </section>
  );
}
