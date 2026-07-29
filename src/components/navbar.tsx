import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Link000 } from "@/components/ui/skiper-ui/skiper40";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#jurisdictions", label: "Jurisdictions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    // Full-bleed sticky glass bar (Linear's own header pattern): translucent
    // white, 12px blur, single hairline underneath — no floating pill, no
    // drop shadow, so it disappears into the page until content scrolls under.
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          <Image
            src="/aidal-logo-black.png"
            alt="AIDAL."
            width={1304}
            height={364}
            className="h-[22px] w-auto max-w-none shrink-0"
            priority
          />
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link000
                href={l.href}
                className="rounded-md px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none"
              >
                {l.label}
              </Link000>
            </li>
          ))}
          <li>
            <a
              href="https://aidal-dashboard.vercel.app"
              target="_blank"
              rel="noopener"
              className="rounded-md px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none"
            >
              Dashboard
            </a>
          </li>
          <li className="ml-2">
            <a
              href="#get-key"
              className="inline-flex h-8 items-center rounded-lg border border-foreground/10 bg-primary px-3.5 text-[13px] font-medium text-primary-foreground shadow-xs transition-all hover:bg-zinc-800 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
            >
              Get API key
            </a>
          </li>
        </ul>
        <Sheet>
          <SheetContent side="right" className="w-4/5 gap-0 bg-background sm:max-w-xs">
            <SheetHeader className="border-b border-hairline pb-4">
              <SheetTitle>
                <Image
                  src="/aidal-logo-black.png"
                  alt="AIDAL."
                  width={1304}
                  height={364}
                  className="h-5 w-auto max-w-none"
                />
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-0.5 px-3 py-3">
              {links.map((l) => (
                <li key={l.href}>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <a
                        href={l.href}
                        className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:bg-muted"
                      />
                    }
                  >
                    {l.label}
                  </SheetClose>
                </li>
              ))}
              <li>
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href="https://aidal-dashboard.vercel.app"
                      target="_blank"
                      rel="noopener"
                      className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:bg-muted"
                    />
                  }
                >
                  Dashboard
                </SheetClose>
              </li>
            </ul>
            <div className="mt-auto border-t border-hairline p-4">
              <SheetClose
                nativeButton={false}
                render={
                  <a
                    href="#get-key"
                    className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-zinc-800 active:translate-y-px"
                  />
                }
              >
                Get API key
              </SheetClose>
            </div>
          </SheetContent>
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label="Open menu"
                className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-hairline bg-background text-foreground shadow-xs transition-colors hover:bg-muted active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 md:hidden"
              />
            }
          >
            <MenuIcon className="size-4" />
          </SheetTrigger>
        </Sheet>
      </nav>
    </header>
  );
}
