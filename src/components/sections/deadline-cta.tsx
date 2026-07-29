import { ArrowRight } from "lucide-react";

/**
 * The single dark band on the page. Linear uses one high-contrast block to
 * break a long white scroll — zinc-950 ground, white type, same hairline
 * language inverted (white at 10%) so it belongs to the same system.
 */
export function DeadlineCtaSection() {
  return (
    <section className="border-y border-hairline bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-8 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.12em] text-white/70 uppercase">
            <span className="size-1.5 rounded-full bg-warning" />
            Deadline
          </span>
          <div className="mt-6 font-mono text-[4.5rem] leading-[0.95] font-medium tracking-tight md:text-[6rem]">
            Dec
            <br />
            2027
          </div>
          <div className="mt-5 font-mono text-[11px] tracking-[0.12em] text-white/45 uppercase">
            EU AI Act — high-risk AI deadline
          </div>
        </div>
        <div>
          <p className="mb-8 text-[15px] leading-relaxed text-white/60">
            The EU&apos;s Digital Omnibus pushed the high-risk deadline for credit, insurance, and employment
            AI systems from Aug 2026 to Dec 2, 2027 — but audit-trail buildout, model documentation, and
            procurement take 12–18 months, so 2027 is closer than it looks. Non-compliance: fines up to €15M
            or 3% of global annual turnover. Meanwhile Singapore&apos;s MAS FEAT and UAE&apos;s VARA already
            apply today, and Indonesia&apos;s OJK has published AI governance guidance for banks (non-binding,
            but built on binding IT-governance rules).
          </p>
          <a
            href="#get-key"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-white px-5 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Get your API key now
            <ArrowRight className="size-3.5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
