"use client";

import Image from "next/image";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import { SlideHeader, SlideFooter } from "./SlideChrome";

export default function Slide3() {
  return (
    <section className="slide" id="slide-3">
      <div className="slide-inner relative overflow-hidden mesh-slide3" style={{ width: 1920, height: 1080, minWidth: 1920, minHeight: 1080, maxWidth: 1920, maxHeight: 1080, flexShrink: 0 }}>
        {/* White bottom half */}
        <div
          className="absolute left-0 bottom-0 w-full bg-white"
          style={{ height: 540 }}
        />

        {/* Thin white line at y=582 */}
        <div
          className="absolute left-0 w-full h-px bg-white/[0.33]"
          style={{ top: 582 }}
        />

        <SlideHeader section="КТО МЫ" page="PAGE (N°003)" theme="dark" />

        {/* Title */}
        <WordFadeIn
          words="Технологическая компания"
          className="font-primary absolute font-bold leading-[1.05] text-white"
          style={{ left: 80, top: 120, fontSize: 80, width: 1562 }}
        />
        <p
          className="font-primary absolute font-bold leading-[1.05] text-white/67"
          style={{ left: 80, top: 204, fontSize: 80, width: 1629 }}
        >
          с работающим продуктом.
        </p>

        {/* Description */}
        <p
          className="font-primary absolute font-medium tracking-[1px] leading-[1.6] text-white/[0.67]"
          style={{ left: 80, top: 432, fontSize: 13, width: 1162 }}
        >
          ЧТО УМЕЕМ: ЕДИНОЕ ЯДРО ДЛЯ ФИАТНЫХ И КРИПТО-ОПЕРАЦИЙ — НЕ ДВА РЕШЕНИЯ, А ОДНО. ПОЛНЫЙ COMPLIANCE: KYC, AML, KYT — И ДЛЯ РУБЛЕЙ, И ДЛЯ КРИПТО. WHITE-LABEL: ВСЁ РАБОТАЕТ ПОД БРЕНДОМ БАНКА.
        </p>

        {/* === Bottom section - images === */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 498, top: 537, width: 375, height: 440 }}
        >
          <Image
            src="/image-23.png"
            alt="3D render"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute overflow-hidden"
          style={{ left: 62, top: 656, width: 259, height: 202 }}
        >
          <Image
            src="/image-24.png"
            alt="3D render"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute overflow-hidden"
          style={{ left: 1060, top: 627, width: 197, height: 256 }}
        >
          <Image
            src="/image-28.png"
            alt="3D render"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute overflow-hidden"
          style={{ left: 1416, top: 531, width: 432, height: 451 }}
        >
          <Image
            src="/image-29.png"
            alt="3D render"
            fill
            className="object-cover"
          />
        </div>

        {/* === Stat blocks === */}
        <div className="absolute flex items-start" style={{ left: 104, top: 924 }}>
          <div className="h-[3px] w-[30px] shrink-0 bg-black" />
          <p
            className="font-primary font-bold tracking-[1px] leading-[1.4] text-[#7f7f7f] whitespace-pre-line ml-[19px]"
            style={{ fontSize: 14 }}
          >
            ЛЕТ НА РЫНКЕ{"\n"}КРИПТОВАЛЮТ
          </p>
        </div>
        <div className="absolute flex items-start" style={{ left: 535, top: 923 }}>
          <div className="h-[3px] w-[30px] shrink-0 bg-black" />
          <p
            className="font-primary font-bold tracking-[1px] leading-[1.4] text-[#7f7f7f] whitespace-pre-line ml-[17px]"
            style={{ fontSize: 14 }}
          >
            ИНЖЕНЕРОВ —{"\n"}РАСПРЕДЕЛЁННАЯ КОМАНДА
          </p>
        </div>
        <div className="absolute flex items-start" style={{ left: 1076, top: 924 }}>
          <div className="h-[3px] w-[30px] shrink-0 bg-black" />
          <p
            className="font-primary font-bold tracking-[1px] leading-[1.4] text-[#7f7f7f] whitespace-pre-line ml-[11px]"
            style={{ fontSize: 14 }}
          >
            МИКРОСЕРВИСОВ{"\n"}В БОЕВОЙ СИСТЕМЕ
          </p>
        </div>
        <div className="absolute flex items-start" style={{ left: 1445, top: 924 }}>
          <div className="h-[3px] w-[30px] shrink-0 bg-black" />
          <p
            className="font-primary font-bold tracking-[1px] leading-[1.4] text-[#7f7f7f] whitespace-pre-line ml-[17px]"
            style={{ fontSize: 14 }}
          >
            РАБОТАЕТ ПРЯМО{"\n"}СЕЙЧАС НА BITBANKER.ORG
          </p>
        </div>

        <SlideFooter page="PAGE (N°003)" theme="light" />
      </div>
    </section>
  );
}
