import { useEffect, useRef, useState } from "react";

const GOOGLE_COLORS = ["#4285f4", "#ea4335", "#fbbc05", "#34a853"];

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const posRef = useRef({ x: -100, y: -100 });
  const frameRef = useRef<number>(0);
  const [colorIdx, setColorIdx] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const TRAIL_COUNT = 6;
    const trails = trailsRef.current;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setColorIdx((i) => (i + 1) % GOOGLE_COLORS.length);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isLink =
        el.closest("a, button, [role='button'], input, textarea, select, label, [class*='cursor-pointer']") !== null;
      setIsHovering(isLink);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const trailPositions = Array(TRAIL_COUNT).fill({ x: -100, y: -100 });

    const animate = () => {
      const { x, y } = posRef.current;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x - 16}px, ${y - 16}px) scale(${isHovering ? 1.6 : isClicking ? 0.8 : 1})`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      }

      trailPositions.unshift({ x, y });
      trailPositions.pop();

      trailPositions.forEach((pos, i) => {
        const el = trails[i];
        if (!el) return;
        const t = (i + 1) / TRAIL_COUNT;
        el.style.transform = `translate(${pos.x - 4}px, ${pos.y - 4}px)`;
        el.style.opacity = `${(1 - t) * 0.5}`;
        el.style.width = `${8 - i}px`;
        el.style.height = `${8 - i}px`;
        el.style.background = GOOGLE_COLORS[(colorIdx + i) % GOOGLE_COLORS.length];
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(frameRef.current);
    };
  }, [isHovering, isClicking, colorIdx]);

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        @media (hover: none) { * { cursor: auto !important; } }
      `}</style>

      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: `2px solid ${GOOGLE_COLORS[colorIdx]}`,
          mixBlendMode: "multiply",
        }}
      />

      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: GOOGLE_COLORS[colorIdx],
          transition: "background 0.1s",
        }}
      />

      {/* Trails */}
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) trailsRef.current[i] = el;
            }}
            className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
          />
        ))}
    </>
  );
}