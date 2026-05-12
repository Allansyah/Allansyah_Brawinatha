import { useEffect, useRef } from "react";

// ─── ScrollProgressBar ────────────────────────────────────────────────────────
// Add <ScrollProgressBar /> anywhere in App.tsx (outside main layout)
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="scroll-progress" ref={barRef} style={{ width: "0%" }} />;
}

// ─── useTiltCard hook ─────────────────────────────────────────────────────────
// Usage: const cardRef = useTiltCard();
// Then: <div ref={cardRef} className="tilt-card">...</div>
export function useTiltCard(intensity = 8) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(600px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.01)`;
      el.style.boxShadow = `${-x * 12}px ${-y * 12}px 30px rgba(66,133,244,0.12)`;
    };

    const onLeave = () => {
      el.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
      el.style.boxShadow = "";
      el.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
    };

    const onEnter = () => {
      el.style.transition = "transform 0.1s ease, box-shadow 0.1s ease";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseenter", onEnter);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseenter", onEnter);
    };
  }, [intensity]);

  return ref;
}

// ─── GoogleDotsLoader ─────────────────────────────────────────────────────────
// Drop-in replacement/enhancement for the loading screen dots
export function GoogleDotsLoader() {
  const COLORS = ["#4285f4", "#ea4335", "#fbbc05", "#34a853"];

  return (
    <div className="flex items-center gap-2">
      {COLORS.map((color, i) => (
        <div
          key={i}
          className="w-3 h-3 rounded-full"
          style={{
            background: color,
            animation: `dotBounce 1.2s ease-in-out ${i * 0.15}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40%            { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ─── TypewriterText ───────────────────────────────────────────────────────────
// More polished version of your existing typewriter with cursor blink
interface TypewriterProps {
  texts: string[];
  speed?: number;
  pauseMs?: number;
  className?: string;
}

export function TypewriterText({
  texts,
  speed = 50,
  pauseMs = 2000,
  className = "",
}: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let textIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = texts[textIdx];
      if (ref.current) {
        ref.current.textContent = current.slice(0, charIdx);
      }

      if (!deleting && charIdx === current.length) {
        timer = setTimeout(() => { deleting = true; tick(); }, pauseMs);
        return;
      }

      if (deleting && charIdx === 0) {
        deleting = false;
        textIdx = (textIdx + 1) % texts.length;
      }

      charIdx += deleting ? -1 : 1;
      timer = setTimeout(tick, deleting ? speed / 2 : speed);
    };

    tick();
    return () => clearTimeout(timer);
  }, [texts, speed, pauseMs]);

  return (
    <span className={className}>
      <span ref={ref} />
      <span
        className="inline-block w-0.5 h-[1em] bg-current align-middle ml-0.5"
        style={{ animation: "cursorBlink 1s step-end infinite" }}
      />
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </span>
  );
}