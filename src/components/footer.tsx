"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { Link000, Link001 } from "@/components/ui/skiper-ui/skiper40";

const footerLinks = [
  { href: "#how", label: "How it works" },
  { href: "#jurisdictions", label: "Jurisdictions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "https://aidal-dashboard.vercel.app", label: "Dashboard", external: true },
  { href: "https://aidal-dashboard.vercel.app/regulations", label: "Regulations", external: true },
  { href: "https://www.linkedin.com/in/anthony-widjaja-b5810b406/", label: "LinkedIn", external: true },
  { href: "/security.html", label: "Security" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] px-6 py-16 text-[#FAF3EB] md:px-16">
      {/* Faint background motif — a ledger/hash-chain of connected nodes,
          echoing what the product actually does rather than a decorative
          texture with no relation to it. */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-10 -bottom-10 size-72 opacity-[0.06] md:size-96"
        viewBox="0 0 200 200"
        fill="none"
      >
        {[40, 90, 140].map((y, i) => (
          <g key={y}>
            <circle cx="30" cy={y} r="6" stroke="#FAF3EB" strokeWidth="2" />
            <circle cx="170" cy={y} r="6" stroke="#FAF3EB" strokeWidth="2" />
            {i < 2 && <line x1="30" y1={y} x2="30" y2={y + 50} stroke="#FAF3EB" strokeWidth="2" />}
            <line x1="36" y1={y} x2="164" y2={y} stroke="#FAF3EB" strokeWidth="2" />
          </g>
        ))}
      </svg>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 flex items-center justify-between">
          <Image
            src="/aidal-logo.png?v=2"
            alt="AIDAL"
            width={705}
            height={140}
            className="h-6 w-auto max-w-none shrink-0"
          />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#FAF3EB] transition-colors hover:bg-white/10 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ArrowUp className="size-4" strokeWidth={2} />
          </button>
        </div>

        <h2 className="mb-10 max-w-xl text-[2rem] leading-[1.15] font-semibold md:text-[2.75rem]">
          We seal what your AI decided — so you never have to guess later.
        </h2>

        <div className="mb-10 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <p className="text-[12.5px] text-[#FAF3EB]/60">
              Indonesia · contact:{" "}
              <a href="mailto:anthony@tryaidal.com" className="text-[#FAF3EB] underline">
                anthony@tryaidal.com
              </a>
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-2 md:flex md:justify-end md:gap-6">
            {footerLinks.map((l) =>
              l.external ? (
                <Link001 key={l.label} href={l.href} className="text-sm text-[#FAF3EB]/80 hover:text-accent">
                  {l.label}
                </Link001>
              ) : (
                <Link000 key={l.label} href={l.href} className="text-sm text-[#FAF3EB]/80 hover:text-accent">
                  {l.label}
                </Link000>
              ),
            )}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-start md:justify-between">
          <p className="max-w-xl text-[11px] leading-relaxed text-[#FAF3EB]/45">
            AIDAL provides technical audit infrastructure for AI decision logging. Not a law firm. Not legal
            advice. AIDAL audit records are cryptographically verifiable but do not constitute legal compliance
            certification. Consult a licensed compliance lawyer for your jurisdiction.{" "}
            <a href="/privacy.html" className="underline">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="/security.html" className="underline">
              Security
            </a>
          </p>
          <p className="whitespace-nowrap text-xs text-[#FAF3EB]/45">© 2026 AIDAL</p>
        </div>
      </div>
    </footer>
  );
}
