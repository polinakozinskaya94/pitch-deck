"use client";

import Image from "next/image";
import { SlideHeader, SlideFooter } from "./SlideChrome";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function Slide11() {
  return (
    <section className="slide" id="slide-11">
      <div
        className="slide-inner font-primary relative overflow-hidden bg-white"
        style={{ width: 1920, height: 1080 }}
      >
        <SlideHeader section="БЕЗОПАСНОСТЬ" page="PAGE (N°011)" theme="dark" />

        {/* Hero block with mesh gradient */}
        <div
          className="absolute left-0 top-0 w-full mesh-slide11-hero"
          style={{ width: 1920, height: 460 }}
        >
          <WordFadeIn
            words="Безопасность банковского уровня."
            className="absolute font-bold leading-[1.05] text-white"
            style={{ left: 80, top: 147, fontSize: 80, width: 1214 }}
          />
        </div>

        {/* Middle row — 4 images */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 509, top: 536, width: 261, height: 261 }}
        >
          <Image
            src="/image-6.png"
            alt="Security"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute overflow-hidden"
          style={{ left: 52, top: 531, width: 270, height: 270 }}
        >
          <Image
            src="/image-7.png"
            alt="Security"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute overflow-hidden"
          style={{ left: 1392, top: 539.5, width: 253, height: 253 }}
        >
          <Image
            src="/image-8.png"
            alt="Security"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute overflow-hidden"
          style={{ left: 965, top: 550.5, width: 237, height: 237 }}
        >
          <Image
            src="/image-9.png"
            alt="Security"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom cards row — 4 columns */}
        <div
          className="absolute flex flex-col gap-4"
          style={{
            left: 80,
            top: 780,
            width: 440,
            height: 251,
            padding: "40px 36px",
          }}
        >
          <span
            className="font-medium tracking-[0.5px]"
            style={{ fontSize: 15, color: "#999999" }}
          >
            Крипто-хранение
          </span>
          <p
            className="leading-[1.45] font-medium"
            style={{ fontSize: 18, color: "#1A1A1A", width: 340 }}
          >
            MPC TSS — приватный ключ никогда не собирается целиком. Hot/Cold: 5–15% горячие / 85–95% холодные.
          </p>
        </div>

        <div
          className="absolute flex flex-col gap-4 border-l border-[#E0E0E0]"
          style={{
            left: 520,
            top: 780,
            width: 440,
            height: 251,
            padding: "40px 36px",
          }}
        >
          <span
            className="font-medium tracking-[0.5px]"
            style={{ fontSize: 15, color: "#999999" }}
          >
            Сеть и приложение
          </span>
          <p
            className="leading-[1.45] font-medium"
            style={{ fontSize: 18, color: "#1A1A1A", width: 340 }}
          >
            WAF, DDoS Protection, VPN, Firewall, IP whitelist, TLS 1.3. 7+ ролей доступа, Maker-Checker, 2FA (SMS/TOTP/Bio).
          </p>
        </div>

        <div
          className="absolute flex flex-col gap-4 border-l border-[#E0E0E0]"
          style={{
            left: 960,
            top: 780,
            width: 440,
            height: 251,
            padding: "40px 36px",
          }}
        >
          <span
            className="font-medium tracking-[0.5px]"
            style={{ fontSize: 15, color: "#999999" }}
          >
            Данные
          </span>
          <p
            className="leading-[1.45] font-medium"
            style={{ fontSize: 18, color: "#1A1A1A", width: 340 }}
          >
            Неизменяемый аудит-лог, маскирование персональных данных, токенизация карт, Wazuh SIEM.
          </p>
        </div>

        <div
          className="absolute flex flex-col gap-4 border-l border-[#E0E0E0]"
          style={{
            left: 1400,
            top: 780,
            width: 440,
            height: 251,
            padding: "40px 36px",
          }}
        >
          <span
            className="font-medium tracking-[0.5px]"
            style={{ fontSize: 15, color: "#999999" }}
          >
            Compliance
          </span>
          <p
            className="leading-[1.45] font-medium"
            style={{ fontSize: 18, color: "#1A1A1A", width: 340 }}
          >
            KYC/KYB/KYT, AML-мониторинг (SumSub, Stronghold), санкционные списки (LexisNexis, 30+ баз).
          </p>
        </div>

        <SlideFooter page="PAGE (N°011)" theme="light" />
      </div>
    </section>
  );
}
