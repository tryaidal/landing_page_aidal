import { Fingerprint, Globe2, Clock, FileText, CheckCircle2, Search } from "lucide-react";

const builtFor = ["EU AI Act", "MAS FEAT", "OJK AI Governance (2025)", "VARA UAE", "FCA UK", "CFPB US", "APRA AU"];

const trustItems = [
  { icon: Fingerprint, label: "SHA-256 tamper-proof chain" },
  { icon: Globe2, label: "7 jurisdiction modules live" },
  { icon: Clock, label: "30-minute integration" },
  { icon: FileText, label: "AI explanation per decision" },
  { icon: CheckCircle2, label: "Free during beta" },
  { icon: Search, label: "Regulation text mapped article by article" },
];

export function CredibilityBar() {
  return (
    <div className="border-b border-hairline bg-background px-5 py-4 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3">
        <span className="font-mono text-[10px] font-medium tracking-[0.14em] text-subtle uppercase">
          Built for
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {builtFor.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <div className="border-b border-hairline bg-background">
      <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-5 py-3.5 md:px-8">
        {trustItems.map((item) => (
          <div key={item.label} className="flex shrink-0 items-center gap-2 whitespace-nowrap">
            <item.icon className="size-3.5 text-accent" strokeWidth={2} />
            <span className="text-[12.5px] text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
