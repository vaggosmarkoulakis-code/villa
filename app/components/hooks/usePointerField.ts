"use client";

import { useEffect, useRef } from "react";

/**
 * Reports the pointer's position inside an element as two custom properties:
 * --px and --py, each running -1 to 1 from edge to edge, plus --pointer which
 * is 1 while the pointer is inside and 0 otherwise.
 *
 * The hook only measures. CSS decides what to do with the numbers, which is
 * why the same nine lines drive the tilt on a signature card, the parallax
 * layers on an event card and the travelling highlight on a menu row.
 *
 * It stays out of the way on coarse pointers — a tilt that needs a hover to
 * exist would only fight a tap — and when the visitor asks for reduced motion.
 */
export function usePointerField<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const stillness = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || stillness.matches) {
      return;
    }

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const apply = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) {
        return;
      }
      el.style.setProperty("--px", (((pointerX - rect.left) / rect.width) * 2 - 1).toFixed(3));
      el.style.setProperty("--py", (((pointerY - rect.top) / rect.height) * 2 - 1).toFixed(3));
    };

    const handleEnter = () => {
      el.style.setProperty("--pointer", "1");
      el.style.willChange = "transform";
    };

    const handleMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) {
        frame = requestAnimationFrame(apply);
      }
    };

    const handleLeave = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      el.style.setProperty("--pointer", "0");
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
      el.style.willChange = "";
    };

    el.addEventListener("pointerenter", handleEnter);
    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    el.addEventListener("pointercancel", handleLeave);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      el.removeEventListener("pointerenter", handleEnter);
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
      el.removeEventListener("pointercancel", handleLeave);
      el.style.willChange = "";
    };
  }, []);

  return ref;
}
