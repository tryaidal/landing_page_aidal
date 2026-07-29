/**
 * The Linear "product asset" frame: a white surface on a 1px hairline, 12px
 * radius, and a tight stacked shadow. Everything shown as a product preview
 * (demo widget, code sample, dashboard shot) sits inside one of these so the
 * whole page reads as one system rather than a pile of screenshots.
 */
export function AppWindow({
  label,
  action,
  children,
  className = "",
}: {
  label: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-hairline bg-background shadow-lg ${className}`}
    >
      <div className="flex h-10 items-center gap-3 border-b border-hairline bg-card px-3.5">
        <div className="flex shrink-0 gap-1.5">
          <span className="size-2.5 rounded-full bg-zinc-200" />
          <span className="size-2.5 rounded-full bg-zinc-200" />
          <span className="size-2.5 rounded-full bg-zinc-200" />
        </div>
        <span className="truncate font-mono text-[11px] text-subtle">{label}</span>
        {action ? <div className="ml-auto shrink-0">{action}</div> : null}
      </div>
      {children}
    </div>
  );
}
