import { ArrowRight } from "lucide-react";
import { AnimatedNumber } from "@/components/animated-number";
import { AppWindow } from "@/components/app-window";
import { DemoWidget } from "@/components/demo-widget";
import { HashPanel } from "@/components/hash-panel";

const stats = [
  { value: <><span aria-hidden>&lt;</span><AnimatedNumber value={1} suffix="s" /></>, label: "Seal time" },
  { value: <AnimatedNumber value={7} />, label: "Jurisdictions" },
  { value: <AnimatedNumber value={30} suffix="m" />, label: "To integrate" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Canvas: dot grid + a faint indigo wash, both masked out before they
          reach the fold so the page stays white-dominant. */}
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 dot-grid" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 md:px-8 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#problem"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/80 py-1 pr-3 pl-1 text-[12.5px] text-muted-foreground shadow-xs backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.08em] text-accent uppercase">
              New
            </span>
            7 jurisdiction modules live
            <ArrowRight className="size-3 opacity-60" strokeWidth={2} />
          </a>

          <h1 className="mt-7 text-[2.5rem] leading-[1.05] font-semibold text-balance md:text-[4rem]">
            Can you explain an AI decision{" "}
            <span className="font-accent">six months later</span>?
          </h1>

          <p className="mx-auto mt-6 max-w-[38rem] text-[1.0625rem] leading-relaxed text-muted-foreground text-balance">
            AIDAL automatically creates tamper-evident evidence, human-readable explanations, and
            compliance-ready reports for every AI decision.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="#get-key"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-foreground/10 bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-zinc-800 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
            >
              Log your first AI decision
              <ArrowRight className="size-3.5" strokeWidth={2} />
            </a>
            <a
              href="https://youtu.be/i9gs1EUyb80?si=hKREBJz2GFf8yTkM"
              target="_blank"
              rel="noopener"
              className="group inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-muted px-5 text-sm font-medium text-foreground transition-all hover:bg-zinc-200/70 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
            >
              Watch 2-minute demo
              <span className="text-subtle transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          <dl className="mx-auto mt-10 flex w-fit items-stretch divide-x divide-hairline overflow-hidden rounded-xl border border-hairline bg-background/80 shadow-xs backdrop-blur">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-3.5 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="tabular block font-mono text-2xl font-medium tracking-tight text-foreground">
                    {s.value}
                  </span>
                  <span className="mt-1 block font-mono text-[10px] tracking-[0.12em] text-subtle uppercase">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Product asset: the live demo inside a bordered app frame, the way
            Linear anchors every hero with one sharp piece of real product. */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <AppWindow
            label="app.tryaidal.com/decisions/new"
            action={
              <span className="hidden font-mono text-[10px] tracking-[0.1em] text-subtle uppercase sm:inline">
                Interactive
              </span>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr]">
              <div className="flex min-h-[380px] flex-col">
                <DemoWidget />
              </div>
              <div className="flex flex-col justify-between border-t border-hairline bg-card/40 md:border-t-0 md:border-l">
                <div className="p-5">
                  {/* Panel caption, not a document heading — kept out of the
                      outline so the page's h2s stay the section titles. */}
                  <p className="text-[13px] font-medium text-foreground">
                    Every decision becomes a block
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                    Each record is hashed with SHA-256 and chained to the one before it. Change any
                    field and every hash after it breaks — visibly, permanently.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      ["01", "Decision logged via one API call"],
                      ["02", "Hashed, chained, explanation generated"],
                      ["03", "Anchored publicly every 24 hours"],
                    ].map(([n, text]) => (
                      <li key={n} className="flex gap-2.5 text-[12.5px] text-muted-foreground">
                        <span className="font-mono text-[11px] text-subtle">{n}</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <HashPanel />
              </div>
            </div>
          </AppWindow>
        </div>
      </div>
    </section>
  );
}

const storySteps = [
  { num: "01", text: "AI makes a decision." },
  { num: "02", text: "Someone asks “Why?”" },
  { num: "03", text: "Nobody knows." },
  { num: "04", text: "AIDAL already has the answer.", answer: true },
];

export function StoryFlowSection() {
  return (
    <div className="border-y border-hairline bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-hairline px-5 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-8">
        {storySteps.map((s) => (
          <div key={s.num} className="px-5 py-8 first:pl-0 last:pr-0">
            <span
              className={`font-mono text-[11px] tracking-[0.12em] ${
                s.answer ? "text-accent" : "text-subtle"
              }`}
            >
              {s.num}
            </span>
            <p
              className={`mt-2 text-[15px] leading-snug font-medium ${
                s.answer ? "text-accent" : "text-foreground"
              }`}
            >
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
