/**
 * The numbered section marker used throughout the page: a small filled
 * circle with a two-digit index, the section label, and an optional
 * right-aligned link — mirrors how each major section on the page is
 * introduced, so scanning the page feels like flipping through numbered
 * chapters rather than an undifferentiated scroll.
 */
export function SectionEyebrow({
  n,
  label,
  action,
}: {
  n: string;
  label: string;
  action?: { href: string; text: string };
}) {
  return (
    <div className="mb-10 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-[10px] font-semibold text-primary-foreground">
          {n}
        </span>
        <span className="text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
          {label}
        </span>
      </div>
      {action ? (
        <a
          href={action.href}
          className="hidden items-center gap-1 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
        >
          {action.text}
          <span aria-hidden>↗</span>
        </a>
      ) : null}
    </div>
  );
}
