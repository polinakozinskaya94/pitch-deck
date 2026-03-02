"use client";

import Image from "next/image";
import { SlideHeader, SlideFooter } from "./SlideChrome";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function Slide8() {
  return (
    <section className="slide" id="slide-8">
      <div className="slide-inner relative overflow-hidden bg-white" style={{ width: 1920, height: 1080, minWidth: 1920, minHeight: 1080, maxWidth: 1920, maxHeight: 1080, flexShrink: 0 }}>
        {/* Left half — light purple background */}
        <div
          className="absolute"
          style={{
            left: 0,
            top: 0,
            width: 960,
            height: 1080,
            backgroundColor: "#efebff",
          }}
        />

        <SlideHeader section="ТЕХНОЛОГИИ" page="PAGE (N°008)" theme="light" />

        {/* Left side — 3D gear image */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 49, top: 184, width: 760, height: 754 }}
        >
          <Image
            src="/image-3.png"
            alt="3D gear render"
            fill
            className="object-cover"
          />
        </div>

        {/* Right side — Стек технологий */}
        <WordFadeIn
          words="Стек"
          el="h2"
          className="font-primary absolute font-bold"
          style={{
            left: 1143,
            top: 309,
            fontSize: 80,
            color: "#685edb",
          }}
        />
        <h3
          className="font-primary absolute font-bold"
          style={{
            left: 1143,
            top: 409,
            fontSize: 28,
            color: "#1A1A1A",
          }}
        >
          технологий
        </h3>

        {/* Tech list */}
        <p
          className="font-primary absolute font-medium whitespace-pre-line"
          style={{
            left: 1143,
            top: 469,
            fontSize: 20,
            lineHeight: 1.8,
            color: "#494949",
            width: 800,
          }}
        >
          {`→  Микросервисная, event-driven, cloud-agnostic
→  PostgreSQL + Redis + MinIO
→  RabbitMQ очереди
→  REST / GraphQL / WebSocket
→  Docker / K8s / Terraform
→  Zabbix + Prometheus + ELK + Grafana`}
        </p>

        {/* Source note */}
        <p
          className="font-primary absolute font-medium whitespace-pre-line"
          style={{
            left: 1143,
            top: 750,
            fontSize: 13,
            letterSpacing: 1,
            lineHeight: 1.6,
            color: "#999999",
            width: 700,
          }}
        >
          ВСЕ ДАННЫЕ ИЗ СПЕЦИФИКАЦИИ NEOBANK PLATFORM — ДОКУМЕНТ-ИСТОЧНИК.
        </p>

        <SlideFooter page="PAGE (N°008)" theme="light" />
      </div>
    </section>
  );
}
