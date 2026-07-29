import { legalCards } from "@/lib/content";

export function LegalSection() {
  return (
    <section className="border-y border-hairline bg-card px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.12em] text-accent uppercase">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Regulatory research
          </div>
          <h2 className="mb-5 text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
            Built from the <span className="text-subtle">actual regulation text.</span>
          </h2>
          <p className="mb-4 text-[15px] leading-relaxed text-muted-foreground">
            Every jurisdiction module was built by reading the regulation documents directly — OJK&apos;s 2025 AI
            governance guidance, MAS FEAT Principles, EU AI Act Articles 9–17, VARA 2024, FCA SYSC 3/SM&amp;CR,
            CFPB Circulars &amp; ECOA Reg B, and APRA CPS 234/230 — across all seven jurisdictions we support.
          </p>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Are you a compliance lawyer with MAS FEAT or OJK expertise?{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&to=anthony@tryaidal.com&subject=Legal%20Advisor%20%E2%80%94%20AIDAL"
              target="_blank"
              rel="noopener"
              className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
            >
              We&apos;d like to speak with you →
            </a>
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-hairline bg-background shadow-xs">
          {legalCards.map((card, i) => (
            <div
              key={card.title}
              className={`p-5 transition-colors hover:bg-card ${
                i !== legalCards.length - 1 ? "border-b border-hairline" : ""
              }`}
            >
              <div className="mb-1.5 flex items-start justify-between gap-3">
                <h3 className="text-[14px] font-medium">{card.title}</h3>
                <span className="pill shrink-0">{card.tag}</span>
              </div>
              <p className="text-[13.5px] leading-relaxed text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
