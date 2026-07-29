import { Building2, ShieldCheck, Users } from "lucide-react";

const clients = [
  {
    icon: Building2,
    title: "Fintech and lending",
    body: "Credit decisions, loan approvals, risk scoring. Every decision logged, every rejection explainable. Mapped to OJK, MAS FEAT, and EU AI Act requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    body: "Claims approval, underwriting, fraud flagging. Full audit trail that satisfies regulators and silences complaints.",
  },
  {
    icon: Users,
    title: "HR and hiring",
    body: "AI screening decisions. The EU AI Act classifies these as high-risk. AIDAL makes every hiring decision contestable.",
  },
];

export function ClientsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <div className="section-label">Who uses AIDAL</div>
      <h2 className="mt-5 mb-12 text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
        Built for anyone <span className="text-subtle">using AI to make decisions.</span>
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {clients.map((c) => (
          <div
            key={c.title}
            className="rounded-xl border border-hairline bg-background p-7 shadow-xs transition-shadow hover:shadow-md"
          >
            <div className="mb-5 flex size-9 items-center justify-center rounded-lg border border-hairline bg-card">
              <c.icon className="size-4 text-accent" strokeWidth={1.75} />
            </div>
            <h3 className="mb-2 text-[15px] font-medium">{c.title}</h3>
            <p className="text-[14px] leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
