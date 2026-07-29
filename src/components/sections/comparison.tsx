import { Check } from "lucide-react";
import { comparisonRows } from "@/lib/content";

export function ComparisonSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <div className="section-label">Why AIDAL</div>
      <h2 className="mt-5 mb-12 text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
        Cheaper, faster, <span className="text-subtle">already built.</span>
      </h2>
      <div className="overflow-x-auto rounded-xl border border-hairline shadow-xs">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-b border-hairline bg-card">
              <th className="w-[38%] px-6 py-3 font-mono text-[10px] font-medium tracking-[0.12em] text-subtle uppercase">
                Capability
              </th>
              <th className="px-6 py-3">
                <span className="inline-flex items-center rounded-md bg-primary px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.08em] text-primary-foreground uppercase">
                  AIDAL
                </span>
              </th>
              <th className="px-6 py-3 font-mono text-[10px] font-medium tracking-[0.12em] text-subtle uppercase">
                Build in-house
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-hairline bg-background transition-colors last:border-b-0 hover:bg-card"
              >
                <td className="px-6 py-4 text-[13.5px] font-medium text-foreground">{row.label}</td>
                <td className="px-6 py-4 text-[13.5px] text-foreground">
                  <span className="flex items-center gap-2">
                    <Check className="size-3.5 shrink-0 text-accent" strokeWidth={2.5} />
                    {row.aidal}
                  </span>
                </td>
                <td className="px-6 py-4 text-[13.5px] text-muted-foreground">
                  {row.alt}
                  <span className="mt-0.5 block text-[11.5px] text-subtle">{row.altSub}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
