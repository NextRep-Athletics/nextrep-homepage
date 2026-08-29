"use client";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Respect users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  body {
    font-family: var(--font-inter), sans-serif;
    background-color: ${theme.colors.white};
    color: ${theme.colors.dark};
    line-height: normal;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.scrollbarTrack};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.blue};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.royal};
  }

  /* Remove default link styles */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Remove default button styles */
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* Remove default input styles */
  input, textarea, select {
    font-family: inherit;
  }

  .text-gold {
    color: ${theme.colors.gold};
  }
 
  .montserrat {
    font-family: var(--font-montserrat), sans-serif;
  }
`;
