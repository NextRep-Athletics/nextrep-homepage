'use client'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYelp } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '@/styles/theme'

const FooterContainer = styled.footer`
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 3rem 1.5rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 3rem 2rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterColumn = styled.div<{ $span?: number }>`
  grid-column: span 1;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-column: ${props => props.$span ? `span ${props.$span}` : 'span 1'};
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 1rem;
`;

const LogoText = styled.div`
  font-family: ${theme.fonts.bebas};
  font-size: 1.875rem;
  letter-spacing: 0.05em;

  .blue {
    color: ${theme.colors.blueLight};
  }

  .gold {
    color: ${theme.colors.gold};
  }
`;

const LogoSubtext = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.gray};
  margin-top: 0.5rem;
`;

const FooterDescription = styled.p`
  color: ${theme.colors.gray};
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${theme.colors.gray};
  transition: color ${theme.transitions.normal};

  &:hover {
    color: ${theme.colors.gold};
  }
`;

const FooterHeading = styled.h3`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.gray};
  transition: color ${theme.transitions.normal};

  &:hover {
    color: ${theme.colors.gold};
  }
`;

const ContactInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${theme.colors.gray};
`;

const ContactInfoItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.gray};
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
`;

const Copyright = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.875rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* Logo and Description */}
          <FooterColumn $span={2}>
            <LogoContainer>
              <LogoText>
                <span className="blue">NEXT</span>
                <span className="gold">REP</span>
              </LogoText>
              <LogoSubtext>ATHLETICS</LogoSubtext>
            </LogoContainer>
            <FooterDescription>
              Science-based personal training combining CSCS certification with public health expertise.
              Building sustainable fitness for life.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Instagram">
                <FaInstagram size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="Facebook">
                <FaFacebookF size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="Yelp">
                <FaYelp size={20} />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterList>
              <FooterListItem>
                <FooterLink href="/about">About</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/programs">Programs</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/testimonials">Reviews</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/contact">Contact</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterColumn>

          {/* Contact Info */}
          <FooterColumn>
            <FooterHeading>Get in Touch</FooterHeading>
            <ContactInfo>
              <ContactInfoItem>contact@nextrep-athletics.com</ContactInfoItem>
              <ContactInfoItem>(555) 123-4567</ContactInfoItem>
              <ContactInfoItem>Serving New Jersey</ContactInfoItem>
              <ContactInfoItem>& Virtual Training Nationwide</ContactInfoItem>
            </ContactInfo>
          </FooterColumn>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © 2024 NextRep Athletics. All rights reserved. | CSCS Certified | MPH
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  )
}
