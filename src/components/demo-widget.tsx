"use client";

import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";

const jurLabel: Record<string, string> = { SG: "MAS FEAT", ID: "OJK", EU: "EU AI Act", UAE: "VARA" };
const HEX = "0123456789abcdef";
function rndHex(n: number) {
  let s = "";
  for (let i = 0; i < n; i++) s += HEX[Math.floor(Math.random() * 16)];
  return s;
}

const fieldClass =
  "w-full appearance-none rounded-lg border border-border bg-background px-3 py-2 font-mono text-[12.5px] text-foreground transition-colors outline-none hover:border-zinc-300 focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/15";

const labelClass =
  "mb-1.5 block font-mono text-[10px] font-medium tracking-[0.12em] text-subtle uppercase";

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
        comp: "Rules check passed — " + (jurLabel[jur] ?? jur),
      });
    }, 800);
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
        <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-subtle uppercase">
          Live audit chain demo
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/8 px-2 py-0.5 font-mono text-[10px] font-medium text-success">
          <span className="size-1.5 animate-pulse rounded-full bg-success" />
          Live
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="space-y-3.5 p-4">
          <div>
            <label className={labelClass}>Decision type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className={fieldClass}>
              <option value="loan_approval">Loan Approval</option>
              <option value="fraud_detection">Fraud Detection</option>
              <option value="credit_scoring">Credit Scoring</option>
              <option value="insurance_underwriting">Insurance Underwriting</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Jurisdiction</label>
            <select value={jur} onChange={(e) => setJur(e.target.value)} className={fieldClass}>
              <option value="SG">SG (MAS FEAT)</option>
              <option value="ID">ID (OJK)</option>
              <option value="EU">EU (EU AI Act)</option>
              <option value="UAE">UAE (VARA)</option>
            </select>
          </div>
          <button
            onClick={runDemo}
            disabled={sealing}
            className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg border border-foreground/10 bg-primary py-2.5 text-[13px] font-medium text-primary-foreground shadow-xs transition-all hover:bg-zinc-800 active:translate-y-px disabled:opacity-60 disabled:active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
          >
            {sealing ? (
              <>
                <span className="size-1.5 animate-pulse rounded-full bg-primary-foreground" />
                Sealing…
              </>
            ) : (
              <>
                <ShieldCheck className="size-3.5" strokeWidth={2} />
                Seal this decision
              </>
            )}
          </button>
        </div>

        {result && (
          <div className="border-t border-hairline bg-card/60">
            <div className="flex items-center justify-between px-4 pt-3 pb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/8 px-2 py-0.5 font-mono text-[10px] font-medium tracking-tight text-success">
                <Check className="size-2.5" strokeWidth={3} />
                Sealed
              </span>
              <span className="font-mono text-[10px] tracking-[0.1em] text-subtle uppercase">
                Demo only
              </span>
            </div>

            {[
              ["Audit ID", result.id],
              ["Hash", result.hash],
            ].map(([k, v]) => (
              <div key={k} className="flex items-start gap-3 border-t border-hairline px-4 py-2">
                <span className="min-w-[64px] shrink-0 pt-px font-mono text-[10px] tracking-[0.1em] text-subtle uppercase">
                  {k}
                </span>
                <span className="font-mono text-[11.5px] break-all text-foreground">{v}</span>
              </div>
            ))}

            <div className="border-t border-hairline px-4 py-2.5">
              <div className="flex items-center gap-2 rounded-lg border border-success/20 bg-success/6 px-3 py-2">
                <Check className="size-3 shrink-0 text-success" strokeWidth={3} />
                <span className="font-mono text-[11px] text-success">{result.comp}</span>
              </div>
            </div>

            <div className="border-t border-hairline px-4 py-2.5 text-[11.5px] leading-relaxed text-muted-foreground">
              This decision is permanently sealed. No one — including AIDAL — can alter it.{" "}
              <a
                href="#get-key"
                className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
              >
                Get a real audit ID →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
