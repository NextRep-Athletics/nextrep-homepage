"use client";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import Image from "next/image";
import AltLogo from "@/lib/assets/icons/WhiteLogo.svg";

// STYLED COMPONENTS

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

  /* HOVER NOTE: Add subtle opacity change or scale effect */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BarbellIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* TODO: Replace with actual barbell icon/image */
  color: ${theme.colors.gold};
  font-size: 1.25rem;
`;

const LogoText = styled.div`
  font-family: ${theme.fonts.bebas};
  font-size: 1.75rem;
  letter-spacing: 0.05em;
  display: flex;
  color: ${theme.colors.white};
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
          {/* Logo with Barbell Icons */}
          <LogoLink href="/">
            <Image
              src={AltLogo.src}
              alt="nextrep-logo"
              width={175}
              height={50}
            />
          </LogoLink>

          {/* Copyright */}
          <Copyright>
            © 2024 NextRep Athletics. All rights reserved. | CSCS Certified |
            MPH
          </Copyright>
        </FooterInner>
      </FooterContent>
    </FooterContainer>
  );
}
