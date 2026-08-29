"use client";
import styled from "styled-components";
import { MotionConfig } from "framer-motion";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";
import { GlobalStyles } from "@/lib/styles/GlobalStyles";
import { theme } from "@/lib/styles/theme";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
`;

const SkipLink = styled.a`
  position: absolute;
  left: 1rem;
  top: -100px;
  z-index: 100;
  padding: 0.75rem 1.25rem;
  background: ${theme.colors.blue};
  color: #fff;
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.fontWeights.semibold};
  transition: top 0.2s ease-in-out;

  &:focus {
    top: 1rem;
    outline: 3px solid ${theme.colors.gold};
    outline-offset: 2px;
  }
`;

const Main = styled.main`
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <LayoutWrapper>
        <GlobalStyles />
        <SkipLink href="#main-content">Skip to main content</SkipLink>
        <Navbar />
        <Main id="main-content" tabIndex={-1}>
          {children}
        </Main>
        <Footer />
      </LayoutWrapper>
    </MotionConfig>
  );
}
