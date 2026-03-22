"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "@/lib/styles/theme";
import Logo from "@/lib/assets/icons/MainLogo.svg";

//#region styled components
const Nav = styled.nav`
  background: ${theme.colors.inputBg};
  position: sticky;
  top: 0;
  z-index: 50;
  /* Note: Design shows minimal/no shadow - removed box-shadow */
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 0 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 4rem;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DesktopMenu = styled.div`
  display: none;
  align-items: center;
  gap: 3rem; /* Increased spacing between nav items */

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  font-weight: ${theme.fontWeights.semibold};
  font-size: 1rem;
  color: ${theme.colors.blue}; /* Nav links in blue from design */
  transition: color ${theme.transitions.normal};

  /* HOVER NOTE: Add underline animation or color change to lighter blue */
  &:hover {
    color: ${theme.colors.royal};
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  font-size: 1.5rem;
  color: ${theme.colors.blue};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }

  /* HOVER NOTE: Add subtle scale effect on hover */
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  padding: 1rem 0;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(0, 50, 98, 0.1);
`;

const MobileNavLink = styled(Link)`
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.blue};
  padding: 0.5rem 0;
  transition: color ${theme.transitions.normal};

  &:hover {
    color: ${theme.colors.royal};
  }
`;
//#endregion

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#trainers", label: "Trainers" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <Nav className="montserrat">
      <NavContainer>
        <NavContent>
          <LogoLink href="/">
            <Image src={Logo.src} alt="nextrep-logo" width={175} height={50} />
          </LogoLink>

          {/* Desktop Navigation */}
          <DesktopMenu>
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </DesktopMenu>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavContent>

        {/* Mobile Menu */}
        <MobileMenu $isOpen={isOpen}>
          <MobileMenuContent>
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </MobileNavLink>
            ))}
          </MobileMenuContent>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
}
