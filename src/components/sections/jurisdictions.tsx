"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { jurisdictions } from "@/lib/content";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function JurisdictionsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = jurisdictions[activeIdx];

  return (
    <section id="jurisdictions" className="bg-secondary px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="03" label="Jurisdiction modules" />
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Built for your
          <br />
          <em className="text-muted-foreground not-italic">specific regulator.</em>
        </h2>
        <p className="mb-10 max-w-[500px] text-sm leading-relaxed text-muted-foreground">
          Pass your jurisdiction code and AIDAL automatically checks compliance, flags missing fields, and
          tells you exactly what your regulator requires.
        </p>

        {/* Tabs — click a jurisdiction to swap the detail card below. */}
        <div className="mb-4 flex flex-wrap gap-2">
          {jurisdictions.map((j, i) => (
            <button
              key={j.name}
              type="button"
              onClick={() => setActiveIdx(i)}
              aria-pressed={i === activeIdx}
              className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-[13px] font-medium transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                i === activeIdx
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              <Image
                src={`https://flagcdn.com/w40/${j.flag}.png`}
                alt=""
                width={20}
                height={14}
                style={{ height: "auto" }}
                className="rounded-[2px]"
                unoptimized
              />
              {j.name}
            </button>
          ))}
        </div>

        {/* The single card that swaps based on the active tab. */}
        <div
          key={active.name}
          className="animate-in fade-in rounded-xl border border-border border-l-4 border-l-accent bg-background p-8 duration-200"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={`https://flagcdn.com/w40/${active.flag}.png`}
                alt={active.country}
                width={44}
                height={30}
                style={{ height: "auto" }}
                className="rounded-sm shadow-sm"
                unoptimized
              />
              <h3 className="text-xl font-semibold">{active.name}</h3>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold tracking-wide text-primary-foreground uppercase">
              <span className="size-1.5 rounded-full bg-accent" />
              Active
            </span>
          </div>
          <ul className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {active.items.map((item) => (
              <li key={item} className="relative border-b border-border py-2 pl-5 text-[13px] text-muted-foreground">
                <Check className="absolute top-2.5 left-0 size-3 text-accent" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
          <span className="meta-text inline-block rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
            {active.retention}
          </span>
        </div>
      </div>
    </section>
  );
}
