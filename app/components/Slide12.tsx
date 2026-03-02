"use client";
import Image from "next/image";
import { SlideHeader, SlideFooter } from "./SlideChrome";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function Slide12() {
  return (
    <section className="slide" id="slide-12">
      <div
        className="slide-inner relative overflow-hidden font-primary mesh-slide12"
        style={{ width: 1920, height: 1080 }}
      >
        <SlideHeader section="ЗАПУСК" page="PAGE (N°012)" theme="dark" />

        {/* Title */}
        <WordFadeIn
          words="Два варианта"
          className="absolute font-bold leading-[1.05] text-white"
          style={{ left: 73, top: 164, fontSize: 80 }}
        />
        <p
          className="absolute font-bold leading-[1.05]"
          style={{ left: 73, top: 259, fontSize: 80, color: "#FFFFFFAA" }}
        >
          внедрения.
        </p>

        {/* Note text */}
        <p
          className="absolute font-medium tracking-[1px] leading-[1.6]"
          style={{
            left: 73,
            top: 392,
            fontSize: 20,
            width: 700,
            color: "#FFFFFF88",
          }}
        >
          ГОТОВЫЕ АДАПТЕРЫ И КОННЕКТОРЫ — УСКОРИТЕЛЬ ИНТЕГРАЦИИ В ОБОИХ СЦЕНАРИЯХ.
        </p>

        {/* Dividers */}
        <div
          className="absolute left-0 w-full h-px"
          style={{ top: 546, backgroundColor: "#FFFFFF22" }}
        />
        <div
          className="absolute w-px"
          style={{ left: 960, top: 547, height: 533, backgroundColor: "#FFFFFF22" }}
        />

        {/* Images */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 51, top: 580, width: 204, height: 225 }}
        >
          <Image
            src="/image-25.png"
            alt="SaaS"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute overflow-hidden"
          style={{ left: 981, top: 580, width: 215, height: 215 }}
        >
          <Image
            src="/image-26.png"
            alt="On-premise"
            fill
            className="object-cover"
          />
        </div>

        {/* Left option — SaaS */}
        <h2
          className="absolute font-bold text-white"
          style={{ left: 80, top: 812, fontSize: 48 }}
        >
          SaaS
        </h2>
        <p
          className="absolute font-medium leading-[1.6] whitespace-pre-line"
          style={{
            left: 80,
            top: 882,
            fontSize: 24,
            width: 710,
            color: "#FFFFFF99",
          }}
        >
          На инфраструктуре BitBanker, подключение по API.{"\n"}Сроки: 1–2 мес.
        </p>

        {/* Right option — On-premise */}
        <h2
          className="absolute font-bold text-white"
          style={{ left: 1010, top: 812, fontSize: 48 }}
        >
          On-premise
        </h2>
        <p
          className="absolute font-medium leading-[1.6] whitespace-pre-line"
          style={{
            left: 1010,
            top: 886,
            fontSize: 24,
            width: 520,
            color: "#FFFFFF99",
          }}
        >
          В контуре клиента.{"\n"}Сроки: 3–5 мес.
        </p>

        <SlideFooter page="PAGE (N°012)" theme="dark" />
      </div>
    </section>
  );
}
