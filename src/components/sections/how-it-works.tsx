import { AppWindow } from "@/components/app-window";
import { CodeBlock, Cmt, Fn, Key, Pun, Str } from "@/components/code-block";

const steps = [
  {
    n: 1,
    title: "Get your API key instantly",
    body: (
      <>
        Sign up with your company name and email. Your unique{" "}
        <code className="rounded-md border border-hairline bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">
          aidal_live_xxxx
        </code>{" "}
        key is generated in seconds.
      </>
    ),
  },
  {
    n: 2,
    title: "Send decisions after your model runs",
    body: "After your AI makes a decision, send it to AIDAL via one API call. Any language, any model, any cloud provider.",
  },
  {
    n: 3,
    title: "We lock it and check compliance",
    body: "AIDAL cryptographically hashes the decision, chains it, generates a plain-English explanation, and checks it against your regulator's requirements.",
  },
  {
    n: 4,
    title: "Audit anytime. Download the PDF.",
    body: "Open your dashboard. Download a regulator-ready compliance PDF in one click. Hand it to MAS, OJK, or the EU auditor. Done.",
  },
];

const requestLines = [
  <Cmt key="c1"># After your model runs</Cmt>,
  <>
    <Fn>requests.post</Fn>
    <Pun>(</Pun>
  </>,
  <>
    {"  "}
    <Str>&quot;https://aidal-production.up.railway.app/decision&quot;</Str>
    <Pun>,</Pun>
  </>,
  <>
    {"  "}headers<Pun>={"{"}</Pun>
    <Key>&quot;Authorization&quot;</Key>
    <Pun>:</Pun> <Str>&quot;Bearer aidal_live_xxxx&quot;</Str>
    <Pun>{"},"}</Pun>
  </>,
  <>
    {"  "}json<Pun>={"{"}</Pun>
  </>,
  <>
    {"    "}
    <Key>&quot;decision_type&quot;</Key>
    <Pun>:</Pun> <Str>&quot;loan_approval&quot;</Str>
    <Pun>,</Pun>
  </>,
  <>
    {"    "}
    <Key>&quot;model_used&quot;</Key>
    <Pun>:</Pun> <Str>&quot;xgboost-v2&quot;</Str>
    <Pun>,</Pun>
  </>,
  <>
    {"    "}
    <Key>&quot;input_features&quot;</Key>
    <Pun>:</Pun> applicant_data<Pun>,</Pun>
  </>,
  <>
    {"    "}
    <Key>&quot;output&quot;</Key>
    <Pun>:</Pun> model_result<Pun>,</Pun>
  </>,
  <>
    {"    "}
    <Key>&quot;jurisdiction&quot;</Key>
    <Pun>:</Pun> <Str>&quot;SG&quot;</Str>
  </>,
  <>
    {"  "}
    <Pun>{"})"}</Pun>
  </>,
];

const responseLines = [
  <Cmt key="c2"># Response in &lt;1 second</Cmt>,
  <Pun key="open">{"{"}</Pun>,
  <>
    {"  "}
    <Key>&quot;audit_id&quot;</Key>
    <Pun>:</Pun> <Str>&quot;aud_a7f3c9b2…&quot;</Str>
    <Pun>,</Pun>
  </>,
  <>
    {"  "}
    <Key>&quot;hash&quot;</Key>
    <Pun>:</Pun> <Str>&quot;sha256:3e8b2a91…&quot;</Str>
    <Pun>,</Pun>
  </>,
  <>
    {"  "}
    <Key>&quot;explanation&quot;</Key>
    <Pun>:</Pun> <Str>&quot;Loan approved…&quot;</Str>
    <Pun>,</Pun>
  </>,
  <>
    {"  "}
    <Key>&quot;rules_check&quot;</Key>
    <Pun>: {"{"}</Pun>
    <Key>&quot;status&quot;</Key>
    <Pun>:</Pun> <Str>&quot;PASSED&quot;</Str>
    <Pun>{"}"}</Pun>
  </>,
  <Pun key="close">{"}"}</Pun>,
];

export function HowItWorksSection() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <div className="section-label">How it works</div>
      <h2 className="mt-5 mb-12 text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
        One line of code. <span className="text-subtle">Full compliance.</span>
      </h2>
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
        <ol>
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`flex gap-4 ${i !== steps.length - 1 ? "mb-7 border-b border-hairline pb-7" : ""}`}
            >
              <span className="tabular mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-hairline bg-card font-mono text-[11px] font-medium text-muted-foreground">
                {s.n}
              </span>
              <div>
                <h3 className="mb-1.5 text-[15px] font-medium">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="md:sticky md:top-24">
          <AppWindow
            label="decision.py"
            action={
              <span className="pill border-accent/20 bg-accent-soft text-accent">Python</span>
            }
          >
            <CodeBlock lines={requestLines} />
            <div className="border-t border-hairline bg-card/50">
              <CodeBlock lines={responseLines} className="bg-transparent" />
            </div>
          </AppWindow>
        </div>
      </div>
    </section>
  );
}
