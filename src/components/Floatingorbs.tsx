import { useEffect, useRef } from "react";

const ORBS = [
  { color: "#4285f4", x: 15, y: 20, size: 280, duration: 18 },
  { color: "#ea4335", x: 75, y: 60, size: 200, duration: 22 },
  { color: "#fbbc05", x: 50, y: 80, size: 240, duration: 26 },
  { color: "#34a853", x: 85, y: 15, size: 180, duration: 20 },
  { color: "#4285f4", x: 30, y: 70, size: 150, duration: 30 },
];

export default function FloatingOrbs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full orb-float"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            opacity: 0.03,
            filter: "blur(60px)",
            animationDuration: `${orb.duration}s`,
            animationDelay: `${i * 3}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.05); }
          50% { transform: translate(-15px, 20px) scale(0.95); }
          75% { transform: translate(25px, 10px) scale(1.02); }
        }
        .orb-float {
          animation: orbFloat linear infinite;
        }
      `}</style>
    </div>
  );
}