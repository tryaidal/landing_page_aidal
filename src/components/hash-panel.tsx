"use client";

import { useEffect, useState } from "react";

const HASHES = [
  "a7f3c9b2e4d81f06c3a9",
  "3e8b2a91c7f04d22b185",
  "f2c7a3e9b1d58031e742",
  "8d4f1c6a2e93b74503f1",
  "c9b3e7f2a14d0863d529",
  "1a8d4f7c3e2b9650a847",
  "b5e2c8f1a7d34092fc60",
  "4d7a3c9e2f810b56a193",
];

export function HashPanel() {
  const [rows, setRows] = useState(HASHES.slice(0, 3));

  useEffect(() => {
    let i = 3;
    const id = setInterval(() => {
      setRows([HASHES[i % HASHES.length], HASHES[(i + 1) % HASHES.length], HASHES[(i + 2) % HASHES.length]]);
      i += 1;
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="shrink-0 border-t border-hairline bg-card px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-subtle uppercase">
          Audit chain
        </span>
        <span className="font-mono text-[10px] tracking-[0.06em] text-subtle">latest 3 blocks</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {rows.map((h, i) => {
          const isHead = i === rows.length - 1;
          return (
            <div
              key={h}
              className={`flex items-center gap-2 font-mono text-[11px] ${
                isHead ? "text-foreground" : "text-subtle"
              }`}
            >
              <span
                className={`size-1.5 shrink-0 rounded-full ${isHead ? "bg-success" : "bg-zinc-300"}`}
              />
              <span className="truncate">{h}…</span>
              {isHead && (
                <span className="ml-auto shrink-0 rounded-full border border-success/20 bg-success/8 px-1.5 py-px text-[9px] font-medium tracking-[0.08em] text-success uppercase">
                  head
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
