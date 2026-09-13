"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useSyncExternalStore } from "react";

const FINE_POINTER_QUERY = "(pointer: fine)";

function subscribeToFinePointer(callback: () => void) {
  const mediaQueryList = window.matchMedia(FINE_POINTER_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getHasFinePointer() {
  return window.matchMedia(FINE_POINTER_QUERY).matches;
}

// Toujours false côté serveur — le curseur ne s'active qu'après hydratation client.
function getServerHasFinePointer() {
  return false;
}

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const hasFinePointer = useSyncExternalStore(
    subscribeToFinePointer,
    getHasFinePointer,
    getServerHasFinePointer,
  );
  const enabled = hasFinePointer && !prefersReducedMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.3 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.3 });

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-encre md:block"
      // Position dérivée du pointeur en temps réel — Framer Motion l'exprime via `style`, pas une classe statique.
      style={{ x: springX, y: springY }}
    />
  );
}
