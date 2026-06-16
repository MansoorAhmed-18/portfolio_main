import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] transition-opacity duration-300"
      style={{
        background: `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--orange) 18%, transparent), transparent 60%)`,
        mixBlendMode: "screen",
      }}
    />
  );
}
