import { KeyRound, GitCommitVertical, ShieldAlert } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";

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
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-28 md:grid-cols-2 md:gap-24 md:px-16">
        <div>
          <SectionEyebrow n="06" label="Independent verification" />
          <h2 className="mb-10 text-[30px] font-bold md:text-5xl">
            Your database is testimony.
            <br />
            <em className="text-muted-foreground not-italic">This is proof.</em>
          </h2>
          <p className="mb-10 text-sm leading-loose text-muted-foreground">
            A regulator doesn&apos;t trust what you control. AIDAL&apos;s record is verifiable by anyone,
            independent of AIDAL&apos;s own servers — a SHA-256 hash chain underneath, mathematically checkable,
            not just policy-promised. That is the difference between passing an audit and failing one — a black
            box recorder anyone can pull the tape from, not just AIDAL.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://aidal-dashboard.vercel.app/verify"
              target="_blank"
              rel="noopener"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-85 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Verify a record →
            </a>
            <a
              href="https://github.com/widjajaanthony24-svg/aidal-anchors"
              target="_blank"
              rel="noopener"
              className="meta-text rounded-full border border-primary px-6 py-3 text-[10px] tracking-[0.15em] text-muted-foreground uppercase transition-all hover:bg-secondary active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              View anchor log →
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          {cards.map((c, i) => (
            <div
              key={c.tag}
              className={`bg-secondary p-6 transition-colors hover:bg-secondary/70 ${
                i !== cards.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="mb-2.5 flex items-center gap-2">
                <c.icon className="size-3.5 text-accent" strokeWidth={2} />
                <span className="text-[10px] font-semibold tracking-wide text-accent uppercase">{c.tag}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
