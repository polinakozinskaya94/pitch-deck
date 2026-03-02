"use client";

import Image from "next/image";
import { SlideHeader, SlideFooter } from "./SlideChrome";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function Slide7() {
  return (
    <section className="slide" id="slide-7">
      <div
        className="slide-inner font-primary relative overflow-hidden"
        style={{
          width: 1920,
          height: 1080,
          background: "#F2F2F0",
        }}
      >
        <SlideHeader section="РЕШЕНИЕ" page="PAGE (N°007)" theme="light" />

        {/* === Image === */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 38, top: 129, width: 424, height: 424 }}
        >
          <Image
            src="/image-16.png"
            alt="Solution visual"
            fill
            className="object-cover"
          />
        </div>

        {/* === Top right card (card-processing) === */}
        <div
          className="absolute"
          style={{ left: 880, top: 80, width: 960, height: 390 }}
        >
          <span
            className="absolute"
            style={{ left: 32, top: 32, fontSize: 18, color: "#7245ed" }}
          >
            Единый учёт
          </span>
          <p
            className="absolute"
            style={{
              left: 32,
              top: 72,
              fontSize: 22,
              color: "#1A1A1A",
              lineHeight: 1.4,
              width: 755,
            }}
          >
            Фиат, крипта и ЦФА — всё в одном журнале. Не нужна внешняя система
            учёта — всё внутри. Интеграция с 1С и другими внешними системами
            через API. Неизменяемый аудит-лог для регулятора.
          </p>
        </div>

        {/* === Divider lines === */}
        <div
          className="absolute"
          style={{ left: 853, top: 0, width: 1, height: 1080, background: "#CCCCCC" }}
        />
        <div
          className="absolute"
          style={{ left: 853, top: 545, width: 1067, height: 1, background: "#CCCCCC" }}
        />
        <div
          className="absolute"
          style={{ left: 1344, top: 545, width: 1, height: 527, background: "#CCCCCC" }}
        />

        {/* === Bottom left title === */}
        <WordFadeIn
          words="Готовое ядро, которое закрывает"
          el="h2"
          className="absolute font-bold leading-[1.05]"
          style={{ left: 80, top: 579, fontSize: 80, color: "#1A1A1A", width: 700 }}
        />
        <WordFadeIn
          words="3 задачи сразу:"
          el="h2"
          className="absolute font-bold leading-[1.05]"
          style={{ left: 80, top: 837, fontSize: 80, color: "#685edb" }}
          delay={0.2}
        />

        {/* === Bottom middle card (card-exchange) === */}
        <div
          className="absolute"
          style={{ left: 854, top: 579, width: 468, height: 368 }}
        >
          <span
            className="absolute"
            style={{ left: 32, top: 32, fontSize: 18, color: "#7245ed" }}
          >
            Единый compliance
          </span>
          <p
            className="absolute"
            style={{
              left: 32,
              top: 72,
              fontSize: 22,
              color: "#1A1A1A",
              lineHeight: 1.4,
              width: 390,
            }}
          >
            Проверка клиента (KYC) и проверка каждой транзакции (KYT) — в одном
            потоке. Санкционные списки, AML-мониторинг, автоматическая
            отчётность. Одни правила и для рублей, и для крипто — без «слепых
            зон» на стыках.
          </p>
        </div>

        {/* === Bottom right card (card-wallets) === */}
        <div
          className="absolute"
          style={{ left: 1372, top: 579, width: 468, height: 407 }}
        >
          <span
            className="absolute"
            style={{ left: 32, top: 32, fontSize: 18, color: "#7245ed" }}
          >
            Единая оркестрация
          </span>
          <p
            className="absolute"
            style={{
              left: 32,
              top: 72,
              fontSize: 22,
              color: "#1A1A1A",
              lineHeight: 1.4,
              width: 373,
            }}
          >
            Один движок для всех операций. Пополнение рублями и пополнение
            биткоином проходят через один и тот же pipeline. Комиссии, лимиты,
            холды — всё настраивается, а не хардкодится.
          </p>
        </div>

        <SlideFooter page="PAGE (N°007)" theme="light" />
      </div>
    </section>
  );
}
