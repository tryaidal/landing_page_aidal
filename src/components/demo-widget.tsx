"use client";

import { useState } from "react";

const jurLabel: Record<string, string> = { SG: "MAS FEAT", ID: "OJK", EU: "EU AI Act", UAE: "VARA" };
const HEX = "0123456789abcdef";
function rndHex(n: number) {
  let s = "";
  for (let i = 0; i < n; i++) s += HEX[Math.floor(Math.random() * 16)];
  return s;
}

export function DemoWidget() {
  const [type, setType] = useState("loan_approval");
  const [jur, setJur] = useState("SG");
  const [sealing, setSealing] = useState(false);
  const [result, setResult] = useState<{ id: string; hash: string; comp: string } | null>(null);

  function runDemo() {
    setSealing(true);
    setResult(null);
    setTimeout(() => {
      setSealing(false);
      setResult({
        id: "aud_" + rndHex(8),
        hash: "sha256:" + rndHex(32),
        comp: "RULES CHECK PASSED — " + (jurLabel[jur] ?? jur),
      });
    }, 800);
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col rounded-xl border border-border bg-background">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="size-1.5 shrink-0 animate-pulse rounded-full bg-accent" />
        <span className="font-mono text-[10px] tracking-[3px] text-muted-foreground uppercase">
          Live Audit Chain Demo
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="space-y-4 px-4 pt-4">
          <div>
            <label className="mb-1.5 block text-[10px] font-medium tracking-[1.5px] text-muted-foreground uppercase">
              Decision type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-md border border-border bg-secondary/40 px-3 py-2 font-mono text-xs text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <option value="loan_approval">Loan Approval</option>
              <option value="fraud_detection">Fraud Detection</option>
              <option value="credit_scoring">Credit Scoring</option>
              <option value="insurance_underwriting">Insurance Underwriting</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-[10px] font-medium tracking-[1.5px] text-muted-foreground uppercase">
              Jurisdiction
            </label>
            <select
              value={jur}
              onChange={(e) => setJur(e.target.value)}
              className="w-full rounded-md border border-border bg-secondary/40 px-3 py-2 font-mono text-xs text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <option value="SG">SG (MAS FEAT)</option>
              <option value="ID">ID (OJK)</option>
              <option value="EU">EU (EU AI Act)</option>
              <option value="UAE">UAE (VARA)</option>
            </select>
          </div>
          <button
            onClick={runDemo}
            disabled={sealing}
            className="mt-1 mb-4 w-full rounded-lg bg-primary py-3 text-[11px] font-bold tracking-[3px] text-primary-foreground uppercase transition-all hover:opacity-85 active:scale-[0.98] disabled:animate-pulse disabled:opacity-70 disabled:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {sealing ? "Sealing..." : "Seal This Decision"}
          </button>
        </div>
        {result && (
          <div className="border-t border-border font-mono">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/30 px-4 py-2">
              <div className="h-px flex-1 bg-accent/30" />
              <span className="text-[10px] tracking-[3px] text-accent uppercase">Sealed</span>
              <div className="h-px flex-1 bg-accent/30" />
            </div>
            <div className="flex items-start gap-2.5 border-b border-border px-4 py-2">
              <span className="min-w-[72px] shrink-0 pt-0.5 text-[10px] tracking-[1.5px] text-muted-foreground uppercase">
                Audit ID
              </span>
              <span className="text-[11px] break-all text-foreground">{result.id}</span>
            </div>
            <div className="flex items-start gap-2.5 border-b border-border px-4 py-2">
              <span className="min-w-[72px] shrink-0 pt-0.5 text-[10px] tracking-[1.5px] text-muted-foreground uppercase">
                Hash
              </span>
              <span className="text-[11px] break-all text-foreground">
                <span className="text-accent">SHA-256 · </span>
                {result.hash}
              </span>
            </div>
            <div className="flex items-center gap-2.5 border-b border-border px-4 py-2.5">
              <span className="text-base text-accent">✓</span>
              <span className="text-[10px] font-semibold tracking-[4px] text-accent uppercase">
                Cryptographically Sealed
              </span>
            </div>
            <div className="mx-4 my-2.5 flex items-center gap-2 rounded-md border border-accent/25 bg-accent/10 px-3 py-2">
              <span className="text-[8px] text-accent">●</span>
              <span className="text-[11px] text-foreground">{result.comp}</span>
            </div>
            <div className="border-b border-border px-4 py-2.5 text-[11px] leading-relaxed text-muted-foreground italic">
              This decision is permanently sealed. No one — including AIDAL — can alter it.
            </div>
            <div className="px-4 py-2.5">
              <a href="#get-key" className="text-[11px] text-muted-foreground underline hover:text-foreground">
                Want a real verifiable audit ID? Sign up for a free API key →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
