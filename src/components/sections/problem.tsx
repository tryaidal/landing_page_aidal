import { MessageCircleQuestion, DatabaseZap, Gavel, ShieldCheck } from "lucide-react";

const cells = [
  {
    badge: "Gap 1",
    title: "No explanation",
    body: "When an AI denies a loan or flags a transaction, neither the company nor the customer can explain why — in a way that satisfies a regulator or stands up in court.",
    icon: MessageCircleQuestion,
    dark: false,
  },
  {
    badge: "Gap 2",
    title: "No audit trail",
    body: "AI decisions live in databases that can be edited. There is no tamper-proof record of what was decided, when, by which model, and with what confidence.",
    icon: DatabaseZap,
    dark: false,
  },
  {
    badge: "Gap 3",
    title: "Regulators are arriving",
    body: "The EU AI Act, Singapore MAS FEAT, Indonesia OJK, and UAE VARA all point the same direction: explainable, auditable AI decisions. MAS FEAT and VARA apply today; OJK has published AI governance guidance for banks. The EU AI Act's high-risk deadline was pushed to December 2027, but enterprise procurement and audit-trail buildout take months, so it's closer than it looks. Most companies have nothing.",
    icon: Gavel,
    dark: false,
  },
  {
    badge: "Solution",
    title: "AIDAL solves all three",
    body: "One API call logs every decision with a cryptographic proof, an AI-generated explanation, and automatic compliance checking. Regulators verify everything in seconds.",
    icon: ShieldCheck,
    dark: true,
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <div className="section-label">The problem</div>
      <h2 className="mt-5 mb-10 max-w-2xl text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
        AI makes millions of decisions.{" "}
        <span className="text-subtle">None of them are provable.</span>
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {cells.map((cell) => (
          <div
            key={cell.badge}
            className={
              cell.dark
                ? "rounded-xl border border-foreground/10 bg-primary p-7 text-primary-foreground shadow-md"
                : "rounded-xl border border-hairline bg-background p-7 shadow-xs transition-colors hover:bg-card"
            }
          >
            <div className="mb-5 flex items-center justify-between">
              <span
                className={
                  cell.dark
                    ? "inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-[0.08em] text-white/90 uppercase"
                    : "inline-flex items-center rounded-full border border-border/60 bg-muted px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-[0.08em] text-muted-foreground uppercase"
                }
              >
                {cell.badge}
              </span>
              <cell.icon
                className={cell.dark ? "size-4 text-white/50" : "size-4 text-accent"}
                strokeWidth={1.75}
              />
            </div>
            <h3 className="mb-2 text-[15px] font-medium">{cell.title}</h3>
            <p
              className={
                cell.dark
                  ? "text-[14px] leading-relaxed text-white/65"
                  : "text-[14px] leading-relaxed text-muted-foreground"
              }
            >
              {cell.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
