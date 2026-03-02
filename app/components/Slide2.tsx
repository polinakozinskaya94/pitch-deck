"use client";

import { WordFadeIn } from "@/components/ui/word-fade-in";
import { SlideHeader, SlideFooter } from "./SlideChrome";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function GlassCard({ children, className = "", style }: GlassCardProps) {
  return (
    <div
      className={`shrink-0 whitespace-nowrap rounded-[10px] border border-white/25 bg-white/[0.13] backdrop-blur-[20px] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function Dots({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <span
      className={`font-primary shrink-0 text-[14px] font-normal text-white/[0.33] ${className ?? ""}`}
      style={{ width: 50, textAlign: "center", ...style }}
    >
      · · · · ·
    </span>
  );
}

export default function Slide2() {
  return (
    <section className="slide" id="slide-2">
      <div className="slide-inner relative overflow-hidden mesh-slide2">
        <SlideHeader section="КОРПОРАТИВНАЯ СТРУКТУРА" page="PAGE (N°002)" theme="dark" />

        {/* Title */}
        <WordFadeIn
          words="Прозрачная корпоративная структура"
          className="absolute left-[80px] top-[138px] font-primary text-[80px] font-bold leading-[1.05] text-white"
          style={{ width: 900 }}
        />

        {/* Vertical Trunk Line */}
        <div className="absolute left-[450px] top-[448px] h-[391px] w-px bg-white/[0.33]" />

        {/* Horizontal Stubs */}
        <div className="absolute left-[450px] top-[448px] h-px w-[76px] bg-white/[0.33]" />
        <div className="absolute left-[450px] top-[578px] h-px w-[76px] bg-white/[0.33]" />
        <div className="absolute left-[450px] top-[711px] h-px w-[76px] bg-white/[0.33]" />
        <div className="absolute left-[450px] top-[838px] h-px w-[76px] bg-white/[0.33]" />

        {/* Root Card + Connector */}
        <div className="absolute left-[399px] top-[668px] h-px w-[51px] bg-white/[0.33]" />
        <GlassCard
          className="absolute px-[18px] py-[14px]"
          style={{ left: 80, top: 616, width: 319 }}
        >
          <p className="font-primary text-[15px] font-semibold leading-[1.4] text-white">
            Балашов А.В. (Основатель)
            <br />
            14 компаний в холдинге
          </p>
        </GlassCard>

        {/* === Row 1: IT и платформа === */}
        <div className="absolute" style={{ left: 525.81, top: 426 }}>
          <div className="flex items-center gap-[12px]">
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-semibold text-white">IT и платформа</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">ООО «Битбанкер-Тех»</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">ООО «Битбанкер»</span>
            </GlassCard>
          </div>
        </div>

        {/* === Row 2: Платежи и операции === */}
        <div className="absolute" style={{ left: 525.81, top: 556 }}>
          <div className="flex items-center gap-[12px]">
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-semibold text-white">Платежи и операции</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">Битбанкер КГ (Киргизия)</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">ООО «АБ-003-СКО»</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">ООО «Глобал ПО»</span>
            </GlassCard>
          </div>
        </div>

        {/* === Row 3: ОАЭ === */}
        <div className="absolute" style={{ left: 525.81, top: 686 }}>
          <div className="flex items-center gap-[12px]">
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-semibold text-white">ОАЭ</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">Битбанкер ФЗЕ</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">Битброкер ФЗКО</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">ЕКБ-Инвестментс</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">РМГ ФЗК</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">Аурум Лотус Компани ФЗЕ</span>
            </GlassCard>
          </div>
        </div>

        {/* === Row 4: Реал-эстейт и промышленность === */}
        <div className="absolute" style={{ left: 525.81, top: 816 }}>
          <div className="flex items-center gap-[12px]">
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-semibold text-white">Реал-эстейт и промышленность</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">ООО «Город-Инвест»</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">ООО «Ника-Петротэк»</span>
            </GlassCard>
            <Dots />
            <GlassCard className="px-[16px] py-[12px]">
              <span className="font-primary text-[17px] font-normal text-white/[0.87]">ООО «Аргут»</span>
            </GlassCard>
          </div>
        </div>

        {/* Key Note */}
        <p className="absolute left-[80px] top-[910px] font-primary text-[16px] font-medium leading-[1.6] tracking-[0.5px] text-white/[0.67]" style={{ width: 900 }}>
          Ключевое: BitBanker Tech — инженерная компания с API. Диверсифицированный холдинг
          <br />
          с готовыми бизнес-рельсами: лицензии, платёжная инфраструктура, международные связки.
        </p>

        <SlideFooter page="PAGE (N°002)" theme="dark" />
      </div>
    </section>
  );
}
