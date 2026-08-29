export const theme = {
  colors: {
    blue: "#003262",
    blueLight: "#4A8FAD",
    red: "#C84134",
    dark: "#1A2733",
    royal: "#023E8A",
    gold: "#D4A03A",
    goldDark: "#B8860B",
    goldOnLight: "#655125",
    navy: "#0F2535",
    white: "#F8F8F8",
    gray: "#6B7280",
    inputBg: "#F5F5F5",
    inputBgHover: "#ECECEC",
    inputBgDisabled: "#E0E0E0",
    placeholder: "#595F6B",
    testimonialsBg: "#1A3A52",
    footerBg: "#1A2332",
    scrollbarTrack: "#F1F1F1",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  borderRadius: {
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },
  transitions: {
    normal: "300ms ease-in-out",
  },
};

export type Theme = typeof theme;
