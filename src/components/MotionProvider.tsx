"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

// Disables transform/layout animations for users with "reduce motion" enabled in the OS
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
