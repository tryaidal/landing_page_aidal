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
    <div className="sticky top-4 z-50 px-4 md:px-8">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-primary px-4 text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.12)] md:px-6">
        <Link href="/" className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <Image
            src="/aidal-logo.png?v=2"
            alt="AIDAL"
            width={705}
            height={140}
            className="h-7 w-auto max-w-none shrink-0"
            priority
          />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link000 href={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground focus-visible:text-primary-foreground focus-visible:outline-none">
                {l.label}
              </Link000>
            </li>
          ))}
          <li>
            <a
              href="https://aidal-dashboard.vercel.app"
              target="_blank"
              rel="noopener"
              className="text-sm font-medium text-primary-foreground/60 transition-colors hover:text-primary-foreground/90 focus-visible:text-primary-foreground/90 focus-visible:outline-none"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#get-key"
              className="rounded-full bg-accent px-5 py-2 text-[13px] font-semibold text-accent-foreground transition-all hover:opacity-85 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-foreground/40"
            >
              Get API Key
            </a>
          </li>
        </ul>
        <Sheet>
          <SheetContent side="right" className="w-4/5 gap-0 bg-background sm:max-w-xs">
            <SheetHeader className="border-b border-border pb-4">
              <SheetTitle>
                <Image
                  src="/aidal-logo.png?v=2"
                  alt="AIDAL"
                  width={705}
                  height={140}
                  className="h-6 w-auto max-w-none"
                />
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1 px-4 py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <a
                        href={l.href}
                        className="block rounded-md px-2 py-3 text-base text-foreground/80 transition-colors hover:bg-muted hover:text-foreground active:bg-muted"
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
                      className="block rounded-md px-2 py-3 text-base text-foreground/80 transition-colors hover:bg-muted hover:text-foreground active:bg-muted"
                    />
                  }
                >
                  Dashboard
                </SheetClose>
              </li>
            </ul>
            <div className="mt-auto border-t border-border p-4">
              <SheetClose
                nativeButton={false}
                render={
                  <a
                    href="#get-key"
                    className="flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-85 active:scale-[0.97]"
                  />
                }
              >
                Get API Key
              </SheetClose>
            </div>
          </SheetContent>
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label="Open menu"
                className="flex size-9 shrink-0 items-center justify-center rounded-full text-primary-foreground transition-colors hover:bg-white/10 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
              />
            }
          >
            <MenuIcon className="size-5" />
          </SheetTrigger>
        </Sheet>
      </nav>
    </div>
  );
}
