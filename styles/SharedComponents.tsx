import styled from 'styled-components'
import Link from 'next/link'
import { theme } from './theme'

// Container
export const Container = styled.div`
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

// Section with padding
export const Section = styled.section<{ $background?: string }>`
  padding: 4rem 0;
  background: ${props => props.$background || 'transparent'};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6rem 0;
  }
`;

// Buttons
export const PrimaryButton = styled(Link)`
  display: inline-block;
  background: ${theme.colors.blue};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.normal};
  text-align: center;

  &:hover {
    background: ${theme.colors.royal};
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(Link)`
  display: inline-block;
  background: ${theme.colors.gold};
  color: ${theme.colors.dark};
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.normal};
  text-align: center;

  &:hover {
    background: ${theme.colors.goldDark};
    color: white;
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

export const OutlineButton = styled(Link)`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid ${theme.colors.blue};
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.normal};
  text-align: center;

  &:hover {
    background: ${theme.colors.blue};
    color: white;
    box-shadow: ${theme.shadows.lg};
  }
`;

export const DarkButton = styled(Link)`
  display: inline-block;
  background: ${theme.colors.dark};
  color: white;
  padding: 0.75rem 2rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.125rem;
  transition: all ${theme.transitions.normal};
  text-align: center;

  &:hover {
    background: ${theme.colors.navy};
  }
`;

// Card
export const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  transition: all ${theme.transitions.normal};

  &:hover {
    box-shadow: ${theme.shadows['2xl']};
    transform: translateY(-8px);
  }
`;

// Typography
export const HeroTitle = styled.h1`
  font-family: ${theme.fonts.bebas};
  font-size: 3.75rem;
  line-height: 1;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 6rem;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 2.25rem;
  margin-bottom: 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

// Grid
export const Grid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(${props => props.$cols || 3}, 1fr);
  }
`;
