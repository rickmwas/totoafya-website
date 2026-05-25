// ── TotoAfya Digital — Framer Motion Animation Variants ────────
import type { Variants } from 'framer-motion'

// Premium spring configurations
export const springSnappy = { type: 'spring', stiffness: 140, damping: 18 }
export const springSmooth = { type: 'spring', stiffness: 90, damping: 15 }
export const springBouncy = { type: 'spring', stiffness: 100, damping: 10 }

// Smooth Expo easing curve (Apple / Google style)
export const easeExpo = [0.16, 1, 0.3, 1]

/** Fade up from offset with smooth expo ease */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeExpo },
  },
}

/** Fade in (no movement) */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/** Slide in from left with smooth physics */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: easeExpo },
  },
}

/** Slide in from right with smooth physics */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: easeExpo },
  },
}

/** Scale up with smooth spring transition */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeExpo },
  },
}

/** Stagger container — children animate one after another */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.03,
    },
  },
}

/** Stagger container with longer delay between items */
export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

/** Premium interactive hover / scale effect using springs */
export const hoverScale = {
  whileHover: { y: -6, scale: 1.025, transition: springSnappy },
  whileTap:   { scale: 0.975, transition: { duration: 0.1 } },
}
