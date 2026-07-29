import { KeyRound, GitCommitVertical, ShieldAlert, ArrowRight } from "lucide-react";

const cards = [
  {
    tag: "How it works",
    body: "Company gives regulator an audit ID. Regulator pastes it into the verify page. Green = untampered. No sensitive data revealed.",
    icon: KeyRound,
  },
  {
    tag: "Daily anchor log",
    body: "Every 24 hours AIDAL publishes a master hash to GitHub — permanent and verifiable even if AIDAL goes offline.",
    icon: GitCommitVertical,
  },
  {
    tag: "Why this matters",
    body: "AWS and Azure cannot do this. AIDAL's proof exists independently of AIDAL. That is a fundamentally different level of trust.",
    icon: ShieldAlert,
  },
];

export function VerifySection() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-8 md:py-28">
        <div>
          <div className="section-label">Independent verification</div>
          <h2 className="mt-5 mb-6 text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
            Your database is testimony. <span className="text-subtle">This is proof.</span>
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground">
            A regulator doesn&apos;t trust what you control. AIDAL&apos;s SHA-256 hash chain is mathematically
            verifiable by anyone, independent of AIDAL&apos;s servers. That is the difference between passing
            an audit and failing one — a black box recorder anyone can pull the tape from, not just AIDAL.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://aidal-dashboard.vercel.app/verify"
              target="_blank"
              rel="noopener"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-foreground/10 bg-primary px-5 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-zinc-800 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
            >
              Verify a record
              <ArrowRight className="size-3.5" strokeWidth={2} />
            </a>
            <a
              href="https://github.com/widjajaanthony24-svg/aidal-anchors"
              target="_blank"
              rel="noopener"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-muted px-5 text-sm font-medium text-foreground transition-all hover:bg-zinc-200/70 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
            >
              View anchor log
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-hairline shadow-xs">
          {cards.map((c, i) => (
            <div
              key={c.tag}
              className={`bg-background p-5 transition-colors hover:bg-card ${
                i !== cards.length - 1 ? "border-b border-hairline" : ""
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                <c.icon className="size-3.5 text-accent" strokeWidth={2} />
                <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-subtle uppercase">
                  {c.tag}
                </span>
              </div>
              <p className="text-[14px] leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
