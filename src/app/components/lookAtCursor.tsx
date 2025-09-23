"use client";
import React from "react";
type Props = {
  imageSrc: string;
  size?: number;
  offsetDeg?: number; // rotate offset if your image’s “front” isn’t to the right
  flipOnly?: boolean; // set true to only flip left/right instead of full rotation
  tilt3D?: boolean;
  maxTilt?: number; // max degrees for rotateX/rotateY when tilt3D is enabled
  rotate2D?: boolean; // when false, do not rotate/flip; only 3D tilt
  perspectivePx?: number;
};
export default function LookAtCursor({
  imageSrc,
  size = 200,
  offsetDeg = 0,
  flipOnly = false,
  tilt3D = true,
  maxTilt = 18,
  rotate2D = true,
  perspectivePx = 900,
}: Props) {
  const [angle, setAngle] = React.useState(0);
  const [flip, setFlip] = React.useState(false);
  const [tiltX, setTiltX] = React.useState(0);
  const [tiltY, setTiltY] = React.useState(0);
  const rafRef = React.useRef<number | null>(null);
  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        // Element is fixed at viewport center
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        if (flipOnly) {
          setFlip(dx < 0);
        } else {
          const theta = Math.atan2(dy, dx) * (180 / Math.PI);
          setAngle(theta + offsetDeg);
        }
        if (tilt3D) {
          const nx = Math.max(-1, Math.min(1, dx / (window.innerWidth / 2)));
          const ny = Math.max(-1, Math.min(1, dy / (window.innerHeight / 2)));
          // rotateX tilts based on vertical movement (invert so up tilts back)
          setTiltX(-ny * maxTilt);
          // rotateY tilts based on horizontal movement
          setTiltY(nx * maxTilt);
        } else {
          // reset when disabled
          setTiltX(0);
          setTiltY(0);
        }
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [offsetDeg, flipOnly, tilt3D, maxTilt]);
  const pieces: string[] = [];
  pieces.push(`translate(-50%, -50%)`);
  if (tilt3D) {
    pieces.push(
      `perspective(${perspectivePx}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
    );
  }
  if (rotate2D) {
    if (flipOnly) {
      pieces.push(`scaleX(${flip ? -1 : 1})`);
    } else {
      pieces.push(`rotate(${angle}deg)`);
    }
  }
  const transform = pieces.join(" ");
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-[180%] z-50"
      style={{
        transform,
        transformOrigin: "50% 50%",
        transition: "transform 120ms ease-out",
        willChange: "transform",
      }}
    >
      <img
        src={imageSrc || "/placeholder.svg"}
        alt=""
        width={size}
        height={size}
        className="select-none"
        draggable={false}
      />
    </div>
  );
}
