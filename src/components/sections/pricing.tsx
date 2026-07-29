import { Check, Sparkles, Rocket, Star, Building2 } from "lucide-react";
import { pricingTiers } from "@/lib/content";
import { cn } from "@/lib/utils";

const tierIcons: Record<string, typeof Sparkles> = {
  Free: Sparkles,
  Starter: Rocket,
  Professional: Star,
  Enterprise: Building2,
};

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <div className="section-label">Pricing</div>
      <h2 className="mt-5 mb-12 text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
        Start free. <span className="text-subtle">Scale when you&apos;re ready.</span>
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {pricingTiers.map((tier) => {
          const TierIcon = tierIcons[tier.label] ?? Sparkles;
          return (
            <div
              key={tier.label}
              className={cn(
                "relative flex flex-col rounded-xl border bg-background p-6 transition-shadow",
                tier.featured
                  ? "border-foreground/15 shadow-lg"
                  : "border-hairline shadow-xs hover:shadow-md",
              )}
            >
              {tier.featured && (
                <span className="absolute -top-2.5 left-6 inline-flex items-center rounded-full border border-foreground/10 bg-primary px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-[0.08em] text-primary-foreground uppercase">
                  Popular
                </span>
              )}
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-subtle uppercase">
                  {tier.label}
                </span>
                <TierIcon className="size-3.5 text-accent" strokeWidth={1.75} />
              </div>
              <span className="tabular mb-1 block font-mono text-[2rem] leading-none font-medium tracking-tight">
                {tier.price}
              </span>
              <span className="mb-2 block text-[12.5px] text-muted-foreground">{tier.unit}</span>
              <span className="mb-5 block text-[12px] font-medium text-accent">{tier.integration}</span>
              <ul className="mb-6 flex-1 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[13px] leading-snug text-muted-foreground">
                    <Check className="mt-0.5 size-3 shrink-0 text-accent" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href ?? "#get-key"}
                className={cn(
                  "flex h-9 items-center justify-center rounded-lg text-[13px] font-medium transition-all active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2",
                  tier.featured
                    ? "border border-foreground/10 bg-primary text-primary-foreground shadow-xs hover:bg-zinc-800"
                    : "border border-border bg-muted text-foreground hover:bg-zinc-200/70",
                )}
              >
                {tier.cta}
              </a>
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-[12.5px] leading-relaxed text-subtle">
        All plans include SHA-256 tamper-proof chain and public audit trail. No credit card required for Free
        tier. Running at million-decision scale? Free, Starter, and Professional cap at 1k–500k/month —{" "}
        <a
          href="mailto:anthony@tryaidal.com?subject=AIDAL%20Enterprise%20Volume"
          className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
        >
          talk to us about Enterprise
        </a>{" "}
        for unlimited volume.
      </p>
    </section>
  );
}
