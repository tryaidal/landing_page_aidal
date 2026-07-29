import Image from "next/image";
import { Link000, Link001 } from "@/components/ui/skiper-ui/skiper40";

const footerLinks = [
  { href: "#how", label: "How it works" },
  { href: "#jurisdictions", label: "Jurisdictions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "https://aidal-dashboard.vercel.app", label: "Dashboard", external: true },
  { href: "https://www.linkedin.com/in/anthony-widjaja-b5810b406/", label: "LinkedIn", external: true },
  { href: "/security.html", label: "Security" },
];

const linkClass =
  "text-[13px] text-muted-foreground transition-colors hover:text-foreground";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background px-5 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <Image
              src="/aidal-logo-black.png"
              alt="AIDAL."
              width={1304}
              height={364}
              className="h-5 w-auto max-w-none shrink-0 self-start"
            />
            <p className="text-[12.5px] text-muted-foreground">
              Indonesia · contact:{" "}
              <a
                href="mailto:anthony@tryaidal.com"
                className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
              >
                anthony@tryaidal.com
              </a>
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-2.5 md:flex md:justify-end md:gap-6">
            {footerLinks.map((l) =>
              l.external ? (
                <Link001 key={l.label} href={l.href} className={linkClass}>
                  {l.label}
                </Link001>
              ) : (
                <Link000 key={l.label} href={l.href} className={linkClass}>
                  {l.label}
                </Link000>
              ),
            )}
          </nav>
        </div>
        <div className="flex flex-col gap-4 border-t border-hairline pt-6 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl text-[11.5px] leading-relaxed text-subtle">
            AIDAL provides technical audit infrastructure for AI decision logging. Not a law firm. Not legal
            advice. AIDAL audit records are cryptographically verifiable but do not constitute legal compliance
            certification. Consult a licensed compliance lawyer for your jurisdiction.{" "}
            <a href="/privacy.html" className="underline underline-offset-2 hover:text-foreground">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="/security.html" className="underline underline-offset-2 hover:text-foreground">
              Security
            </a>
          </p>
          <p className="font-mono text-[11.5px] whitespace-nowrap text-subtle">© 2026 AIDAL</p>
        </div>
      </div>
    </footer>
  );
}
