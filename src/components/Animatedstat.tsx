import { useEffect, useRef, useState } from "react";

// ─── useAnimatedCount hook ───────────────────────────────────────────────────
export function useAnimatedCount(target: number, duration = 1200, startOnMount = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(startOnMount);
  const rafRef = useRef<number>(0);

  const start = () => setStarted(true);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target, duration]);

  return { count, start };
}

// ─── AnimatedStat component ───────────────────────────────────────────────────
interface AnimatedStatProps {
  value: string;     // e.g. "2+" or "9+" — the suffix is kept
  label: string;
}

export function AnimatedStat({ value, label }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const numPart = parseInt(value);
  const suffix = value.replace(String(numPart), "");
  const { count, start } = useAnimatedCount(numPart, 1400);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          start();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="p-4 text-center border-r border-[#dadce0] last:border-r-0">
      <div
        className="text-[18px] font-bold text-[#202124] transition-all"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)", transition: "all 0.6s ease" }}
      >
        {count}{suffix}
      </div>
      <div className="text-[11px] text-[#70757a] uppercase font-bold tracking-tighter">
        {label}
      </div>
    </div>
  );
}