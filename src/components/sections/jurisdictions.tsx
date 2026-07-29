import Image from "next/image";
import { Check } from "lucide-react";
import { jurisdictions } from "@/lib/content";
import { SectionEyebrow } from "@/components/section-eyebrow";

// EU AI Act carries the highest stakes (10-year retention, the nearest
// binding high-risk deadline) — featured large, the way the reference
// layout gives its most consequential item the big card.
const featuredIndex = jurisdictions.findIndex((j) => j.flag === "eu");
const featured = jurisdictions[featuredIndex];
const rest = jurisdictions.filter((_, i) => i !== featuredIndex);

export function JurisdictionsSection() {
  return (
    <section id="jurisdictions" className="bg-secondary px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="03" label="Jurisdiction modules" />
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Built for your
          <br />
          <em className="text-muted-foreground not-italic">specific regulator.</em>
        </h2>
        <p className="mb-10 max-w-[500px] text-sm leading-relaxed text-muted-foreground">
          Pass your jurisdiction code and AIDAL automatically checks compliance, flags missing fields, and
          tells you exactly what your regulator requires.
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.3fr_1fr]">
          {/* Featured card — the highest-stakes jurisdiction, given the room the
              rest of the grid doesn't get. */}
          <div className="rounded-xl border border-border border-l-4 border-l-accent bg-background p-8">
            <div className="mb-5 flex items-center justify-between">
              <Image
                src={`https://flagcdn.com/w40/${featured.flag}.png`}
                alt={featured.country}
                width={44}
                height={30}
                style={{ height: "auto" }}
                className="rounded-sm shadow-sm"
                unoptimized
              />
              <span className="flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold tracking-wide text-primary-foreground uppercase">
                <span className="size-1.5 rounded-full bg-accent" />
                Active
              </span>
            </div>
            <h3 className="mb-4 text-xl font-semibold">{featured.name}</h3>
            <ul className="mb-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {featured.items.map((item) => (
                <li key={item} className="relative border-b border-border py-1.5 pl-5 text-[13px] text-muted-foreground">
                  <Check className="absolute top-2 left-0 size-3 text-accent" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
            <span className="meta-text inline-block rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
              {featured.retention}
            </span>
          </div>

          {/* The remaining jurisdictions as a compact, scrollable row — same
              pattern the reference uses for its thumbnail programs row. */}
          <div className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {rest.map((j) => (
              <div
                key={j.name}
                className="w-[220px] shrink-0 rounded-lg border border-border bg-background p-4 transition-colors hover:bg-secondary/40 lg:w-auto lg:flex-1"
              >
                <div className="mb-2.5 flex items-center justify-between">
                  <Image
                    src={`https://flagcdn.com/w40/${j.flag}.png`}
                    alt={j.country}
                    width={28}
                    height={19}
                    style={{ height: "auto" }}
                    className="rounded-sm shadow-sm"
                    unoptimized
                  />
                  <span className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                    {j.retention}
                  </span>
                </div>
                <h3 className="text-[13px] font-semibold">{j.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
