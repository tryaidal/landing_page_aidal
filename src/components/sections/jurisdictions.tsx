import Image from "next/image";
import { Check } from "lucide-react";
import { jurisdictions } from "@/lib/content";

export function JurisdictionsSection() {
  return (
    <section id="jurisdictions" className="border-y border-hairline bg-card px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="section-label">Jurisdiction modules</div>
        <h2 className="mt-5 mb-4 text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
          Built for your <span className="text-subtle">specific regulator.</span>
        </h2>
        <p className="mb-10 max-w-[34rem] text-[15px] leading-relaxed text-muted-foreground">
          Pass your jurisdiction code and AIDAL automatically checks compliance, flags missing fields, and
          tells you exactly what your regulator requires.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {jurisdictions.map((j) => (
            <div
              key={j.name}
              className="flex flex-col rounded-xl border border-hairline bg-background p-5 shadow-xs transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <Image
                  src={`https://flagcdn.com/w40/${j.flag}.png`}
                  alt={j.country}
                  width={28}
                  height={19}
                  style={{ height: "auto" }}
                  className="rounded-[3px] ring-1 ring-black/10"
                  unoptimized
                />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/8 px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.08em] text-success uppercase">
                  <span className="size-1.5 rounded-full bg-success" />
                  Active
                </span>
              </div>
              <h3 className="mb-3 text-[14px] font-medium">{j.name}</h3>
              <ul className="mb-4 flex-1 space-y-1.5">
                {j.items.map((item) => (
                  <li key={item} className="flex gap-2 text-[12.5px] leading-snug text-muted-foreground">
                    <Check className="mt-0.5 size-3 shrink-0 text-accent" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="pill w-fit">{j.retention}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
