// ANIMATION VARIANTS
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInUpSmall = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

// TRANSITION PRESETS
export const transitions = {
  fast: { duration: 0.5 },
  normal: { duration: 0.6 },
  slow: { duration: 0.8 },
  withDelay: (delay: number) => ({ duration: 0.6, delay }),
};

// VIEWPORT SETTINGS
export const viewport = {
  once: true,
};

// MOTION PRESETS - COMMON COMBINATIONS READY TO SPREAD
export const motionPresets = {
  fadeInUp: {
    initial: fadeInUp.initial,
    whileInView: fadeInUp.animate,
    transition: transitions.normal,
    viewport,
  },
  fadeInUpFast: {
    initial: fadeInUp.initial,
    whileInView: fadeInUp.animate,
    transition: transitions.fast,
    viewport,
  },
  fadeInUpSlow: {
    initial: fadeInUp.initial,
    whileInView: fadeInUp.animate,
    transition: transitions.slow,
    viewport,
  },
  fadeInUpSmall: {
    initial: fadeInUpSmall.initial,
    whileInView: fadeInUpSmall.animate,
    transition: transitions.normal,
    viewport,
  },
  fadeInLeft: {
    initial: fadeInLeft.initial,
    whileInView: fadeInLeft.animate,
    transition: transitions.normal,
    viewport,
  },
  fadeInRight: {
    initial: fadeInRight.initial,
    whileInView: fadeInRight.animate,
    transition: transitions.normal,
    viewport,
  },
};

// HELPER FUNCTIONS
/**
 * Creates a staggered animation preset with index-based delay
 * @param index - The index of the item in a list
 * @param delayMultiplier - How much to multiply the index by for delay (default: 0.15)
 * @returns Motion props object ready to spread
 */
export const staggeredAnimation = (index: number, delayMultiplier = 0.15) => ({
  initial: fadeInUp.initial,
  whileInView: fadeInUp.animate,
  transition: transitions.withDelay(index * delayMultiplier),
  viewport,
});

/**
 * Creates a fade-in animation that triggers immediately (not on scroll)
 * Useful for hero sections that should animate on page load
 */
export const fadeInImmediate = {
  initial: fadeInUp.initial,
  animate: fadeInUp.animate,
  transition: transitions.slow,
};
