"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBg({ src }: { src: string }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number>(0);
  const currentY = useRef(0);

  useEffect(() => {
    const animate = () => {
      const targetY = window.scrollY * 0.12;
      currentY.current += (targetY - currentY.current) * 0.06;
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${currentY.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt=""
        className="absolute w-full will-change-transform object-cover"
        style={{
          height: "115%",
          top: "-7.5%",
          filter: "saturate(0.7) brightness(0.55)",
        }}
      />
    </div>
  );
}
