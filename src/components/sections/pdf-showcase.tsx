import { Check, Download } from "lucide-react";
import { AppWindow } from "@/components/app-window";

const callouts = [
  {
    title: "Cryptographic certificate",
    body: "SHA-256 hash chain with tamper-evident seal. Mathematically verifiable by any third party, independently of AIDAL's servers.",
  },
  {
    title: "Per-decision explanations",
    body: "Every AI decision explained in plain language. Required by EU AI Act Art 13, MAS FEAT, and OJK's 2025 AI governance guidance.",
  },
  {
    title: "Jurisdiction compliance mapping",
    body: "Automatically checked against your regulator's exact requirements — not a generic template.",
  },
];

const summaryRows: [string, string][] = [
  ["Reporting period", "Q1 2026"],
  ["Decisions logged", "4,821"],
];

export function PdfShowcaseSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <div className="section-label">Compliance report</div>
          <h2 className="mt-5 mb-5 text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
            The document your regulator <span className="text-subtle">actually wants.</span>
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground">
            One click from your dashboard. A professional PDF with cryptographic proof, AI explanations, and a
            compliance certificate — ready to hand to MAS, OJK, or an EU auditor.
          </p>
          <div className="flex flex-col gap-5">
            {callouts.map((c) => (
              <div key={c.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                  <Check className="size-2.5 text-accent" strokeWidth={3} />
                </span>
                <div>
                  <strong className="mb-0.5 block text-[14px] font-medium">{c.title}</strong>
                  <p className="text-[13.5px] leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/sample-report.pdf"
            download="AIDAL_Sample_Compliance_Report.pdf"
            className="mt-8 inline-flex h-10 items-center gap-2 rounded-lg border border-foreground/10 bg-primary px-5 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-zinc-800 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
          >
            <Download className="size-3.5" strokeWidth={2} />
            Download sample report
          </a>
        </div>

        <AppWindow label="aidal-production.up.railway.app/report/pdf">
          <div className="p-6">
            <div className="mb-5 flex items-center justify-between border-b border-hairline pb-4">
              <strong className="text-[15px] font-semibold">AIDAL. Compliance Audit Report</strong>
              <span className="font-mono text-[11px] text-subtle">May 2026</span>
            </div>
            <div className="mb-5 text-[15px] font-medium">Acme Fintech Pte Ltd</div>
            <div className="mb-2 font-mono text-[10px] font-medium tracking-[0.12em] text-subtle uppercase">
              Executive summary
            </div>
            {summaryRows.map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between border-b border-hairline py-2 text-[13px] text-muted-foreground"
              >
                <span>{k}</span>
                <span className="tabular font-mono text-foreground">{v}</span>
              </div>
            ))}
            <div className="flex justify-between border-b border-hairline py-2 text-[13px] text-muted-foreground">
              <span>Rules-passed rate</span>
              <span className="tabular font-mono font-medium text-success">98.7%</span>
            </div>
            <div className="flex justify-between py-2 text-[13px] text-muted-foreground">
              <span>Jurisdiction</span>
              <span className="font-mono text-foreground">SG — MAS FEAT</span>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-lg border border-success/20 bg-success/8 px-4 py-3">
              <span className="flex items-center gap-2 text-[12.5px] font-medium text-success">
                <Check className="size-3.5" strokeWidth={3} />
                Chain integrity verified
              </span>
              <span className="font-mono text-[10.5px] text-success/70">CERT-2026-A7F3C9B2</span>
            </div>
          </div>
        </AppWindow>
      </div>
    </section>
  );
}
