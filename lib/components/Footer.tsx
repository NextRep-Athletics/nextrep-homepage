"use client";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/lib/styles/theme";
import Image from "next/image";
import AltLogo from "@/lib/assets/icons/WhiteLogo.svg";
import YelpIcon from "@/lib/assets/icons/yelp_favicon.svg";

//#region styled components
const FooterContainer = styled.footer`
  background: ${theme.colors.footerBg};
  color: ${theme.colors.white};
  border-top: 4px solid ${theme.colors.gold};
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
  text-align: center;
  margin: 0;

  @media (min-width: ${theme.breakpoints.md}) {
    text-align: right;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  opacity: 0.85;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;
//#endregion

export default function Footer() {
  return (
    <FooterContainer className="montserrat">
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
            © 2026 NextRep Athletics. All rights reserved. | CSCS Certified |
            MPH
          </Copyright>
          <SocialIconsContainer>
            <SocialIconLink
              href="https://www.yelp.com/biz/nextrep-san-mateo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NextRep on Yelp"
            >
              <Image
                src={YelpIcon.src}
                alt="Yelp"
                width={28}
                height={28}
              />
            </SocialIconLink>
          </SocialIconsContainer>
        </FooterInner>
      </FooterContent>
    </FooterContainer>
  );
}
