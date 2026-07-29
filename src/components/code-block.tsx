import { cn } from "@/lib/utils";

/**
 * Light code view in the Linear register: white ground, hairline gutter,
 * low-saturation syntax colours. Highlighting is deliberately restrained —
 * four token colours total, so a code sample reads as a document, not a
 * rainbow. Line numbers live in their own non-selectable gutter column.
 */
export function CodeBlock({
  lines,
  className,
}: {
  lines: React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={cn("overflow-x-auto bg-background py-3 font-mono text-[12px] leading-[1.7]", className)}>
      {lines.map((line, i) => (
        <div key={i} className="grid grid-cols-[2.75rem_1fr] transition-colors hover:bg-muted/60">
          <span className="tabular border-r border-hairline pr-3 text-right text-[11px] text-zinc-300 select-none">
            {i + 1}
          </span>
          <span className="pr-6 pl-4 whitespace-pre text-foreground">{line}</span>
        </div>
      ))}
    </div>
  );
}

/** Comment. */
export const Cmt = ({ children }: { children: React.ReactNode }) => (
  <span className="text-zinc-400 italic">{children}</span>
);
/** String literal. */
export const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-emerald-600">{children}</span>
);
/** Object key / attribute. */
export const Key = ({ children }: { children: React.ReactNode }) => (
  <span className="text-accent">{children}</span>
);
/** Function or method call. */
export const Fn = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-foreground">{children}</span>
);
/** Punctuation, brackets, operators. */
export const Pun = ({ children }: { children: React.ReactNode }) => (
  <span className="text-zinc-400">{children}</span>
);
