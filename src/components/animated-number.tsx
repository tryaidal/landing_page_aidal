"use client";

import NumberFlow from "@number-flow/react";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

/**
 * Counts up to `value` when it scrolls into view.
 * Adapted from Skiper UI's Skiper 37 (AnimatedNumber_004) — https://skiper-ui.com
 * Free component, attribution required.
 */
export function AnimatedNumber({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    // NumberFlow re-measures layout on every value change to animate the
    // digit flip — onUpdate can fire ~60x/sec during the count-up, which
    // was showing up as forced-reflow time in real-world performance audits.
    // Throttling to ~12 updates/sec keeps the animation visually smooth
    // (still ~12 distinct digit steps over the 1s duration) while cutting
    // the remeasure frequency by roughly 5x.
    let lastUpdate = 0;
    const controls = animate(count, value, {
      duration: 1,
      ease: "easeOut",
      onUpdate: (latest) => {
        const now = performance.now();
        if (now - lastUpdate < 80 && Math.round(latest) !== value) return;
        lastUpdate = now;
        setDisplay(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <span ref={ref}>
      <NumberFlow value={display} prefix={prefix} suffix={suffix} />
    </span>
  );
}
