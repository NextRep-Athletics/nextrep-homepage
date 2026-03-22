"use client";
import styled from "styled-components";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";
import { GlobalStyles } from "@/lib/styles/GlobalStyles";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
`;

const Main = styled.main`
  flex-grow: 1;
`;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
}
