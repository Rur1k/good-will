import type { Variants } from "motion/react";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// Start the animation once, when 30% of the element is visible
export const VIEWPORT = { once: true, amount: 0.3 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
};

// Same as fadeUp, but with its own delay: for items that trigger independently (cards in a list).
// Returns a plain object, so it can be passed from Server Components.
export const fadeUpDelayed = (delay: number): Variants => ({
  hidden: fadeUp.hidden,
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT, delay } },
});

export const stagger = (staggerChildren = 0.15, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

// Curtain reveal for image frames; pair with imageSettle on the <img> inside
export const revealFromLeft: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 1.2, ease: EASE_OUT } },
};

export const revealFromRight: Variants = {
  hidden: { clipPath: "inset(0 0 0 100%)" },
  visible: { clipPath: "inset(0 0 0 0%)", transition: { duration: 1.2, ease: EASE_OUT } },
};

export const imageSettle: Variants = {
  hidden: { scale: 1.2 },
  visible: { scale: 1, transition: { duration: 1.6, ease: EASE_OUT } },
};
