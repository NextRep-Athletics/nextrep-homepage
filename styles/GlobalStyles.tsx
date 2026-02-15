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

  body {
    font-family: ${theme.fonts.inter};
    background-color: ${theme.colors.white};
    color: ${theme.colors.dark};
    line-height: normal;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
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
    color: #D4A03A;
  }
 
  .font-montserrat {
    font-family: var(--font-montserrat), sans-serif;
  }
`;
