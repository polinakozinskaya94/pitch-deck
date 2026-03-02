import Image from "next/image";
import { SlideHeader, SlideFooter } from "./SlideChrome";

export default function Slide1() {
  return (
    <section className="slide" id="slide-1">
      <div className="slide-inner shrink-0 bg-[var(--slide-bg)]" style={{ width: 1920, height: 1080, minWidth: 1920, minHeight: 1080, maxWidth: 1920, maxHeight: 1080 }}>
        <SlideHeader section="PITCH DECK" page="PAGE (N°001)" theme="light" />

        {/* Left Panel */}
        <div className="absolute inset-0 w-1/2">

          {/* Navigation Dots — 80/960, 452/1080 */}
          <div className="absolute left-[8.33%] top-[41.85%] flex items-center gap-[10px]">
            <div className="h-[14px] w-[14px] rounded-full bg-[var(--dot-active)]" />
            <div className="h-[14px] w-[14px] rounded-full border-[1.5px] border-[var(--dot-inactive)]" />
          </div>

          {/* Bitbanker Logo — 80/960, 495/1080, 541px wide in 960px panel */}
          <Image
            src="/bitbanker-logo.png"
            alt="Bitbanker"
            width={541}
            height={90}
            className="absolute left-[8.33%] top-[45.83%] h-auto w-[56.35%]"
            priority
          />

          {/* Date Line — 80/960, 623/1080 */}
          <p className="absolute left-[8.33%] top-[57.69%] font-primary text-[13px] font-medium tracking-[1px] text-[var(--text-navy)]">
            Февраль 2026 | Конфиденциально
          </p>

        </div>

        {/* Divider */}
        <div className="absolute top-0 left-1/2 h-full w-px bg-[var(--divider)]" />

        {/* Right Panel */}
        <div className="absolute top-0 right-0 h-full w-1/2 bg-[var(--right-panel)]">
          {/* Description Text */}
          <p className="absolute left-[6.875%] right-[6.875%] top-[82.22%] font-primary text-[24px] font-medium leading-[1.6] tracking-[1px] text-[var(--text-white)]">
            ТЕХНОЛОГИЧЕСКАЯ ПЛАТФОРМА ДЛЯ ЗАПУСКА
            <br />
            ПОЛНОГО СПЕКТРА КРИПТОВАЛЮТНЫХ СЕРВИСОВ
          </p>

          {/* Tagline */}
          <p className="absolute left-[6.875%] top-[90%] font-primary text-[24px] font-normal text-[var(--text-light)]">
            Один Ledger · Один Kernel · Один Compliance
          </p>

        </div>

        {/* 3D Hero Image — overlaps both panels, x=713 y=0 w=1024 h=888 in 1920x1080 */}
        <div className="pointer-events-none absolute top-0 left-[37.135%] z-10 h-[82.22%] w-[53.33%]">
          <Image
            src="/hero-3d-b.png"
            alt="Bitbanker 3D"
            width={1024}
            height={888}
            className="h-full w-full select-none object-contain"
            priority
          />
        </div>

        <SlideFooter page="PAGE (N°001)" theme="light" />
      </div>
    </section>
  );
}
