'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '@/styles/theme'

const Nav = styled.nav`
  background: white;
  box-shadow: ${theme.shadows.lg};
  position: sticky;
  top: 0;
  z-index: 50;
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 0 1.5rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 2rem;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoText = styled.div`
  font-family: ${theme.fonts.bebas};
  font-size: 2.25rem;
  letter-spacing: 0.05em;

  .blue {
    color: ${theme.colors.blue};
  }

  .gold {
    color: ${theme.colors.gold};
  }
`;

const LogoSvg = styled.svg`
  width: 6rem;
  height: 0.75rem;
  margin-top: -0.25rem;
`;

const DesktopMenu = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.dark};
  transition: color ${theme.transitions.normal};

  &:hover {
    color: ${theme.colors.blue};
  }
`;

const BookButton = styled(Link)`
  background: ${theme.colors.blue};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.normal};
  transform: translateY(0);

  &:hover {
    background: ${theme.colors.royal};
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  font-size: 1.5rem;
  color: ${theme.colors.dark};

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'block' : 'none'};
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
`;

const MobileNavLink = styled(Link)`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.dark};
  transition: color ${theme.transitions.normal};

  &:hover {
    color: ${theme.colors.blue};
  }
`;

const MobileBookButton = styled(Link)`
  background: ${theme.colors.blue};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  text-align: center;
  display: inline-block;
  transition: all ${theme.transitions.normal};

  &:hover {
    background: ${theme.colors.royal};
    box-shadow: ${theme.shadows.lg};
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>
      <NavContainer>
        <NavContent>
          {/* Logo */}
          <Link href="/">
            <LogoContainer>
              <LogoText>
                <span className="blue">NEXT</span>
                <span className="gold">REP</span>
              </LogoText>
              <LogoSvg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="3" width="4" height="4" fill="#003262" rx="0.5"/>
                <rect x="10" y="2" width="4" height="6" fill="#003262" rx="0.5"/>
                <rect x="15" y="4" width="70" height="2" fill="#003262" rx="1"/>
                <rect x="86" y="2" width="4" height="6" fill="#003262" rx="0.5"/>
                <rect x="91" y="3" width="4" height="4" fill="#003262" rx="0.5"/>
              </LogoSvg>
            </LogoContainer>
          </Link>

          {/* Desktop Menu */}
          <DesktopMenu>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/programs">Programs</NavLink>
            <NavLink href="/testimonials">Reviews</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <BookButton href="/contact">Book Consultation</BookButton>
          </DesktopMenu>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavContent>

        {/* Mobile Menu */}
        <MobileMenu $isOpen={isOpen}>
          <MobileMenuContent>
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="/programs" onClick={() => setIsOpen(false)}>
              Programs
            </MobileNavLink>
            <MobileNavLink href="/testimonials" onClick={() => setIsOpen(false)}>
              Reviews
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
            <MobileBookButton href="/contact" onClick={() => setIsOpen(false)}>
              Book Consultation
            </MobileBookButton>
          </MobileMenuContent>
        </MobileMenu>
      </NavContainer>
    </Nav>
  )
}
