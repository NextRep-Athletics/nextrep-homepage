"use client";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import Image from "next/image";
import AltLogo from "@/lib/assets/icons/WhiteLogo.svg";

const FooterContainer = styled.footer`
  background: #1a2332; /* Dark blue-gray from design */
  color: ${theme.colors.white};
  border-top: 4px solid ${theme.colors.gold}; /* Gold top border */
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 2rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 1.5rem 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 1.5rem 4rem;
  }
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-family: ${theme.fonts.montserrat};
  text-align: center;
  margin: 0;

  @media (min-width: ${theme.breakpoints.md}) {
    text-align: right;
  }
`;

// COMPONENT

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterInner>
          <LogoLink href="/">
            <Image
              src={AltLogo.src}
              alt="nextrep-logo"
              width={175}
              height={50}
            />
          </LogoLink>
          <Copyright>
            © 2024 NextRep Athletics. All rights reserved. | CSCS Certified |
            MPH
          </Copyright>
        </FooterInner>
      </FooterContent>
    </FooterContainer>
  );
}
