"use client";

import { useState } from "react";
import { Lock, Zap, Check, ArrowRight, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SignupSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [copied, setCopied] = useState(false);

  async function getApiKey() {
    setError("");
    if (!name.trim()) {
      setError("Please enter your company name.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid work email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://aidal-production.up.railway.app/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (res.status === 409) {
        setError("Account already exists. Email anthony@tryaidal.com to recover your key.");
      } else if (res.status !== 201) {
        setError("Something went wrong. Email anthony@tryaidal.com.");
      } else {
        setApiKey(data.api_key);
        setName("");
        setEmail("");
        fetch("https://formspree.io/f/xgorddko", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ company: name, email, event: "api_key_created" }),
        }).catch(() => {});
      }
    } catch {
      setError("Network error. Email anthony@tryaidal.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="get-key"
      className="relative overflow-hidden border-t border-hairline bg-card px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-xl text-center">
        <div className="font-mono text-[10px] font-medium tracking-[0.14em] text-subtle uppercase">
          Get started free
        </div>
        <h2 className="mt-5 text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
          Provable AI decisions. <span className="text-subtle">Starting today.</span>
        </h2>
        <p className="mt-5 mb-8 text-[15px] text-muted-foreground">
          No credit card. No manual approval. Start logging decisions immediately.
        </p>

        <div className="mx-auto max-w-[30rem] rounded-xl border border-hairline bg-background p-7 text-left shadow-lg">
          <label className="mb-1.5 block font-mono text-[10px] font-medium tracking-[0.12em] text-subtle uppercase">
            Company name
          </label>
          <Input
            placeholder="Acme Fintech Pte Ltd"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-3.5 h-10"
          />
          <label className="mb-1.5 block font-mono text-[10px] font-medium tracking-[0.12em] text-subtle uppercase">
            Work email
          </label>
          <Input
            placeholder="you@company.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 h-10"
          />
          <button
            onClick={getApiKey}
            disabled={loading}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-foreground/10 bg-primary text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-zinc-800 active:translate-y-px disabled:opacity-50 disabled:active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
          >
            {loading ? "Creating your key…" : "Get my API key"}
            {!loading && <ArrowRight className="size-3.5" strokeWidth={2} />}
          </button>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11.5px] text-subtle">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="size-3" strokeWidth={2} /> SHA-256 sealed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="size-3" strokeWidth={2} /> Instant key
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3" strokeWidth={2} /> No credit card
            </span>
          </div>

          {error && (
            <div className="mt-4 rounded-lg border border-destructive/20 bg-destructive/5 px-3.5 py-2.5 text-[13px] text-destructive">
              {error}
            </div>
          )}

          {apiKey && (
            <div className="mt-7">
              <div className="overflow-hidden rounded-xl border border-success/25 shadow-xs">
                <div className="flex items-center gap-2 border-b border-success/20 bg-success/8 px-4 py-2.5">
                  <Check className="size-3.5 text-success" strokeWidth={3} />
                  <span className="font-mono text-[10px] font-medium tracking-[0.1em] text-success uppercase">
                    Your API key is live — save it now
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-background px-4 py-3">
                  <code className="flex-1 font-mono text-[12px] break-all text-foreground">{apiKey}</code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(apiKey);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="inline-flex h-7 shrink-0 items-center gap-1.5 rounded-md border border-border bg-muted px-2.5 text-[11.5px] font-medium transition-colors hover:bg-zinc-200/70 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                  >
                    <Copy className="size-3" strokeWidth={2} />
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
              <p className="mt-3 mb-5 text-[12.5px] leading-relaxed text-muted-foreground">
                <strong className="font-medium text-foreground">This key will not be shown again.</strong>{" "}
                Lost your key? Email anthony@tryaidal.com.
              </p>
              <div className="flex flex-col gap-2 border-t border-hairline pt-5">
                {[
                  { n: "01", label: "Open your dashboard", text: "Log a test decision in 2 minutes — no code needed.", href: "https://aidal-dashboard.vercel.app" },
                  { n: "02", label: "Read the API docs", text: "One endpoint. Copy the example. You're integrated.", href: "https://aidal-production.up.railway.app/docs" },
                  { n: "03", label: "Need help?", text: "Email us. We'll personally help you log your first decision — free.", href: "mailto:anthony@tryaidal.com?subject=AIDAL%20integration%20help" },
                ].map((s) => (
                  <a
                    key={s.n}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener" : undefined}
                    className="flex items-start gap-3 rounded-lg border border-hairline bg-background p-3.5 no-underline transition-colors hover:bg-card"
                  >
                    <span className="font-mono text-[11px] text-subtle">{s.n}</span>
                    <div>
                      <div className="mb-0.5 text-[13px] font-medium text-foreground">{s.label}</div>
                      <div className="text-[12.5px] leading-relaxed text-muted-foreground">{s.text}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
